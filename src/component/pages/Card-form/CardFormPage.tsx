// import { useState } from "react";
import { useState } from "react";
import "./CardFormPage.css";
import { SubmitHandler, useForm } from "react-hook-form";
import CardFront from "../../../assets/Card-form/bg-card-front.png";
import CardBack from "../../../assets/Card-form/bg-card-back.png";
import logo from "../../../assets/Card-form/card-logo.svg";
import SuccessComponent from "./components/SuccessComponent";
export interface FormsData {
  name: string;
  number: string;
  month: string;
  year: string;
  cvc: string;
}
export default function CardFormPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  // const [details, setDetails] = useState<FormsData>();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<FormsData>({
    defaultValues: {
      name: "Jane Appleseed",
      number: "1234567891230000",
      month: "00",
      year: "00",
      cvc: "123",
    },
  });

  const watchAll = watch();
  const onSubmit: SubmitHandler<FormsData> = () => {
    if (isValid) setIsSubmitted(true);
  };

  // console.log(watchAll);

  const formatStr = () => {
    var str = "";
    for (let i = 0; i < watchAll.number.length; i++) {
      if (i % 4 == 0) {
        str += " ";
      }
      str += watchAll.number.charAt(i);
    }
    return str;
  };
  return (
    <>
      <div className="card__form-page">
        <div className="card__image-container">
          <div className="image__container--1">
            <img src={logo} className="logo" alt="" />
            <p className="card__name">{watchAll.name}</p>
            <p className="card__number">{formatStr()}</p>
            <p className="card__date">
              {watchAll.month}/{watchAll.year}
            </p>
            <img src={CardFront} alt="" />
          </div>
          <div className="image__container--2">
            <p className="card__cvc">{watchAll.cvc}</p>
            <img src={CardBack} alt="" />
          </div>
        </div>
        {isSubmitted ? (
          <SuccessComponent />
        ) : (
          <div className="form__container">
            <form className="card__form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form__field">
                <label htmlFor="name">Cardholder name</label>
                <input
                  placeholder="e.g. Jane Appleseed"
                  className=""
                  id="name"
                  type="text"
                  {...register("name", {
                    required: true,
                    pattern: /^[a-zA-Z\s]+$/,
                  })}
                />
                {errors.name?.type === "required" && (
                  <p className="error-msg">Can't be Blank</p>
                )}
                {errors.name?.type == "pattern" && (
                  <p className="error-msg">Only Letters are allowed</p>
                )}
              </div>
              <div className="form__field">
                <label htmlFor="number">Card number</label>
                <input
                  placeholder="e.g. 1234 5678 9123 0000"
                  className=""
                  id="number"
                  type="text"
                  {...register("number", {
                    required: true,
                    minLength: 16,
                    maxLength: 16,
                    pattern: /^[0-9]+$/,
                  })}
                />
                {errors.number?.type === "required" && (
                  <p className="error-msg">Can't be Blank</p>
                )}
                {errors.number?.type == "pattern" && (
                  <p className="error-msg">Only number are allowed</p>
                )}
              </div>
              <div className="form__field-grid">
                <div className="form__field-span-2">
                  <label htmlFor="month">Exp. date (MM/YY)</label>
                  <div className="form__inner-field">
                    <input
                      placeholder="MM"
                      type="text"
                      {...register("month", {
                        required: true,
                        min: 1,
                        max: 12,
                        minLength: 2,
                        maxLength: 2,
                      })}
                    />
                    <input
                      placeholder="YY"
                      type="text"
                      {...register("year", {
                        required: true,
                        min: new Date().getFullYear() - 2000,
                        minLength: 2,
                        maxLength: 2,
                      })}
                    />
                  </div>
                  {errors.month?.type === "required" ||
                  errors.year?.type === "required" ? (
                    <p className="error-msg">Can't be blank</p>
                  ) : null}
                  {(errors.month?.type === "pattern" ||
                    errors.year?.type === "pattern") && (
                    <p className="error-msg">Only numbers are allowed</p>
                  )}
                </div>
                <div className="form__field-span-2">
                  <label htmlFor="cvc">CVC</label>
                  <input
                    placeholder="e.g. 123"
                    id="cvc"
                    type="text"
                    {...register("cvc", {
                      required: true,
                      minLength: 3,
                      maxLength: 3,
                      pattern: /^[0-9]+$/,
                    })}
                  />
                  {errors.cvc?.type === "required" && (
                    <p className="error-msg">Can't be blank</p>
                  )}
                  {errors.cvc?.type === "pattern" && (
                    <p className="error-msg">Only numbers are allowed</p>
                  )}
                </div>
              </div>
              <button className="btn btn-submit" type="submit">
                Confirm
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

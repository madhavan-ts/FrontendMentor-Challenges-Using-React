import newsLetterImagedesk from "../../../../assets/Newsletter-Sign-up/illustration-sign-up-desktop.svg";
import newsLetterImageMobile from "../../../../assets/Newsletter-Sign-up/illustration-sign-up-mobile.svg";
import listIcon from "../../../../assets/Newsletter-Sign-up/icon-list.svg";
import { useState } from "react";
interface Props {
  email: string;
  handleChange: (item: string) => void;
  handleSubmit: () => void;
}
function NewsletterForm({ email, handleChange, handleSubmit }: Props) {
  const [isValidEmail, setIsValidEmail] = useState("");
  const list = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!",
  ];

  const validateEmail = (item: string) => {
    const regx = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (item === "") {
      setIsValidEmail("empty");
    } else if (!regx.test(email)) {
      // handleSubmit(email);
      setIsValidEmail("invalid");
    } else {
      handleSubmit();
    }
  };

  return (
    <div className="newsletter__card">
      <img className="newsletter__image--mobile" src={newsLetterImageMobile} />
      <div className="newsletter__content">
        <h1 className="newsletter__heading">Stay Updated!</h1>
        <p className="newsletter__para">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul className="newsletter__list">
          {list.map((item, index) => (
            <li key={index} className="newsletter__item">
              <img src={listIcon} /> {item}
            </li>
          ))}
        </ul>
        <form action="" className="newsletter__form">
          <div className="text__container">
            <label className="newsletter__form__label" htmlFor="email">
              Email Address
            </label>
            <p
              className={
                "form__error" +
                (isValidEmail === "invalid" || isValidEmail === "empty"
                  ? " error"
                  : "")
              }
            >
              Enter a valid email
            </p>
          </div>

          <input
            className={
              "newsletter__form__input" +
              (isValidEmail === "invalid" || isValidEmail === "empty"
                ? " input__error"
                : "")
            }
            type="email"
            required
            name="email"
            id="email"
            placeholder="email@company.com"
            onChange={(event) => handleChange(event.target.value)}
          />
          <button
            onClick={() => validateEmail(email)}
            className="newsletter__form__button"
            type="button"
          >
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
      <div className="newsletter__image-container">
        <img className="newsletter__image" src={newsLetterImagedesk} />
      </div>
    </div>
  );
}

export default NewsletterForm;

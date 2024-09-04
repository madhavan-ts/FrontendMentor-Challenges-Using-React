import logo from "../../../assets/TipCalculator/logo.svg";
import person from "../../../assets/TipCalculator/icon-person.svg";
import dollar from "../../../assets/TipCalculator/icon-dollar.svg";
import "./TipCalculatorFormPage.css";
import { useRef, useState } from "react";
export default function TipCalculatorPage() {
  const [amount, setAmount] = useState<any>(null);
  const [percent, setPercent] = useState<any>(null);
  const [persons, setPersons] = useState<any>(null);
  const customInputRef = useRef();

  const handleAmountChange = (e) => {
    if (e.target.value === "" || Number(e.target.value) === 0) {
      setAmount(null);
      return;
    }
    setAmount(Number(e.target.value));
  };

  const handlePercentChange = (e) => {
    if (e.target.value === "" || Number(e.target.value) === 0) {
      setPercent(null);
      return;
    }
    setPercent(Number(e.target.value));
  };

  const isValidFields = () => {
    if (
      amount === null ||
      percent === null ||
      persons === null ||
      persons === 0
    )
      return false;
    return true;
  };

  const handlePersonChange = (e) => {
    if (e.target.value === "" || Number(e.target.value) === 0) {
      setPersons(null);
      return;
    }
    setPersons(Number(e.target.value));
  };
  return (
    <>
      <div className="tip_calc">
        <div className="tip_calc__container">
          <img src={logo} alt="SPLITTER" />
          <div className="tip_calc__wrapper">
            <form className="tip_calc__form">
              <div className="tip_calc__form-field">
                <label htmlFor="" className="tip_calc__label">
                  Bill
                </label>
                <div className="tip_calc__form-input">
                  <img src={dollar} alt="dollar" />
                  <input
                    type="number"
                    // step="any"
                    id=""
                    placeholder="0"
                    step={"any"}
                    className="tip_calc__input"
                    value={amount}
                    onChange={handleAmountChange}
                  />
                </div>
              </div>
              <div className="tip_calc__form-field">
                <label htmlFor="" className="tip_calc__label">
                  Select Tip %
                </label>
                <div className="tip_calc__btn-grid">
                  {[5, 10, 20, 25, 50].map((i) => (
                    <button
                      className={
                        "btn btn--option " + (percent === i ? "active" : "")
                      }
                      type="button"
                      onClick={() => {
                        setPercent(i);
                      }}
                    >
                      {i}%
                    </button>
                  ))}
                  <div>
                    <input
                      type="number"
                      step={"any"}
                      min={"1"}
                      max={"100"}
                      id=""
                      placeholder="Custom"
                      className="tip_calc__input tip_calc__input--custom"
                      onChange={handlePercentChange}
                      ref={customInputRef}
                    />
                  </div>
                </div>
              </div>
              <div className="tip_calc__form-field">
                <label htmlFor="" className="tip_calc__label">
                  Number of people
                </label>
                <div className="tip_calc__form-input">
                  <img src={person} alt="Person" />
                  <input
                    type="number"
                    id=""
                    placeholder="0"
                    className={
                      "tip_calc__input " + (persons === 0 ? "error" : "")
                    }
                    step={1}
                    value={persons}
                    onChange={handlePersonChange}
                  />
                </div>
              </div>
            </form>
            <div className="result">
              <div className="result__text-wrapper">
                <div>
                  <p>Tip Amount</p>
                  <span>/ person</span>
                </div>
                <p className="result__amount">
                  $
                  {isValidFields()
                    ? Math.round(((amount * (percent / 100)) / persons) * 100) /
                      100
                    : "0.00"}
                </p>
              </div>
              <div className="result__text-wrapper">
                <div>
                  <p>Total</p>
                  <span>/ person</span>
                </div>
                <p className="result__amount">
                  $
                  {isValidFields()
                    ? Math.round(
                        ((amount + amount * (percent / 100)) / persons) * 100
                      ) / 100
                    : "0.00"}
                </p>
              </div>
              <button
                className="btn"
                onClick={() => {
                  setAmount(0);
                  setPercent(0);
                  setPersons(0);
                  customInputRef.current.value = "";
                }}
              >
                RESET
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

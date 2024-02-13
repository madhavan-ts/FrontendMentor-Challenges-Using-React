import tick from "../.../../../../../assets/Card-form/icon-complete.svg";
export default function SuccessComponent() {
  return (
    <>
      <div className="success__container">
        <img src={tick} alt="" />
        <p className="success-msg">Thank you!</p>
        <p className="success-caption">We've added your card details</p>
        <button className="btn ">Continue</button>
      </div>
    </>
  );
}

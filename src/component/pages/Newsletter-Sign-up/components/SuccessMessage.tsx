import successIcon from "../../../../assets/Newsletter-Sign-up/icon-success.svg";
interface props {
  email: string;
}
function SuccessMessage({ email }: props) {
  return (
    <div className="success__dialog">
      <img src={successIcon} className="success__icon" />
      <h1 className="success__heading">Thanks for subscribing!</h1>
      <p className="success__message">
        A confirmation email has been sent to
        <span className="success__email">{" " + email}</span> Please open it and
        click the button inside to confirm your subscription.
      </p>
      <button className="success__btn" role="btn">
        Dismiss message
      </button>
    </div>
  );
}

export default SuccessMessage;

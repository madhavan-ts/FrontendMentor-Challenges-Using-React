import successImage from "../../../../assets/Rating/illustration-thank-you.svg";

interface SubmittedComponentProps {
  rating: number;
}
function SubmittedComponent({ rating }: SubmittedComponentProps) {
  return (
    <>
      <div className="card submitted__card">
        <img
          src={successImage}
          alt="success Image"
          className="submitted__card-image"
        />
        <p className="card__rating-value">You selected {rating} out of 5 </p>
        <h1 className="card__heading">Thank you!</h1>
        <p className="card__caption card__caption--submitted">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </>
  );
}

export default SubmittedComponent;

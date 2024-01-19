// import "../RatingPage.css";
import starIcon from "../../../../assets/Rating/icon-star.svg";
interface RatingComponentProps {
  rating: number;
  handleClick: (item: number) => void;
  handleSubmit: () => void;
}

function RatingComponent({
  rating,
  handleClick,
  handleSubmit,
}: RatingComponentProps) {
  const vals = [1, 2, 3, 4, 5];
  return (
    <div className="card">
      <img src={starIcon} alt="star-icon" className="card__star-img" />
      <h1 className="card__heading">How did we do?</h1>
      <p className="card__caption">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="rating__number">
        {vals.map((item) => (
          <span
            key={item}
            className={"rating__number-num " + (rating === item && "selected")}
            onClick={() => {
              handleClick(item);
            }}
          >
            {item}
          </span>
        ))}
      </div>
      <button
        className="card__btn"
        onClick={() => {
          handleSubmit();
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default RatingComponent;

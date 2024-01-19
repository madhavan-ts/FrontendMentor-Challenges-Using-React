import { useState } from "react";
import Attribution from "../../resuables/Attribution";
import RatingComponent from "./components/RatingComponent";
import "./RatingPage.css";
import SubmittedComponent from "./components/SubmittedComponent";

function RatingPage() {
  const [rating, setRating] = useState(-1);
  const [isSubmitted, setSubmit] = useState(false);

  return (
    <>
      <div className="rating-container">
        {isSubmitted === false ? (
          <RatingComponent
            handleSubmit={() => {
              setSubmit(true);
            }}
            rating={rating}
            handleClick={(item) => {
              setRating(item);
            }}
          />
        ) : (
          <SubmittedComponent rating={rating} />
        )}

        <Attribution
          name="Madhavan"
          link="https://www.frontendmentor.io/profile/madhavan-ts"
          color="white"
          linkColor="grey"
        />
      </div>
    </>
  );
}

export default RatingPage;

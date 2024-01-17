import { useState } from "react";

function Accordion({ title, description }: AccordionProps) {
  const [isActive, setActive] = useState(false);
  return (
    <>
      <div className="accordian__item">
        <div className="accordian__title">
          <h2 className="accordian__question">{title}</h2>
          <img
            src={isActive ? minusIcon : plusIcon}
            alt=""
            onClick={() => setActive(!isActive)}
          />
        </div>
        <p className="accordian__answer">{description}</p>
      </div>
    </>
  );
}

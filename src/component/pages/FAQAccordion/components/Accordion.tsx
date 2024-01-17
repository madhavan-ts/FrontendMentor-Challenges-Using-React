import { useState } from "react";
import plusIcon from "../../../../assets/FAQAccordion/icon-plus.svg";
import minusIcon from "../../../../assets/FAQAccordion/icon-minus.svg";

interface AccordionProps {
  title: string;
  description: string;
}

function Accordion({ title, description }: AccordionProps) {
  const [isActive, setActive] = useState(false);
  const handleClick = () => setActive(!isActive);
  return (
    <>
      <div className="accordion__item">
        <div className="accordion__title-wrapper" onClick={handleClick}>
          <h2 className="accordion__title">{title}</h2>
          <img src={isActive ? minusIcon : plusIcon} />
        </div>
        {isActive && <p className="accordion__description">{description}</p>}
      </div>
    </>
  );
}

export default Accordion;

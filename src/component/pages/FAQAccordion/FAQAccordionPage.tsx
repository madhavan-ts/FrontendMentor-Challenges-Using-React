import "./FAQAccordianPage.css";
import starIcon from "../../../assets/FAQAccordion/icon-star.svg";
import Attribution from "../../resuables/Attribution";
import Accordion from "./components/Accordion";
import data from "./data";
function FAQAccordionPage() {
  return (
    <>
      <div className="container">
        <div className="accordion">
          <h1 className="accordion__heading">
            <img className="accordion__image" src={starIcon} alt="" />
            FAQs
          </h1>
          {data.map((item) => (
            <Accordion title={item.question} description={item.answer} />
          ))}
        </div>

        <Attribution
          name="Madhavan"
          link="https://www.frontendmentor.io/profile/madhavan-ts"
        />
      </div>
    </>
  );
}

export default FAQAccordionPage;

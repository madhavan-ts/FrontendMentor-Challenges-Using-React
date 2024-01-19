import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <p>
        <ul>
          <li>
            <Link to={"/FAQ-Accordion"} title="FAQ Accordian">
              FAQAccordion
            </Link>
          </li>
          <li>
            <Link to={"/Rating"} title="Interactive Rating">
              Rating Component
            </Link>
          </li>
        </ul>
      </p>
    </>
  );
}

export default HomePage;

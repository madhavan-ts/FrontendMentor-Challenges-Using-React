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
          <li>
            <Link to={"/Newsletter-Signup"} title="Newsletter Sign Up">
              Newsletter-Signup
            </Link>
          </li>
          <li>
            <Link to={"/Advice"} title="Advice Generator">
              Advice Generator
            </Link>
          </li>
          <li>
            <Link to={"/Card-form"} title="Interactive Card Details Form">
              Interactive Card Details Form
            </Link>
          </li>
        </ul>
      </p>
    </>
  );
}

export default HomePage;

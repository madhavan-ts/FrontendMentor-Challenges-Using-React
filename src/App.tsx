import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
import HomePage from "./component/pages/HomePage/HomePage";
import FAQAccordionPage from "./component/pages/FAQAccordion/FAQAccordionPage";
import NoPage from "./component/pages/NoPage/NoPage";
import RatingPage from "./component/pages/Rating/RatingPage";
import NewsletterSignUpPage from "./component/pages/Newsletter-Sign-up/NewsletterSignUpPage";
import AdviceGenerator from "./component/pages/Advice-generator/AdviceGenerator";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/FAQ-Accordion" element={<FAQAccordionPage />} />
          <Route path="/Rating" element={<RatingPage />} />
          <Route path="/Newsletter-Signup" element={<NewsletterSignUpPage />} />
          <Route path="/Advice" element={<AdviceGenerator />} />
          <Route path="*" element={<NoPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

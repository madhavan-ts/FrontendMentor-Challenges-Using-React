import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
import HomePage from "./component/pages/HomePage/HomePage";
import FAQAccordionPage from "./component/pages/FAQAccordion/FAQAccordionPage";
import NoPage from "./component/pages/NoPage/NoPage";
import RatingPage from "./component/pages/Rating/RatingPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/FAQ-Accordion" element={<FAQAccordionPage />} />
          <Route path="/Rating" element={<RatingPage />} />
          <Route path="*" element={<NoPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

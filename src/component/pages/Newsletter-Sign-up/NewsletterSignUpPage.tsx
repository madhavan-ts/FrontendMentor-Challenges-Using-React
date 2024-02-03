import { useState } from "react";
import NewsletterForm from "./components/NewsletterForm";
import SuccessMessage from "./components/SuccessMessage";
import Attribution from "../../resuables/Attribution";
import "./NewsletterSignUpPage.css";

function NewsletterSignUpPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <div className="newsletter-container">
      {!isSubmitted ? (
        <NewsletterForm
          email={email}
          handleChange={(item) => setEmail(item)}
          handleSubmit={() => setIsSubmitted(true)}
        />
      ) : (
        <SuccessMessage email={email} />
      )}
    </div>
  );
}

export default NewsletterSignUpPage;

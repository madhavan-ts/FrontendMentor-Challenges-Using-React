import { useEffect, useState } from "react";
import dividerDesk from "../../../assets/Advice-generator/pattern-divider-desktop.svg";
import dividerMobile from "../../../assets/Advice-generator/pattern-divider-mobile.svg";
import dice from "../../../assets/Advice-generator/icon-dice.svg";

import "./AdviceGenerator.css";
import axios from "axios";

interface Advice {
  slip: { id: number; advice: string };
}
function AdviceGenerator() {
  const [id, setId] = useState<number | null>(null);
  const [advice, setAdvice] = useState<string | null>("");
  const [status, setStatus] = useState<"loading" | "error" | "success" | null>(
    null
  );

  function handleClick() {
    setStatus("loading");
    setId(null);
    setAdvice(null);
    axios
      .get<Advice>("https://api.adviceslip.com/advice", {
        signal: AbortSignal.timeout(10000),
      })
      .then((res) => {
        setId(res.data.slip.id);
        setAdvice(res.data.slip.advice);
        setStatus("success");
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
        setStatus("error");
      });
  }
  return (
    <div className="advice-container">
      <div className="advice__box">
        <p className="advice__heading">Advice {id && `#${id}`}</p>
        <p className="advice__text">
          &ldquo;
          {status === "loading"
            ? "Loading..."
            : status === "error"
            ? "Error..."
            : status === null
            ? "Click Button to Generate Quote"
            : advice}
          &rdquo;
        </p>
        <picture className="advice__divider">
          <source srcSet={dividerMobile} media="(max-width: 590px" />
          <img src={dividerDesk} alt="" />
        </picture>
        <span className="advice__btn-wrap">
          <button className="advice__btn" onClick={handleClick}>
            <img src={dice} alt="" />
          </button>
        </span>
      </div>
    </div>
  );
}
export default AdviceGenerator;

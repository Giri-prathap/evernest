import React from "react";
import "./HowItWorks.css";

const steps = [
  {
    text: "Residents make a request",
    step: "Step 1",
  },
  {
    text: "Evernest auto-routes to the right party",
    step: "Step 2",
  },
  {
    text: "Issue resolved—faster, smarter, easier",
    step: "Step 3",
  },
];

export default function HowItWorks() {
  return (
    <section className="howitworks-section" >
      <div className="howitworks-content">
        <div className="howitworks-left">
          <h2>
            How it <span className="highlight">Works?</span>
          </h2>
          <p className="howitworks-desc">
            <b>All actions are tracked.</b> <span>All updates are instant.</span>
          </p>
        </div>
        <div className="howitworks-right">
          {steps.map((item, idx) => (
            <div className="howitworks-step" key={idx}>
              <span className="howitworks-check">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="10" fill="#3DDC97"/>
                  <path d="M6 10.5L9 13.5L14 8.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="howitworks-step-text">{item.text}</span>
              <span className="howitworks-step-num">{item.step}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
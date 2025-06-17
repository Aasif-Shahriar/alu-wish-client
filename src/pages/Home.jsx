import React, { Suspense, useEffect, useState } from "react";
import Hero from "../components/main-components/Hero";
import HowItWorks from "../components/main-components/HowItWorks";
import WhyAluPost from "../components/main-components/WhyAluPost";
import Faq from "../components/main-components/Faq";
import Ready from "../components/main-components/Ready";
import Pricing from "../components/main-components/Pricing";

const Home = () => {
  const [faqs, setFaqs] = useState([]);
  const [prices, setPrices] = useState([]);
  console.log(faqs);
  useEffect(() => {
    fetch("/faqs.json")
      .then((res) => res.json())
      .then((data) => {
        setFaqs(data);
      })
      .catch((err) => console.error("Failed to load FAQs:", err));
  }, []);
  useEffect(() => {
    fetch("/pricing.json")
      .then((res) => res.json())
      .then((data) => {
        setPrices(data);
      })
      .catch((err) => console.error("Failed to load FAQs:", err));
  }, []);
  return (
    <div>
      <Hero></Hero>
      <section id="how-it-works">
        <HowItWorks></HowItWorks>
      </section>

      <WhyAluPost></WhyAluPost>

      <section id="pricing">
        <Suspense fallback={<span>Loading...</span>}>
          <Pricing prices={prices}></Pricing>
        </Suspense>
      </section>
      <section id="faq">
        <Suspense fallback={<span>Loading...</span>}>
        <Faq faqs={faqs}></Faq>
      </Suspense>
      </section>
      <Ready></Ready>
    </div>
  );
};

export default Home;

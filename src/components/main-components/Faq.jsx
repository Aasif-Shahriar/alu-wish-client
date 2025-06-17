import { BsFillQuestionCircleFill } from "react-icons/bs";

const Faq = ({ faqs }) => {
  return (
    <div className="bg-slate-50 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-xl text-center text-accent/70 font-semibold mb-10">
          All your potato-related queries answered
        </p>
        {/* FAQs */}
        <div className="space-y-5">
          {faqs.map((faq,idx)=><div key={idx} className="p-5 bg-white rounded-xl shadow-lg">
            <h2 className="text-xl text-primary font-semibold flex items-center gap-2">
                <BsFillQuestionCircleFill />
                {faq.question}</h2>
            <p className="text-accent/80 font-semibold mt-4">{faq.answer}</p>
          </div>)}
        </div>
      </div>
    </div>
  );
};

export default Faq;

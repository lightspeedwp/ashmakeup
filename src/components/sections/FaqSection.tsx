import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { faqData } from "../../data/mock/sections/faq";
import "@/styles/blocks/faq.css";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FaqItem({ question, answer, isOpen, onClick }: FaqItemProps) {
  return (
    <div className="faq-item">
      <button
        onClick={onClick}
        className="faq-button"
        aria-expanded={isOpen}
      >
        <span className="faq-button__text">
          {question}
        </span>
        <div className="faq-button__icon">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="faq-answer-wrapper"
          >
            <div className="faq-answer">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = faqData;

  return (
    <section id="faq-section" className="faq-section">
      <div className="faq-card">
        <div className="faq-header">
          <h2 className="faq-title">
            Frequently Asked Questions
          </h2>
          <p className="faq-description">
            Common questions about my services and process.
          </p>
        </div>
        <div>
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

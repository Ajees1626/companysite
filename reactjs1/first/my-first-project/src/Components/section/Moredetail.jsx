import React, { useState } from 'react';
import './Moredetail.css';

const faqs = [
  {
    question: 'Is it safe to ride?',
    answer: 'Yes, all our rides are tracked and follow safety protocols.'
  },
  {
    question: 'Do we have to pay double the charge for one way taxi?',
    answer: 'No, you just pay for the distance you traveled.'
  },
  {
    question: 'Do we have cancellation charges?',
    answer: 'Cancellation charges may apply based on the time and location of cancellation.'
  },
  {
    question: 'What is the 1 km base fare?',
    answer: 'The base fare varies by city but is generally very affordable.'
  },
  {
    question: 'Do you provide a taxi service in Bengaluru?',
    answer: 'Yes, our taxi services are available in Bengaluru and many other cities.'
  }
];

const Moredetail = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2>FAQs</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span className={`icon ${openIndex === index ? 'minus' : 'plus'}`}>
                {openIndex === index ? '−' : '+'}
              </span>
              <strong>{faq.question}</strong>
            </div>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Moredetail;

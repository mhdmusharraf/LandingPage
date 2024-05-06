import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from 'lucide-react';

const FaqItem = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <div className={`faq-item rounded-md mb-4 ${show ? 'active' : ''}`}>
      <div className="faq-item-header bg-regular-gray text-black py-3 px-4 cursor-pointer relative" onClick={toggleShow}>
        <div className="flex items-center justify-between">
          <div className={`max-w-5/6 ${show ? 'text-heading-purple' : ''}`}>
            {question}
          </div>
          <div className="absolute top-3 right-0 mr-1">
            {show ? (
              <MinusIcon className="h-4 w-4 mr-2 text-heading-purple" />
            ) : (
              <PlusIcon className="h-4 w-4 mr-2" />
            )}
          </div>
        </div>
      </div>
      <div className="faq-item-body bg-regular-gray overflow-hidden transition-max-height duration-500 ease-in-out" style={{ maxHeight: show ? '300px' : '0' }}>
        <div className="faq-item-body-content text-gray-700 py-3 px-4">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FaqAccordion = ({ data }) => {
  return (
    <div className="faq-accordion max-w-md mx-auto">
      <h2 className="text-2xl text-heading-purple font-bold mb-4">Frequently asked questions</h2>
      {data.map((item) => (
        <FaqItem key={item.id} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

const FAQS = () => {
  const data = [
    {
      id: 1,
      question: 'What is React?',
      answer: 'React is a front-end JavaScript library for building user interfaces or UI components.',
    },
    {
      id: 2,
      question: 'What are the benefits of React?',
      answer: 'Some of the benefits of React are: it is fast, scalable, modular, easy to debug, and supports server-side rendering.',
    },
    {
      id: 3,
      question: 'What are the main concepts of React?',
      answer: 'Some of the main concepts of React are: components, props, state, hooks, lifecycle methods, and JSX.',
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <FaqAccordion data={data} />
    </div>
  );
};

export default FAQS;

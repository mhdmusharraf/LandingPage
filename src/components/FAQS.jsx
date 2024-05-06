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
      question: 'How does a digital company work?',
      answer: 'Many digital businesses start online (and remain online) with 100 percent of their operations existing in a digital space. Online-only digital businesses often have low startup costs and can quickly scale to meet the demands of the market, making them a popular choice for both experienced and fledgling entrepreneurs.',
    },
    {
      id: 2,
      question: 'Is digital marketing in demand in Singapore?',
      answer: 'As businesses invest heavily in digital marketing to reach their target audiences, the demand for skilled professionals in this field has surged. As such, digital marketers in Singapore are well-positioned to earn competitive salaries.',
    },
    {
      id: 3,
      question: 'Can a digital marketer work from home?',
      answer: "Digital marketing can be done from virtually anywhere, including from the comfort of your own home. Here's why: Online Platforms: The beauty of digital marketing is that it primarily takes place on online platforms such as social media, search engines, websites, and email.",
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <FaqAccordion data={data} />
    </div>
  );
};

export default FAQS;

import React from 'react'
import Navbar_LP from './navbar_LP.jsx';
import './FAQ.css';

const FAQ = () => {
  const faqs = [
    {
      question: 'What is GeekShelf?',
      answer: 'GeekShelf is a personal visual media management system that allows you to track and organize the films and TV shows you watch or plan to watch.'
    },
    {
      question: 'Can I add films or books that aren’t in the database?',
      answer: 'Yes! You can manually enter any title—even indie films or obscure content not available on other platforms.'
    },
    {
      question: 'Is this app social? Can others see what I add?',
      answer: 'A: No. This app is for private use only. Everything you log is personal and visible only to you.'
    },
    {
      question: 'Do I need to pay to access all features?',
      answer: 'A: No. All features are free to use. We may display minimal ads to support development, but there are no locked features or subscriptions.'
    },
    {
      question: 'What kind of stats or summaries are available?',
      answer: 'GeekShelf offers visual reports such as genre distribution, top-rated media, and other future advanced features.'
    },
    {
      question: 'Do you support all media types? movies and TV series?',
      answer: 'A: Absolutely. You can categorize each entry as a movie or TV show and manage them all in one list.'
    },
  ];

  return (<>
    <Navbar_LP />
    <div className="faq-container">
      <h1 className="faq-title">? Frequently Asked Questions (FAQ)</h1>
      <div className="faq-list">
        {faqs.map((item, index) => (
          <div className="faq-item" key={index}>
            <h2 className="faq-question">{item.question}</h2>
            <p className="faq-answer">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
    </>);
};

export default FAQ;
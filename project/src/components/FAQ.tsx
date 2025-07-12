import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      question: 'How does Halo Hire work for job seekers?',
      answer: 'Job seekers pay a one-time fee of ₵10 to unlock full access to our job database. Once paid, you can browse all available jobs, apply directly, and get your application sent to employers. This small investment ensures serious candidates and helps maintain the quality of our platform.'
    },
    {
      question: 'What do employers get for ₵20?',
      answer: 'Employers get a complete job posting service including: posting your job across our platform, exposure to thousands of active job seekers, application management tools, and access to quality candidates. Your job stays active until filled or for 30 days, whichever comes first.'
    },
    {
      question: 'How long do ads stay visible?',
      answer: 'All advertisements are featured prominently for exactly 24 hours from the time of payment. During this period, your ad will appear on our homepage and relevant sections. We also provide real-time countdown timers so you can track the remaining time.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major payment methods through Paystack, including mobile money (MTN Mobile Money, Vodafone Cash, AirtelTigo Money), bank cards (Visa, Mastercard), and bank transfers. All payments are processed securely through Paystack\'s encrypted system.'
    },
    {
      question: 'Is my personal information safe?',
      answer: 'Yes, we take data security seriously. All personal information is encrypted and stored securely. We never share your contact details with third parties without your consent. Employers only see the information you choose to include in your job applications.'
    },
    {
      question: 'What types of jobs are available?',
      answer: 'We feature jobs across all industries including technology, sales & marketing, education, healthcare, finance, hospitality, agriculture, and more. Jobs range from entry-level positions to senior roles, both remote and on-site opportunities across Ghana.'
    },
    {
      question: 'Can I get a refund if I don\'t find a job?',
      answer: 'The ₵10 fee provides access to our platform and job application services. While we cannot guarantee job placement (as hiring decisions are made by employers), we do guarantee access to all available jobs and application submission services.'
    },
    {
      question: 'How quickly will employers see my application?',
      answer: 'Applications are sent to employers immediately after submission. Most employers receive email notifications instantly, and many review applications within 24-48 hours. Response times vary by company and position urgency.'
    },
    {
      question: 'Can I post multiple ads or jobs?',
      answer: 'Yes! You can post multiple jobs (each for ₵20) or multiple ads (each for ₵5). Each posting is treated separately with its own 24-hour feature period for ads or 30-day active period for jobs.'
    },
    {
      question: 'What if I need help or support?',
      answer: 'Our support team is available 24/7 through email at benedicthalo200@gmail.com. We typically respond within 2-4 hours during business hours. You can also reach us through the contact form on our website.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about using Halo Hire
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-soft border border-purple-100 card-hover">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-purple-50 transition-colors rounded-2xl"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {item.question}
                </span>
                {openItems.includes(index) ? (
                  <ChevronUp className="h-5 w-5 text-purple-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="mailto:benedicthalo200@gmail.com"
            className="gradient-primary text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 inline-block"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
'use client'
import { useState } from 'react'
import { FaAngleDown, FaChevronUp } from 'react-icons/fa'

const AskedQuestionWithAnswer = () => {
  type Index = number | null
  const [openIndex, setOpenIndex] = useState<Index>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  const faqs = [
    {
      question: 'What is Hye Gather?',
      answer: 'Hye Gather is a platform for...',
    },
    {
      question: 'How do I find and book a vendor?',
      answer:
        'By category, use search filters, and contact vendors directly through their profiles to book their services.',
    },
    {
      question: 'Is there a fee to use Hye Gather?',
      answer: 'No, using Hye Gather is free...',
    },
    {
      question: 'How can I join?',
      answer: 'You can join by signing up on our website...',
    },
  ]
  return (
    <div className="space-y-5">
      {faqs.map((faq, index) => (
        <div key={index} className="mb-2 bg-white p-4 rounded shadow">
          <button
            className="w-full text-left font-semibold flex justify-between items-center"
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
            <span>
              {openIndex === index ? <FaChevronUp /> : <FaAngleDown />}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in ${
              openIndex === index ? 'max-h-40' : 'max-h-0'
            }`}
          >
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AskedQuestionWithAnswer

'use client'

import { useState } from 'react'
import toast from 'react-hot-toast'

const Payment = () => {
  const [showPromo, setShowPromo] = useState(false)
  const [formData, setFormData] = useState({
    amount: '',
    promoCode: '',
  })

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      amount: e.target.value,
    })
  }

  const handlePromoToggle = () => {
    setShowPromo(!showPromo)
  }

  const handlePromoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      promoCode: e.target.value,
    })
  }

  const handleSubmit = () => {
    console.log(formData)
    setFormData({
      amount: '',
      promoCode: '',
    })
    toast.success('Payment information submitted!')
  }

  return (
    <div className="mx-auto bg-white p-6 rounded-lg ">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Payment Information
      </h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Amount
        </label>
        <input
          value={formData.amount}
          onChange={handleAmountChange}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="$ 950"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          If you have any promo code, click here to apply.
        </label>
        <div className="flex items-center mt-2">
          <span className="mr-2 text-sm text-gray-700">Apply Promo Code</span>
          <input
            type="checkbox"
            checked={showPromo}
            onChange={handlePromoToggle}
            className="w-5 h-5"
          />
        </div>
      </div>

      {showPromo && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Promo Code
          </label>
          <input
            type="text"
            value={formData.promoCode}
            onChange={handlePromoChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter Promo Code"
          />
        </div>
      )}

      <button
        type="button"
        onClick={handleSubmit}
        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
      >
        Continue
      </button>
    </div>
  )
}

export default Payment

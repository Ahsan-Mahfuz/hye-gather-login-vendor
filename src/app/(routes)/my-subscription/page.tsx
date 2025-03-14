'use client'
import { useState } from 'react'

const MySubscription = () => {
  const [subscriptionExpiry] = useState('March 10, 2025')
  const [lastPurchaseDate] = useState('January 25, 2025')

  return (
    <div className="responsive-width">
      <div className=" max-w-[900px] mt-20 mx-auto py-7 px-6 bg-white rounded-lg shadow-2xl">
        <div className="flex max-sm:flex-col items-center py-8 px-6 bg-gradient-to-r from-blue-100 to-blue-500 rounded-lg mb-4">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow">
            <span className="text-blue-600 text-2xl">👑</span>
          </div>
          <div className="ml-4">
            <p className="text-gray-600 text-sm">
              Your subscription is active until:
            </p>
            <p className="text-lg font-semibold text-gray-900 max-sm:text-center">
              {subscriptionExpiry}
            </p>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Last Purchase Date
          </label>
          <input
            type="text"
            value={lastPurchaseDate}
            readOnly
            className="w-full px-3 py-2 border rounded-lg bg-gray-100 text-gray-600  outline-none cursor-not-allowed"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Subscription Expiry Date
          </label>
          <input
            type="text"
            value={subscriptionExpiry}
            readOnly
            className="w-full px-3 py-2 border rounded-lg bg-gray-100 text-gray-600 outline-none cursor-not-allowed"
          />
        </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium mb-2 hover:bg-blue-700 transition">
          Change Subscription
        </button>
        <button className="w-full bg-red-600 text-white py-2 rounded-lg font-medium hover:bg-red-700 transition">
          Cancel Subscription
        </button>
      </div>
    </div>
  )
}

export default MySubscription

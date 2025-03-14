import Image from 'next/image'
import { FaCheckCircle } from 'react-icons/fa'

export default function VendorPlan() {
  const features = [
    'Priority Listing',
    'Exclusive Badge',
    'Higher Visibility',
    'Unlimited Updates',
    'Collaboration Tools',
    'Dedicated Support',
    'Mobile App Access',
    'All Integrations Included',
  ]

  return (
    <div className="flex flex-col items-center justify-center mt-20 px-4 mb-10">
      <div className="text-center mb-6">
        <h2 className="text-4xl font-bold text-gray-900">
          Our Exclusive Top Vendor Plan
        </h2>
        <p className="text-gray-500">
          Boost Your Visibility & Get More Bookings!
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border p-8 max-w-[800px] w-full">
        <div className="flex justify-between items-center mb-4">
          <Image
            src="/premium.svg"
            alt="badge"
            className="w-20 h-20"
            width={5000}
            height={50}
          />
          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-md font-semibold">
            $69.99/mo
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Premium Vendor Plan
        </h3>
        <p className="text-gray-500 mb-4">
          For vendors who want to stand out and maximize their bookings.
        </p>

        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-3 mb-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 text-gray-800"
            >
              <FaCheckCircle className="text-blue-600" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
          Get started
        </button>
      </div>
    </div>
  )
}

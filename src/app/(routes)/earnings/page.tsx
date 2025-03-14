import Link from 'next/link'
import { FaMoneyBillWave, FaCreditCard, FaHistory } from 'react-icons/fa'

const Earnings = () => {
  return (
    <div className="max-w-[800px] mt-20 mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <div className="flex items-center p-4 bg-gradient-to-r from-green-100 to-blue-500 rounded-lg mb-4">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow">
          <FaMoneyBillWave className="text-blue-600 text-5xl" />
        </div>
        <div className="ml-4">
          <p className="text-gray-800 text-sm">Total Earnings</p>
          <p className="text-2xl font-semibold text-blue-700 ">$23,0900</p>
        </div>
      </div>

      <div className=" rounded-lg">
        <p className="text-gray-800 text-lg font-semibold p-3 border-b border-gray-300">
          Transaction
        </p>
        <div className=" flex flex-col mt-5 gap-3">
          <button className="w-full rounded-2xl flex items-center justify-between p-4 bg-white  hover:bg-gray-200 transition">
            <div className="flex">
              <FaCreditCard className="text-gray-600 text-lg mr-3" />
              <span className="text-gray-700 flex-1">
                Payment Method
              </span>
            </div>
            <span className="text-gray-500">{'>'}</span>
          </button>
          <button className="w-full  rounded-2xl bg-white flex items-center justify-between  p-4 hover:bg-gray-200 transition">
            <div className="flex">
              <FaHistory className="text-gray-600 text-lg mr-3" />
              <Link
                href={'/transaction-history'}
                className="text-gray-700 flex-1"
              >
                Transaction History
              </Link>
            </div>
            <span className="text-gray-500">{'>'}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Earnings

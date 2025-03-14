import Image from 'next/image'
import Link from 'next/link'
import { RiMessage2Fill } from 'react-icons/ri'
import MyBookingsModel from './MyBookingsModel'

interface CardProps {
  id: number
  bookingType: string
  image: string
  name: string
  email: string
  phone: string
  bookingFor: string
  selectServices: string[]
  eventName?: string
  eventLocation?: string
  eventTime?: string
  numberOfGuests?: number
  eventDuration?: string
  additionalRequirements?: string
  additionalNote?: string
  amountPaid?: string
  timeLeft?: string
}

const MyBookingsCard: React.FC<CardProps> = ({
  id,
  bookingType,
  image,
  name,
  email,
  phone,
  bookingFor,
  selectServices,
  eventName,
  eventLocation,
  eventTime,
  numberOfGuests,
  eventDuration,
  additionalRequirements,
  additionalNote,
  amountPaid,
  timeLeft,
}) => {
  const docs = {
    id,
    bookingType,
    image,
    name,
    email,
    phone,
    bookingFor,
    selectServices,
    eventName,
    eventLocation,
    eventTime,
    numberOfGuests,
    eventDuration,
    additionalRequirements,
    additionalNote,
    amountPaid,
    timeLeft,
  }
  return (
    <div className="bg-white flex mt-5  flex-col shadow-md rounded-lg px-6 py-5  sm:flex-row gap-4 sm:max-w-[600px] max-w-[430px] w-full border border-gray-200">
      <div>
        <Image
          src={image}
          alt="Vendor Logo"
          width={5000}
          height={500}
          className="rounded-full  flex items-center justify-center mx-auto mb-1 object-cover object-center w-[100px]  h-[100px]  "
        />
        <h3 className="text-lg font-semibold bg-green-100 px-2 pt-2">{name}</h3>
        <div className=" bg-green-100 text-sm p-2">
          <div className="text-gray-600 text-xs">{email}</div>
          <div className="text-gray-600 text-xs">{phone}</div>
          <Link
            href={`/chat`}
            className="flex bg-green-100 justify-center items-center gap-1 mt-2"
          >
            <RiMessage2Fill className="text-2xl text-blue-800 text-center cursor-pointer transition duration-300 ease-in-out hover:text-blue-700 animate-pulse" />
          </Link>
        </div>
      </div>

      <div className="flex-1 ">
        <div className="flex flex-col justify-between h-full">
          <div>
            <div>
              <p className="text-md font-bold mb-3 ">Booking For</p>
              <span className="bg-blue-100 p-2 rounded-lg mt-1 font-semibold text-red-600">
                {bookingFor}
              </span>
            </div>
            <p className="text-md font-bold mt-4 mb-1">Select Services</p>
            <div className="flex gap-3 flex-wrap">
              {selectServices.map((service, index) => (
                <div key={index} className="bg-blue-100 rounded-lg p-2 ">
                  {service}
                </div>
              ))}
            </div>
          </div>

          <MyBookingsModel {...docs} />
        </div>
      </div>
    </div>
  )
}

export default MyBookingsCard

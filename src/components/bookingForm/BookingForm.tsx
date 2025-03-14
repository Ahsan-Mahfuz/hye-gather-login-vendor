'use client'

import Link from 'next/link'
import { useState } from 'react'
import BookingRequest from '../bookingRequest/BookingRequest'

const BookingForm = () => {
  const [bookingFor, setBookingFor] = useState('')
  const [service, setService] = useState('')

  //   const [modal2Open, setModal2Open] = useState(false)

  const handleBookingForChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBookingFor(e.target.value)
  }

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setService(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(`Booking for: ${bookingFor}, Service: ${service}`)
  }

  return (
    <div className=" bg-white p-6 mb-10 rounded-lg shadow-md ">
      <h2 className="text-xl font-bold mb-4 text-center">Check availability</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Booking For */}
        <div className="flex flex-col">
          <label htmlFor="bookingFor" className="font-semibold">
            Booking For:
          </label>
          <select
            id="bookingFor"
            value={bookingFor}
            onChange={handleBookingForChange}
            className="border border-gray-300 p-2 rounded-md"
          >
            <option value="">Select One</option>
            <option value="Individual">Individual</option>
            <option value="Group">Group</option>
            <option value="Event">Event</option>
          </select>
        </div>

        {/* Select Service */}
        <div className="flex flex-col">
          <label htmlFor="service" className="font-semibold">
            Select Service:
          </label>
          <select
            id="service"
            value={service}
            onChange={handleServiceChange}
            className="border border-gray-300 p-2 rounded-md outline-none"
          >
            <option value="">Select One</option>
            <option value="Catering">Catering</option>
            <option value="Music">Music</option>
            <option value="Decoration">Decoration</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          {/* <button
            type="submit"
            onClick={() => setModal2Open(true)}
            className="bg-blue-600 text-white py-2 px-4 rounded-md text-sm font-semibold w-full sm:w-auto hover:bg-blue-700"
          >
            Send booking request
          </button> */}

          <BookingRequest />
          <Link
            href={'/chat'}
            type="button"
            className="bg-transparent border-2 border-blue-600 text-blue-600 py-2 px-4 rounded-md text-sm font-semibold w-full sm:w-auto hover:bg-blue-600 hover:text-white"
          >
            Send message
          </Link>
        </div>
      </form>
    </div>
  )
}

export default BookingForm

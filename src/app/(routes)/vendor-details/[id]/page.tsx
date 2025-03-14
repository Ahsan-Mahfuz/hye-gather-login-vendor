'use client'
import { useRouter } from 'next/navigation'
import Card from '@/components/card/Card'
import BookingForm from '@/components/bookingForm/BookingForm'
import VendorTabs from '@/components/vendorTabs/VendorTabs'

type Vendor = {
  id: number
  logo: string
  name: string
  rating: number
  reviews: number
  status: string
  categories: string[]
  bookings: number
  price: number
}

const vendor: Vendor = {
  id: 1,
  logo: '/entertainment.jpg',
  name: 'Entertainment',
  rating: 4.5,
  reviews: 200,
  status: 'Available',
  categories: ['Music', 'Dance', 'Party'],
  bookings: 120,
  price: 500,
}

const VendorDetails = () => {
  const router = useRouter()

  return (
    <div className="responsive-width ">
      <div className="flex flex-row justify-between mx-auto mt-10 px-2 max-xl:gap-10 max-xl:items-center max-xl:flex-col ">
        <div className="flex flex-col gap-5 ">
          <section>
            <Card {...vendor} />
          </section>
          <section>
            <VendorTabs />
          </section>
        </div>
        <div>
          <section>
            <BookingForm />
          </section>
        </div>
      </div>
    </div>
  )
}

export default VendorDetails

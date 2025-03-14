import Card from '@/components/card/Card'

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
}[]

const vendors: Vendor = [
  {
    id: 1,
    logo: '/entertainment.jpg',
    name: 'Entertainment',
    rating: 4.5,
    reviews: 200,
    status: 'Available',
    categories: ['Music', 'Dance', 'Party'],
    bookings: 120,
    price: 500,
  },
  {
    id: 2,
    logo: '/dJs.jpg',
    name: 'DJs',
    rating: 4.5,
    reviews: 150,
    status: 'Available',
    categories: ['Music', 'Party'],
    bookings: 90,
    price: 400,
  },
  {
    id: 3,
    logo: '/bar.jpg',
    name: 'Bars',
    rating: 4.5,
    reviews: 100,
    status: 'Available',
    categories: ['Drinks', 'Party'],
    bookings: 60,
    price: 350,
  },
  {
    id: 4,
    logo: '/food.jpg',
    name: 'Food',
    rating: 4.5,
    reviews: 80,
    status: 'Available',
    categories: ['Catering', 'Party'],
    bookings: 50,
    price: 300,
  },
  {
    id: 5,
    logo: '/photography.jpg',
    name: 'Photography',
    rating: 4.5,
    reviews: 50,
    status: 'Available',
    categories: ['Photography', 'Party'],
    bookings: 30,
    price: 250,
  },
]
const TopRatedVendors = () => {
  return (
    <div className=" mt-50 responsive-width ">
      <p className="font-bold text-3xl mb-10 text-center">This Week&apos;s Top-Rated Vendors</p>
      <div className="responsive-width flex items-center justify-start flex-wrap gap-10">
        {vendors.map((vendor, index) => (
          <Card key={index} {...vendor} />
        ))}
      </div>
    </div>
  )
}

export default TopRatedVendors

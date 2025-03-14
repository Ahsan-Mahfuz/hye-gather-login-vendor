import Image from 'next/image'
import Link from 'next/link'

interface CardProps {
  id: number
  logo: string
  rating: number
  businessName: string
  about: string
  startPrice: number
  reviews: number
  vendorType: string
  services: { name: string }[]
}

const VendorBusinessCard: React.FC<CardProps> = ({
  id,
  logo,
  businessName,
  rating,
  services,
  startPrice,
  about,
  reviews,
  vendorType,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col sm:flex-row gap-4  w-full border border-gray-200">
      <div className="flex-1">
        <div className="flex gap-5">
          <div className="flex-shrink-0 w-[100px] sm:w-[140px] flex justify-center items-center">
            <Image
              src={logo}
              alt="Vendor Logo"
              width={5000}
              height={100}
              className="rounded-md object-cover object-center h-[150px]"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold">{businessName}</h3>
            <div className="flex items-center gap-1 text-yellow-500 text-sm">
              {'\u2B50'.repeat(Math.floor(rating))}
              <span className="text-gray-600 ml-1">
                {rating} ({reviews})
              </span>
            </div>
            <p className="text-blue-600 text-sm font-medium">{vendorType}</p>
            <p className="mt-1 font-semibold">
              Get started for as low as{' '}
              <span className="text-black">${startPrice}</span>
            </p>
            <p className="text-gray-800 font-medium text-sm mt-2">
              MY service category:
            </p>
            <div className="flex gap-2 mt-1 flex-wrap">
              {services.map((service, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-600 px-3 py-1 rounded-md text-xs"
                >
                  {service.name}
                </span>
              ))}
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-2 max-w-[700px] text-justify">
          {about}
        </p>
      </div>

      <div className="flex flex-col items-center gap-4">
        <Link
          href={'/edit-profile'}
          className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium w-full"
        >
          Edit business information
        </Link>
        <div className="bg-blue-100 p-3 rounded-md w-full text-center">
          <p className="text-blue-600 text-sm font-medium">
            Be a Premium Vendor
          </p>
          <Link href={'/top-vendor-plan'}>
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium mt-2 w-full">
              Get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default VendorBusinessCard

import Image from 'next/image'

const EachService = () => {
  const service = {
    name: 'Food',
    bookings: 56,
    imageUrl: '/food.jpg',
    categories: ['Mediterranean', 'Mexican', 'Asian'],
  }

  const images = [
    '/food.jpg',
    '/food.jpg',
    '/food.jpg',
    '/food.jpg',
    '/food.jpg',
  ]

  return (
    <div className="responsive-width">
      <div className="max-w-2xl mt-10 max-sm:flex-col bg-white shadow-md rounded-lg p-4 flex items-center gap-4 border border-gray-300">
        <div className="flex-shrink-0">
          <Image
            src={service.imageUrl}
            alt={service.name}
            width={280}
            height={180}
            className="rounded-lg object-cover"
          />
        </div>

        <div className="flex-1">
          <h2 className="text-xl font-semibold">{service.name}</h2>
          <p className="text-gray-600 text-sm mt-1">Overview</p>
          <p className="text-gray-800 flex items-center gap-2 mt-2 text-sm">
            📅 {service.bookings} Booking On HYE GATHER
          </p>
          <p className="text-gray-800 font-medium text-sm mt-2">
            Vendor service category:
          </p>
          <div className="flex gap-2 mt-1 flex-wrap">
            {service.categories.map((category, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-600 px-3 py-1 rounded-md text-xs"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="font-bold text-2xl mt-5">Images</div>

        <div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                width={5000}
                height={100}
                className="max-w-[450px] w-full h-full object-cover rounded-md"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EachService

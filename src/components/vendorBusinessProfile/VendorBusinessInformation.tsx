import Image from 'next/image'

const VendorBusinessInformation = () => {
  const stats = [
    {
      id: 1,
      label: 'New Booking Requests',
      value: 10,
      icon: '/new-booking.svg',
    },
    { id: 2, label: 'Total Services', value: '03', icon: '/total-service.svg' },
    { id: 3, label: 'Total Bookings', value: 1000, icon: '/total-booking.svg' },
    { id: 4, label: 'Total Ratings', value: 144061, icon: '/total-rating.svg' },
    {
      id: 5,
      label: 'Total Earnings',
      value: '$144061',
      icon: '/total-earning.svg',
    },
  ]

  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4  rounded-lg ">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="bg-white border p-10 rounded-lg shadow-md flex flex-col items-center"
        >
          <Image src={stat.icon} alt={stat.label} width={40} height={40} />
          <p className="text-sm font-medium mt-2">{stat.label}</p>
          <p className="text-lg font-bold">{stat.value}</p>
        </div>
      ))}
    </div>
  )
}

export default VendorBusinessInformation

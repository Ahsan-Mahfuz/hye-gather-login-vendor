import Link from 'next/link'
const RoleSelection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  ">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold ">Choose your role to get started</h2>
        <p className="text-gray-600 mt-3">
          Select the option that best describes you to personalize your
          experience.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-7xl max-sm:max-w-full w-full   rounded-lg ">
        <div
          className=" rounded-lg p-6 flex flex-col justify-between items-center shadow-md"
          // style={{
          //   backgroundImage: `url(${'/roleVendor.png'})`,
          //   backgroundSize: 'contain',
          //   backgroundPosition: 'center',
          // }}
        >
          <div>
            <h3 className="text-3xl max-md:text-2xl m-10 text-center font-semibold text-gray-900">
              Become a Vendor
            </h3>
            <p className=" text-sm text-center mt-2">
              Join us as a vendor to showcase your services and connect with
              potential clients. Grow your business by managing bookings,
              receiving reviews, and handling payments—all in one place.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <span className="text-blue-800 mr-2 text-2xl ">🔹</span> Create
                and manage your listings.
              </li>
              <li className="flex items-center">
                <span className="text-blue-800 mr-2 text-2xl">🔹</span> Handle
                bookings seamlessly.
              </li>
              <li className="flex items-center">
                <span className="text-blue-800 mr-2 text-2xl">🔹</span> Get
                reviews and receive payments.
              </li>
            </ul>
          </div>
          <Link
            className="w-full"
            href={{ pathname: '/sign-up', query: { role: 'vendor' } }}
          >
            <button className="mt-10 cursor-pointer w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
              I&apos;M A VENDOR
            </button>
          </Link>
        </div>

        <div
          className=" rounded-lg p-6 flex flex-col justify-between items-center  shadow-md"
          // style={{
          //   backgroundImage: `url(${'/roleUser.png'})`,
          //   backgroundSize: 'contain',
          //   backgroundPosition: 'center',
          // }}
        >
          <div>
            <h3 className="text-3xl text-center font-semibold text-gray-900 m-10 max-md:text-2xl ">
              Find a Vendor
            </h3>
            <p className="text-sm text-center mt-2">
              Looking for top-rated vendors? Sign up as a customer to search,
              compare, and book professionals for your next event with ease.
            </p>
            <ul className=" mt-4 space-y-2">
              <li className="flex items-center">
                <span className="text-blue-500 text-2xl mr-2">🔹</span> Search
                and compare vendors.
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 text-2xl mr-2">🔹</span> Book and
                manage appointments.
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 text-2xl mr-2">🔹</span> Share
                your experience through reviews.
              </li>
            </ul>
          </div>
          <Link
            className="w-full"
            href={{ pathname: '/sign-up', query: { role: 'customer' } }}
          >
            <button className="mt-10 cursor-pointer w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
              I&apos;M A CUSTOMER
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RoleSelection

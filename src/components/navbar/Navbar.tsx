'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [userType, setUserType] = useState('login-Vendor') // Normal, login-Normal, login-Vendor

  const getLinkClass = (path: string) =>
    pathname === path
      ? 'underline underline-offset-8 decoration-4 decoration-blue-800'
      : 'no-underline'

  return (
    <div className="py-5 px-2  z-50 responsive-width">
      <section>
        {/* Normal User Navbar */}
        <div className="font-semibold">
          {userType === 'Normal' && (
            <div className="flex justify-between items-center">
              <div>
                <Link href="/home">
                  <section className="flex justify-center items-center gap-2">
                    <div>
                      <Image
                        src="/logo.svg"
                        alt="logo"
                        className="h-[50px] w-[50px]"
                        width={5000}
                        height={50}
                      />
                    </div>
                    <div className="text-blue-800">HYE GATHER</div>
                  </section>
                </Link>
              </div>

              <div>
                <div className="flex max-md:hidden justify-between items-center gap-10 ">
                  <Link href="/home" className={getLinkClass('/home')}>
                    Home
                  </Link>
                  <Link
                    href="/explore-vendors"
                    className={getLinkClass('/explore-vendors')}
                  >
                    Explore Vendors
                  </Link>
                  <Link
                    href="/contact-us"
                    className={getLinkClass('/contact-us')}
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/sign-in"
                    className={`getLinkClass('/sign-in') bg-blue-200 hover:bg-blue-100 p-3 rounded-md`}
                  >
                    Get Started
                  </Link>
                </div>

                <div className="relative max-md:block hidden cursor-pointer">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="cursor-pointer p-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 transition-all"
                  >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>

                  {isOpen && (
                    <div
                      className="z-10 cursor-pointer absolute top-12 right-0 w-48  bg-[#dbefea] text-black shadow-lg rounded-lg p-4"
                      onMouseLeave={() => setIsOpen(false)}
                    >
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/home"
                            className={`p-2 hover:underline hover:underline-offset-8 hover:decoration-black cursor-pointer`}
                          >
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/explore-vendors"
                            className={` p-2 hover:underline hover:underline-offset-8 hover:decoration-black cursor-pointer`}
                          >
                            Explore Vendors
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/contact-us"
                            className={` p-2 hover:underline hover:underline-offset-8 hover:decoration-black cursor-pointer`}
                          >
                            Contact Us
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/sign-in"
                            className={` p-2 hover:underline hover:underline-offset-8 hover:decoration-black cursor-pointer`}
                          >
                            Get Started
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Login User Navbar */}
        <div className="font-semibold">
          {userType === 'login-Normal' && (
            <div className="flex justify-between items-center">
              <div>
                <Link href="/user-home">
                  <section className="flex justify-center items-center gap-2">
                    <div>
                      <Image
                        src="/logo.svg"
                        alt="logo"
                        className="h-[50px] w-[50px]"
                        width={5000}
                        height={50}
                      />
                    </div>
                    <div className="text-blue-800">HYE GATHER</div>
                  </section>
                </Link>
              </div>

              <div>
                <div className="flex max-md:hidden justify-between items-center gap-10 ">
                  <Link
                    href="/user-home"
                    className={getLinkClass('/user-home')}
                  >
                    Home
                  </Link>
                  <Link href="/vendors" className={getLinkClass('/vendors')}>
                    Vendors
                  </Link>
                  <Link
                    href="/my-bookings"
                    className={getLinkClass('/my-bookings')}
                  >
                    My Bookings
                  </Link>
                  <Link href="/chat" className={getLinkClass('/chat')}>
                    Messages
                  </Link>
                  <Link
                    href="/profile-settings"
                    className={getLinkClass('/profile-settings')}
                  >
                    Profile
                  </Link>
                </div>

                <div className="relative max-md:block hidden cursor-pointer">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="cursor-pointer p-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 transition-all"
                  >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>

                  {isOpen && (
                    <div
                      className="z-10 cursor-pointer absolute top-12 right-0 w-48  bg-[#dbefea] text-black shadow-lg rounded-lg p-4"
                      onMouseLeave={() => setIsOpen(false)}
                    >
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/user-home"
                            className={`p-2 hover:underline hover:underline-offset-8 hover:decoration-black cursor-pointer`}
                          >
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/vendors"
                            className={` p-2 hover:underline hover:underline-offset-8 hover:decoration-black cursor-pointer`}
                          >
                            Vendors
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/my-bookings"
                            className={` p-2 hover:underline hover:underline-offset-8 hover:decoration-black cursor-pointer`}
                          >
                            My Bookings
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/chat"
                            className={` p-2 hover:underline hover:underline-offset-8 hover:decoration-black cursor-pointer`}
                          >
                            Messages
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/profile-settings"
                            className={` p-2 hover:underline hover:underline-offset-8 hover:decoration-black cursor-pointer`}
                          >
                            Profile
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Login Vendor Navbar */}
        <div className="font-semibold">
          {userType === 'login-Vendor' && (
            <div className="flex justify-between items-center">
              <div>
                <Link href="/vendor-home">
                  <section className="flex justify-center items-center gap-2">
                    <div>
                      <Image
                        src="/logo.svg"
                        alt="logo"
                        className="h-[50px] w-[50px]"
                        width={5000}
                        height={50}
                      />
                    </div>
                    <div className="text-blue-800">HYE GATHER</div>
                  </section>
                </Link>
              </div>

              <div>
                <div className="flex max-md:hidden justify-between items-center gap-10 ">
                  <Link
                    href="/vendor-home"
                    className={getLinkClass('/vendor-home')}
                  >
                    Home
                  </Link>
                  <Link
                    href="/dashboard"
                    className={getLinkClass('/dashboard')}
                  >
                    Dashboard
                  </Link>
                  <Link href="/service" className={getLinkClass('/service')}>
                    Service
                  </Link>
                  <Link
                    href="/vendor-bookings"
                    className={getLinkClass('/vendor-bookings')}
                  >
                    Bookings
                  </Link>
                  <Link href="/chat" className={getLinkClass('/chat')}>
                    Message
                  </Link>
                  <Link
                    href="/profile-settings"
                    className={getLinkClass('/profile-settings')}
                  >
                    Profile
                  </Link>
                </div>

                <div className="relative max-md:block hidden cursor-pointer">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="cursor-pointer p-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 transition-all"
                  >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>

                  {isOpen && (
                    <div
                      className="z-10 cursor-pointer absolute top-12 right-0 w-48  bg-[#dbefea] text-black shadow-lg rounded-lg p-4"
                      onMouseLeave={() => setIsOpen(false)}
                    >
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/vendor-home"
                            className={`p-2 hover:underline hover:underline-offset-8 hover:decoration-black cursor-pointer`}
                          >
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/dashboard"
                            className={`p-2 hover:underline hover:underline-offset-8 hover:decoration-black cursor-pointer`}
                          >
                            Dashboard
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/service"
                            className={` p-2 hover:underline hover:underline-offset-8 hover:decoration-black cursor-pointer`}
                          >
                            Service
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/vendor-bookings"
                            className={` p-2 hover:underline hover:underline-offset-8 hover:decoration-black cursor-pointer`}
                          >
                            Bookings
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/chat"
                            className={` p-2 hover:underline hover:underline-offset-8 hover:decoration-black cursor-pointer`}
                          >
                            Messages
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/profile-settings"
                            className={` p-2 hover:underline hover:underline-offset-8 hover:decoration-black cursor-pointer`}
                          >
                            Profile
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Navbar

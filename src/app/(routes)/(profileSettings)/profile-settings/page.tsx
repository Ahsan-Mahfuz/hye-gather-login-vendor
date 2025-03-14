'use client'
import {
  User,
  Phone,
  Mail,
  Settings,
  Heart,
  Bell,
  FileText,
  Shield,
  HelpCircle,
  LogOut,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const menuItems = [
  {
    id: 1,
    title: 'Account Setting',
    icon: <Settings className="w-5 h-5" />,
    link: '/account-settings',
  },
  // {
  //   id: 2,
  //   title: 'Favorite Vendor',
  //   icon: <Heart className="w-5 h-5" />,
  //   link: '/favorite-vendors',
  // },

  {
    id: 4,
    title: 'My Subscription',
    icon: <Bell className="w-5 h-5" />,
    link: '/my-subscription',
  },
  {
    id: 5,
    title: 'Earnings',
    icon: <Bell className="w-5 h-5" />,
    link: '/earnings',
  },
  {
    id: 3,
    title: 'Notification',
    icon: <Bell className="w-5 h-5" />,
    link: '/notifications',
  },
]

const moreItems = [
  {
    id: 4,
    title: 'Terms & Condition',
    icon: <FileText className="w-5 h-5" />,
    link: '/terms-and-conditions',
  },
  {
    id: 5,
    title: 'Privacy Policy',
    icon: <Shield className="w-5 h-5" />,
    link: '/privacy-and-policy',
  },
  {
    id: 6,
    title: 'Help/Support',
    icon: <HelpCircle className="w-5 h-5" />,
    link: '/contact-us',
  },
  {
    id: 7,
    title: 'Log Out',
    icon: <LogOut className="w-5 h-5" />,
    link: '/home',
  },
]

const ProfileSettings = () => {
  const [profileType, setProfileType] = useState('vendor') // user, vendor

  return (
    <div className="responsive-width h-screen flex justify-center items-center ">
      <div className="max-w-[700px]  w-full mx-auto  rounded-lg   ">
        <div className="flex flex-col items-center">
          <div className="relative">
            <Image
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="User"
              className="w-30 h-30 rounded-full border-4 border-yellow-500"
              width={120}
              height={50}
            />
          </div>
          <h2 className="mt-3 text-xl font-semibold">Eleanor Pena</h2>
          <p className="text-gray-500 flex items-center gap-1">
            <Phone className="w-4 h-4" /> (406) 555-0120
          </p>
          <p className="text-gray-500 flex items-center gap-1">
            <Mail className="w-4 h-4 " /> michelle.rivera@example.com
          </p>
          <Link href="/edit-profile">
            <button className="mt-4 bg-blue-800 hover:bg-blue-700 cursor-pointer text-white px-4 py-2 rounded-lg flex items-center gap-2">
              <User className="w-5 h-5 " /> Edit Profile
            </button>
          </Link>
        </div>

        <div className="mt-6 bg-gray-100 p-3 rounded-lg ">
          {menuItems
            .filter((item) =>
              profileType === 'user'
                ? item.title !== 'My Subscription' && item.title !== 'Earnings'
                : true
            )
            .map((item) => (
              <Link key={item.id} href={item.link}>
                <div className="flex cursor-pointer justify-between items-center p-3 bg-white rounded-lg mb-2 shadow-sm hover:bg-gray-200">
                  <div className="flex items-center gap-3">
                    {item.icon} {item.title}
                  </div>
                  <span className="text-gray-400">{'>'}</span>
                </div>
              </Link>
            ))}
        </div>

        <div className="mt-4 ">
          <h3 className=" text-xl  font-semibold mb-2 ">More</h3>
          <div className="bg-gray-100 p-3 rounded-md flex flex-col gap-2">
            {moreItems.map((item) => (
              <Link key={item.id} href={item.link}>
                <div
                  className={`flex cursor-pointer justify-between items-center p-3 rounded-lg ${
                    item.title === 'Log Out'
                      ? 'bg-red-100 text-red-500'
                      : 'bg-white '
                  } shadow-sm hover:bg-gray-200`}
                >
                  <div className="flex items-center gap-3">
                    {item.icon} {item.title}
                  </div>
                  <span className="text-gray-400">{'>'}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileSettings

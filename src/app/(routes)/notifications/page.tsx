'use client'
import { useState } from 'react'
import { X } from 'lucide-react'
import { Pagination } from 'antd'
import Image from 'next/image'

const notifications = [
  {
    id: 1,
    title: 'New Booking Alert !',
    message:
      'You have a new booking request from Emily Johnson located in Los Angeles, CA.',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    id: 2,
    title: 'New Message Alert!',
    message:
      'You have received a message from Michael Smith regarding your services.',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    id: 3,
    title: 'New Review Alert!',
    message:
      'Sarah Wilson from New York, NY has left a review for your services. Check your profile to view it.',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
  },

  {
    id: 5,
    title: 'New Message Alert!',
    message:
      'You have received a message from Michael Smith regarding your services.',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    id: 6,
    title: 'Booking Confirmation Alert!',
    message:
      'Your booking with David Lee from San Francisco, CA has been confirmed successfully.',
    avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    id: 7,
    title: 'New Message Alert!',
    message:
      'You have received a message from Michael Smith regarding your services.',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    id: 8,
    title: 'New Booking Alert !',
    message:
      'You have a new booking request from Emily Johnson located in Los Angeles, CA.',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    id: 9,
    title: 'New Booking Alert !',
    message:
      'You have a new booking request from Emily Johnson located in Los Angeles, CA.',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    id: 10,
    title: 'New Booking Alert !',
    message:
      'You have a new booking request from Emily Johnson located in Los Angeles, CA.',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    id: 11,
    title: 'New Booking Alert !',
    message:
      'You have a new booking request from Emily Johnson located in Los Angeles, CA.',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    id: 12,
    title: 'New Booking Alert !',
    message:
      'You have a new booking request from Emily Johnson located in Los Angeles, CA.',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
]

const Notifications = () => {
  const [notifs, setNotifs] = useState(notifications)
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 10
  const removeNotification = (id: number) => {
    setNotifs(notifs.filter((notif) => notif.id !== id))
  }

  const onChange = (page: number) => {
    setCurrentPage(page)
  }

  const paginatedNotifs = notifs.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  )

  return (
    <div className="   cursor-pointer">
      <div className="responsive-width  p-5 mx-auto   rounded-lg  ">
        {paginatedNotifs.length > 0 ? (
          paginatedNotifs.map((notif) => (
            <div
              key={notif.id}
              className="flex items-start gap-3 p-7 border-b border-gray-100 last:border-b-0 hover:bg-gray-100 transition"
            >
              <Image
                src={notif.avatar}
                alt="avatar"
                className="w-10 h-10 rounded-full"
                width={5000}
                height={50}
              />
              <div className="flex-1">
                <h3 className="font-semibold">{notif.title}</h3>
                <p className="text-gray-600 text-sm">{notif.message}</p>
              </div>
              <button
                onClick={() => removeNotification(notif.id)}
                className="cursor-pointer"
              >
                <X className="w-5 h-5 text-gray-500 hover:text-red-500" />
              </button>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-600">
            No notifications found
          </div>
        )}
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={notifs.length}
          onChange={onChange}
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        />
      </div>
    </div>
  )
}

export default Notifications

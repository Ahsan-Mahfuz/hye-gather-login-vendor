'use client'

import Image from 'next/image'

const ReviewCard = ({
  name,
  date,
  reviewText,
  rating,
  avatar,
}: {
  name: string
  date: string
  reviewText: string
  rating: number
  avatar: string
}) => {
  const starRating = Array.from({ length: 5 }, (_, index) =>
    index < rating ? '★' : '☆'
  ).join('')

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <div className="flex items-center mb-4">
        <Image
          src="/musician.jpg"
          alt="avatar"
          className="w-12 h-12 object-cover object-center rounded-full mr-4"
          width={5000}
          height={50}
        />
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
      <div className="mb-2">
        <span className="text-yellow-500">{starRating}</span>
      </div>
      <p className="text-gray-700">{reviewText}</p>
    </div>
  )
}

const Reviews = () => {
  const reviews = [
    {
      name: 'Grace Carey',
      date: '24 January, 2023',
      reviewText:
        "I was a bit nervous to be buying a secondhand phone from Amazon, but I couldn't be happier with my purchase!! I have a pre-paid data plan so I was worried that this phone wouldn't connect with my data plan.",
      rating: 4,
      avatar: '/path-to-avatar1.jpg',
    },
    {
      name: 'Ronald Richards',
      date: '24 January, 2023',
      reviewText:
        "This phone has 1T storage and is durable. Plus all the new iPhones have a C port! Apple is phasing out the current ones! (All about the Benjamin's) So if you want a phone that's going to last grab an iPhone 14 pro max and get several cords and plugs.",
      rating: 5,
      avatar: '/path-to-avatar2.jpg',
    },
    {
      name: 'Darcy King',
      date: '24 January, 2023',
      reviewText:
        'I might be the only one to say this but the camera is a little funky. Hoping it will change with a software update: otherwise, love this phone! Came in great condition.',
      rating: 4,
      avatar: '/path-to-avatar3.jpg',
    },
  ]

  return (
    <div className="max-w-2xl mx-auto">
      {reviews.map((review, index) => (
        <ReviewCard
          key={index}
          name={review.name}
          date={review.date}
          reviewText={review.reviewText}
          rating={review.rating}
          avatar={review.avatar}
        />
      ))}
    </div>
  )
}

export default Reviews

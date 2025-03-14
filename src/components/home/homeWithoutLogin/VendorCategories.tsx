'use client'
import React, { useRef } from 'react'
import Link from 'next/link'
import { Carousel, Button } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { CarouselRef } from 'antd/lib/carousel'

interface Category {
  name: string
  image: string
  description?: string
}

const categories: Category[] = [
  {
    name: 'Musicians',
    image: '/Frame-1.png',
    description: 'Find talented musicians for your event',
  },
  {
    name: 'Entertainers',
    image: '/Frame-2.png',
    description: 'Discover unique entertainers to amaze your guests',
  },
  {
    name: 'Event Planners',
    image: '/Frame-3.png',
    description: 'Professional planners to orchestrate your event',
  },
  {
    name: 'Decorators',
    image: '/Frame-4.png',
    description: 'Creative decorators to transform your venue',
  },
  {
    name: 'Caterers',
    image: '/Frame-5.png',
    description: 'Delicious food and beverage catering services',
  },
  {
    name: 'DJs',
    image: '/Frame.png',
    description: 'Energetic DJs to keep the party going',
  },
]

const VendorCategories: React.FC = () => {
  const carouselRef = useRef<CarouselRef>(null)

  return (
    <div className="responsive-width">
      <section className="mt-[120px] max-lg:mt-[40px] px-4">
        <div className="mx-auto flex items-center flex-col mb-10">
          <h1 className="text-3xl font-bold text-center">
            Explore Our Vendor Categories
          </h1>
          <p className="text-base mt-3 text-gray-600 text-center max-w-2xl">
            Pre-defined templates focusing on content presentation and high
            conversion rates. This is your starting point to discover the best
            vendors in each category at the most competitive prices.
          </p>
        </div>

        <div className="relative mt-8">
          <Button
            icon={<LeftOutlined />}
            onClick={() => carouselRef.current?.prev()}
            className="absolute left-0 top-32 z-10 transform -translate-y-1/2 bg-white shadow-md hover:bg-gray-100 border-0"
            shape="circle"
            size="large"
          />

          <Button
            icon={<RightOutlined />}
            onClick={() => carouselRef.current?.next()}
            className="absolute right-0 top-32 z-10 transform -translate-y-1/2 bg-white shadow-md hover:bg-gray-100 border-0"
            shape="circle"
            size="large"
          />

          <div className="px-10">
            <Carousel
              ref={carouselRef}
              slidesToShow={3}
              slidesToScroll={1}
              dots={true}
              autoplay
              responsive={[
                { breakpoint: 1024, settings: { slidesToShow: 2 } },
                { breakpoint: 768, settings: { slidesToShow: 1 } },
              ]}
              className="categories-carousel"
            >
              {categories.map((category) => (
                <div key={category.name} className="px-3  pb-10">
                  <Link href="/explore-vendors" className="block">
                    <div className="group relative overflow-hidden rounded-lg  transition-all duration-300 h-64">
                      <div
                        style={{
                          backgroundImage: `url(${category.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                        className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 p-4 w-full">
                        <h3 className="text-2xl font-bold ">{category.name}</h3>
                        {category.description && (
                          <p className="text-white text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {category.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  )
}

export default VendorCategories

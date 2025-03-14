import { Carousel } from 'antd'
import Image from 'next/image'
import { FaFire } from 'react-icons/fa'

const TestimonialData = [
  {
    id: 1,
    img: '/entertainment.jpg',
    name: 'Entertainment',
  },
  {
    id: 2,
    img: '/photography.jpg',
    name: 'Photography',
  },
  {
    id: 3,
    img: '/venues.jpg',
    name: 'Venues',
  },
  {
    id: 4,
    img: '/dJs.jpg',
    name: 'DJs',
  },
  {
    id: 5,
    img: '/bar.jpg',
    name: 'Bars',
  },
  {
    id: 6,
    img: '/food.jpg',
    name: 'Food',
  },
]

const contentStyle: React.CSSProperties = {
  maxWidth: '300px',
  color: 'red',
  lineHeight: '500px',
  textAlign: 'center',
  background: 'red !important',
}

const TopTrendingService = () => (
  <div className="responsive-width ">
    <div className="mt-48 mb-20 ">
      <h2 className="text-center text-3xl font-bold mb-8 max-sm:mt-[400px] flex items-center gap-3">
        <FaFire className="text-red-500 text-3xl" />
        Top Trending Service
      </h2>

      <Carousel
        slidesToShow={4}
        autoplaySpeed={1200}
        autoplay
        responsive={[
          {
            breakpoint: 1524,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]}
        className=" flex items-center justify-center gap-10  w-full mx-auto  text-black"
      >
        {TestimonialData.map((data) => (
          <div key={data.id} style={contentStyle}>
            <div className="ml-5  p-3 ">
              <Image
                src={data.img}
                alt={data.name}
                className=" w-full h-[300px] mx-auto mb-4 object-cover"
                width={300}
                height={300}
              />
              <h3 className="text-xl font-bold text-center">{data.name}</h3>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  </div>
)

export default TopTrendingService

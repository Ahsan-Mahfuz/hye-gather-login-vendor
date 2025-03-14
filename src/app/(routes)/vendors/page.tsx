'use client'

import { useState } from 'react'
import { Checkbox, Select, Slider } from 'antd'
import Card from '@/components/card/Card'

const { Option } = Select

type Vendor = {
  id: number
  logo: string
  name: string
  rating: number
  reviews: number
  status: string
  categories: string[]
  bookings: number
  price: number
}[]

const vendors: Vendor = [
  {
    id: 1,
    logo: '/entertainment.jpg',
    name: 'Entertainment',
    rating: 4.5,
    reviews: 200,
    status: 'Available',
    categories: ['Music', 'Dance'],
    bookings: 120,
    price: 500,
  },
  {
    id: 2,
    logo: '/dJs.jpg',
    name: 'DJs',
    rating: 4.0,
    reviews: 150,
    status: 'Available',
    categories: ['Music', 'Party'],
    bookings: 90,
    price: 400,
  },
  {
    id: 3,
    logo: '/bar.jpg',
    name: 'Bars',
    rating: 4.3,
    reviews: 100,
    status: 'Available',
    categories: ['Drinks', 'Party'],
    bookings: 60,
    price: 350,
  },
  {
    id: 4,
    logo: '/food.jpg',
    name: 'Food',
    rating: 4.5,
    reviews: 80,
    status: 'Available',
    categories: ['Catering', 'Party'],
    bookings: 50,
    price: 300,
  },
  {
    id: 5,
    logo: '/photography.jpg',
    name: 'Photography',
    rating: 4.2,
    reviews: 50,
    status: 'Available',
    categories: ['Photography', 'Party'],
    bookings: 30,
    price: 250,
  },
]

const Vendors = () => {
  const [selectedVendors, setSelectedVendors] = useState(vendors)
  const [vendorType, setVendorType] = useState<any[]>([])
  const [city, setCity] = useState<any[]>([])
  const [priceRange, setPriceRange] = useState([0, 1000])

  const filterVendors = () => {
    let filteredVendors = vendors

    if (vendorType.length > 0) {
      filteredVendors = filteredVendors.filter((vendor) =>
        vendorType.every((type) => vendor.categories.includes(type))
      )
    }

    if (city.length > 0) {
    }

    filteredVendors = filteredVendors.filter(
      (vendor) => vendor.price >= priceRange[0] && vendor.price <= priceRange[1]
    )

    setSelectedVendors(filteredVendors)
  }

  const [ishumburgerClicked, setIsHumburgerClicked] = useState(false)
  const handleClickHumburger = () => {
    setIsHumburgerClicked(!ishumburgerClicked)
  }

  return (
    <div className="p-6 responsive-width">
      <div
        className="max-lg:block text-3xl text-center hidden"
        onClick={handleClickHumburger}
      >
        ☰
      </div>
      <div className="flex gap-10 mb-6 justify-between ">
        <div className="flex flex-col gap-4 w-1/4 max-lg:hidden">
          <div>
            <input
              type="text"
              placeholder="Search..."
              className="max-w-[350px] w-full px-2 py-3 border rounded-md   outline-none"
            />
          </div>

          <div>
            <p className="font-semibold">Services</p>
            <Checkbox.Group onChange={setVendorType}>
              <div className="flex flex-col gap-2">
                <Checkbox value="Music">Music</Checkbox>
                <Checkbox value="Dance">Dance</Checkbox>
                <Checkbox value="Party">Party</Checkbox>
                <Checkbox value="Food">Food</Checkbox>
                <Checkbox value="Catering">Catering</Checkbox>
                <Checkbox value="Photography">Photography</Checkbox>
              </div>
            </Checkbox.Group>
          </div>

          <div>
            <p className="font-semibold">Sorting by City / Area</p>
            <Select
              mode="multiple"
              allowClear
              placeholder="Select City"
              style={{ width: '100%' }}
              onChange={setCity}
            >
              <Option value="Downtown">Downtown Los Angeles</Option>
              <Option value="Hollywood">Hollywood</Option>
              <Option value="Venice Beach">Venice Beach</Option>
              <Option value="Long Beach">Long Beach</Option>
            </Select>
          </div>

          <div>
            <p className="font-semibold">Sorting by Price Range</p>
            <Slider
              range
              defaultValue={[0, 1000]}
              min={0}
              max={1000}
              onChange={setPriceRange}
              value={priceRange}
            />
          </div>

          <button
            onClick={filterVendors}
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Apply Filters
          </button>
        </div>

        {ishumburgerClicked && (
          <div className="flex flex-col gap-4 w-full">
            <div>
              <p className="font-semibold">Services</p>
              <Checkbox.Group onChange={setVendorType}>
                <div className="flex flex-col gap-2">
                  <Checkbox value="Music">Music</Checkbox>
                  <Checkbox value="Dance">Dance</Checkbox>
                  <Checkbox value="Party">Party</Checkbox>
                  <Checkbox value="Food">Food</Checkbox>
                  <Checkbox value="Catering">Catering</Checkbox>
                  <Checkbox value="Photography">Photography</Checkbox>
                </div>
              </Checkbox.Group>
            </div>

            <div>
              <p className="font-semibold">Sorting by City / Area</p>
              <Select
                mode="multiple"
                allowClear
                placeholder="Select City"
                style={{ width: '100%' }}
                onChange={setCity}
              >
                <Option value="Downtown">Downtown Los Angeles</Option>
                <Option value="Hollywood">Hollywood</Option>
                <Option value="Venice Beach">Venice Beach</Option>
                <Option value="Long Beach">Long Beach</Option>
              </Select>
            </div>

            <div>
              <p className="font-semibold">Sorting by Price Range</p>
              <Slider
                range
                defaultValue={[0, 1000]}
                min={0}
                max={1000}
                onChange={setPriceRange}
                value={priceRange}
              />
            </div>

            <button
              onClick={filterVendors}
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Apply Filters
            </button>
          </div>
        )}

        {!ishumburgerClicked && (
          <div className="w-3/4 max-lg:w-full max-lg:justify-center flex flex-wrap items-start justify-end gap-6 ">
            {selectedVendors.map((vendor, index) => (
              <Card key={index} {...vendor} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Vendors

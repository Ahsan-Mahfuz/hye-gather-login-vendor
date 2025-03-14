'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PiPlusCircleBold } from 'react-icons/pi'
import { Modal, Button, Select, Upload, message } from 'antd'
import {
  UploadOutlined,
  DeleteOutlined,
} from '@ant-design/icons'

interface Service {
  id: number
  serviceType: string
  categories: string[]
  images: string[]
}

const ServiceCard = () => {
  const [services, setServices] = useState<Service[]>([])
  const [showModal, setShowModal] = useState(false)
  const [editServiceId, setEditServiceId] = useState<number | null>(null)
  const [serviceCategories] = useState([
    { id: 1, name: 'Catering' },
    { id: 2, name: 'Entertainment' },
    { id: 3, name: 'Decoration' },
  ])
  const [serviceTypes] = useState([
    { id: 1, name: 'DJ' },
    { id: 2, name: 'Photography' },
    { id: 3, name: 'Lighting' },
  ])
  const [newService, setNewService] = useState<Service>({
    id: 0,
    serviceType: '',
    categories: [],
    images: [],
  })
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [deleteServiceId, setDeleteServiceId] = useState<number | null>(null)

  const showDeleteConfirm = (id: number) => {
    setDeleteServiceId(id)
    setIsDeleteModalOpen(true)
  }

  const confirmDeleteService = () => {
    if (deleteServiceId !== null) {
      setServices((prev) =>
        prev.filter((service) => service.id !== deleteServiceId)
      )
      message.success('Service deleted successfully')
      setIsDeleteModalOpen(false)
      setDeleteServiceId(null)
    }
  }

  const cancelDeleteService = () => {
    setIsDeleteModalOpen(false)
    setDeleteServiceId(null)
  }

  const addOrUpdateService = () => {
    if (!newService.serviceType)
      return message.error('Service name and type are required')

    if (editServiceId !== null) {
      setServices(
        services.map((service) =>
          service.id === editServiceId
            ? { ...service, ...newService, id: service.id }
            : service
        )
      )
    } else {
      setServices([
        ...services,
        {
          ...newService,
          id:
            services.length > 0
              ? Math.max(...services.map((s) => s.id)) + 1
              : 1,
        },
      ])
    }

    setNewService({
      id: 0,
      serviceType: '',
      categories: [],
      images: [],
    })
    setShowModal(false)
    setEditServiceId(null)
  }


  const handleImageUpload = (file: File) => {
    const url = URL.createObjectURL(file)
    setNewService((prev) => ({ ...prev, images: [...prev.images, url] }))
    return false
  }

  return (
    <div className="p-4 flex flex-wrap w-full justify-start items-center gap-4">
      {services.map((service) => (
        <div
          key={service.id}
          className="bg-white hover:bg-slate-200 shadow-md rounded-lg p-5 flex flex-col sm:flex-row gap-4 max-w-[400px] w-full border border-gray-200 relative"
        >
          <Link
            href={`/service/${service.id}`}
            className="flex-shrink-0 w-full sm:w-48 "
          >
            <Image
              src={service.images[0] || '/placeholder.jpg'}
              alt="service image"
              width={5000}
              height={150}
              className="rounded-md object-cover object-center max-sm:w-full w-[200px] h-[200px]"
            />
          </Link>
          <div className="flex-1">
            <p className="text-gray-800 font-medium text-sm mt-2">
              Service Type:
            </p>
            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-md text-xs">
              {service.serviceType}
            </span>
            <p className="text-gray-800 font-medium text-sm mt-2">
              Categories:
            </p>
            <div className="flex gap-2 mt-1 flex-wrap mb-6">
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
          <Button
            type="text"
            onClick={() => showDeleteConfirm(service.id)}
            className="absolute bottom-1 left-5    "
          >
            <DeleteOutlined className=" rounded-md text-white hover:bg-white hover:text-black bg-red-500 px-5 py-3" />
          </Button>
          <Button
            type="text"
            onClick={() => {
              setNewService(service)
              setEditServiceId(service.id)
              setShowModal(true)
            }}
            className="absolute bottom-1  left-20 sm:bottom-1 sm:left-20    "
          >
            <div className=" rounded-md text-white hover:bg-white hover:text-black bg-blue-800 px-5 py-2">
              Edit
            </div>
          </Button>
        </div>
      ))}
      <div
        onClick={() => {
          setNewService({
            id: 0,
            serviceType: '',
            categories: [],
            images: [],
          })
          setEditServiceId(null)
          setShowModal(true)
        }}
        className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center w-full max-w-[300px] border border-gray-200 cursor-pointer hover:shadow-lg transition"
      >
        <PiPlusCircleBold className="text-blue-500 w-28 h-24" />
        <p className="text-gray-700 mt-2 text-sm text-center">
          Add new service
        </p>
      </div>
      <Modal
        title={
          <div className="text-2xl text-center">
            {editServiceId ? 'Edit Service' : 'Add A New Service'}
          </div>
        }
        open={showModal}
        onCancel={() => setShowModal(false)}
        footer={null}
        centered
        width={600}
      >
        <Select
          className="w-full mb-2 h-[36px]"
          placeholder="Select Service Type"
          onChange={(value) =>
            setNewService({ ...newService, serviceType: value })
          }
          value={newService.serviceType || undefined}
        >
          {serviceTypes.map((item) => (
            <Select.Option key={item.id} value={item.name}>
              {item.name}
            </Select.Option>
          ))}
        </Select>
        <Select
          mode="multiple"
          className="w-full mb-2 h-[36px]"
          placeholder="Select Service Categories"
          onChange={(value) =>
            setNewService({ ...newService, categories: value })
          }
          value={newService.categories}
        >
          {serviceCategories.map((item) => (
            <Select.Option key={item.id} value={item.name}>
              {item.name}
            </Select.Option>
          ))}
        </Select>
        <Upload beforeUpload={handleImageUpload} className="mt-5" multiple>
          <Button icon={<UploadOutlined />}>Upload Images</Button>
        </Upload>
        <Button
          type="primary"
          className="w-full mt-2 h-[36px]"
          onClick={addOrUpdateService}
        >
          {editServiceId ? 'Update Service' : 'Add New Service'}
        </Button>
      </Modal>

      <Modal
        title="Confirm Delete"
        open={isDeleteModalOpen}
        onOk={confirmDeleteService}
        onCancel={cancelDeleteService}
        okText="Yes"
        cancelText="No"
        centered
      >
        <p>Are you sure you want to delete this service?</p>
      </Modal>
    </div>
  )
}

export default ServiceCard

'use client'

import { useState } from 'react'
import { Modal, Button, Input, Radio } from 'antd'
import toast from 'react-hot-toast'

type formDataType = {
  eventName: string
  phoneNumber: string
  eventLocation: string
  eventDate: string
  eventTime: string
  guestNumber: string
  eventDuration: string
  additionalRequirements: string
  additionalRates: string
}

const BookingRequest = () => {
  const [visible, setVisible] = useState(false)
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<formDataType>({
    eventName: '',
    phoneNumber: '',
    eventLocation: '',
    eventDate: '',
    eventTime: '',
    guestNumber: '',
    eventDuration: '',
    additionalRequirements: '',
    additionalRates: '',
  })

  const handleNext = () => {
    if (validateStep()) {
      setStep((prevStep) => prevStep + 1)
    } else {
      toast.error('Please fill all required fields.')
    }
  }

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleRadioChange = (e: any, field: string) => {
    setFormData((prevData) => ({ ...prevData, [field]: e.target.value }))
  }

  const handleModalOpen = () => {
    setVisible(true)
    setStep(1)
  }

  const handleSubmit = () => {
    console.log(formData)
    toast.success('Form submitted successfully!')
    setVisible(false)
    setFormData({
      eventName: '',
      phoneNumber: '',
      eventLocation: '',
      eventDate: '',
      eventTime: '',
      guestNumber: '',
      eventDuration: '',
      additionalRequirements: '',
      additionalRates: '',
    })
  }

  const validateStep = (): boolean => {
    const validations: Record<number, boolean> = {
      1: !!(
        formData.eventName &&
        formData.phoneNumber &&
        formData.eventLocation
      ),
      2: !!(formData.eventDate && formData.eventTime),
      3: !!formData.guestNumber,
      4: !!formData.eventDuration,
      5: !!formData.additionalRequirements,
      6: !!formData.additionalRates,
    }

    return validations[step] || false
  }

  return (
    <>
      <Button
        type="primary"
        style={{ height: '42px' }}
        onClick={handleModalOpen}
      >
        Open Event Booking
      </Button>

      <Modal
        title={
          <span
            className="flex items-center justify-center"
            style={{ fontSize: '28px', fontWeight: '500', textAlign: 'center' }}
          >
            Check availability
          </span>
        }
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
        width={500}
        centered
      >
        {step === 1 && (
          <div>
            <div>
              <label className="block text-sm font-medium ">Event Name:</label>
              <Input
                name="eventName"
                value={formData.eventName}
                onChange={handleChange}
                className="mt-1 h-[42px] block w-full"
                placeholder="Event Name"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium ">
                Phone Number:
              </label>
              <Input
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 h-[42px] block w-full"
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium ">
                Event Location:
              </label>
              <Input
                name="eventLocation"
                value={formData.eventLocation}
                onChange={handleChange}
                className="mt-1 h-[42px] block w-full"
                placeholder="Event Location"
                required
              />
            </div>
            <div className="mt-6">
              <Button
                type="primary"
                onClick={handleNext}
                className="w-full h-[42px] bg-blue-800 "
              >
                Next
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <div>
              <label className="block text-sm font-medium ">Event Date:</label>
              <Input
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                className="mt-1 h-[42px] block w-full"
                placeholder="Event Date"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium ">Event Time:</label>
              <Input
                name="eventTime"
                value={formData.eventTime}
                onChange={handleChange}
                className="mt-1 h-[42px] block w-full"
                placeholder="Event Time"
                required
              />
            </div>
            <div className="mt-6 flex justify-between">
              <Button
                onClick={handlePrev}
                className="w-1/3 h-[42px] bg-blue-800 text-white"
              >
                Previous
              </Button>
              <Button
                type="primary"
                onClick={handleNext}
                className="w-1/3 h-[42px] bg-blue-800 text-white"
              >
                Next
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <div>
              <label className="block text-sm font-medium ">
                Number of Guests:
              </label>
              <Radio.Group
                value={formData.guestNumber}
                onChange={(e) => handleRadioChange(e, 'guestNumber')}
                className="mt-1 flex flex-col gap-2"
              >
                <Radio value="10-50">10-50</Radio>
                <Radio value="50-100">50-100</Radio>
                <Radio value="100-150">100-150</Radio>
                <Radio value="150-200">150-200</Radio>
                <Radio value="200-250">200-250</Radio>
                <Radio value="250-300">250-300</Radio>
                <Radio value="300-400">300-400</Radio>
                <Radio value="More than 400">More than 400</Radio>
              </Radio.Group>
            </div>
            <div className="mt-6 flex justify-between">
              <Button
                onClick={handlePrev}
                className="w-1/3 h-[42px] bg-blue-800 text-white"
              >
                Previous
              </Button>
              <Button
                type="primary"
                onClick={handleNext}
                className="w-1/3 h-[42px] bg-blue-800 text-white"
              >
                Next
              </Button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <div>
              <label className="block text-sm font-medium ">
                Event Duration:
              </label>
              <Radio.Group
                value={formData.eventDuration}
                onChange={(e) => handleRadioChange(e, 'eventDuration')}
                className="mt-1 flex flex-col gap-2"
              >
                <Radio value="2 hr">2 hr</Radio>
                <Radio value="2-4 hr">2-4 hr</Radio>
                <Radio value="4-6 hr">4-6 hr</Radio>
                <Radio value="6-10 hr">6-10 hr</Radio>
                <Radio value="10-12 hr">10-12 hr</Radio>
                <Radio value="More than 12 hr">More than 12 hr</Radio>
              </Radio.Group>
            </div>
            <div className="mt-6 flex justify-between">
              <Button
                onClick={handlePrev}
                className="w-1/3 h-[42px] bg-blue-800 text-white"
              >
                Previous
              </Button>
              <Button
                type="primary"
                onClick={handleNext}
                className="w-1/3 h-[42px] bg-blue-800 text-white"
              >
                Next
              </Button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div>
            <div>
              <label className="block text-sm font-medium ">
                Additional requirements or services needed:
              </label>
              <Input.TextArea
                name="additionalRequirements"
                value={formData.additionalRequirements}
                onChange={handleChange}
                className="mt-1 h-[42px] block w-full"
                placeholder="Details"
                rows={3}
              />
            </div>
            <div className="mt-6 flex justify-between">
              <Button
                onClick={handlePrev}
                className="w-1/3 h-[42px] bg-blue-800 text-white"
              >
                Previous
              </Button>
              <Button
                type="primary"
                onClick={handleNext}
                className="w-1/3 h-[42px] bg-blue-800 text-white"
              >
                Next
              </Button>
            </div>
          </div>
        )}

        {step === 6 && (
          <div>
            <div>
              <label className="block text-sm font-medium ">
                Additional rates:
              </label>
              <Input.TextArea
                name="additionalRates"
                value={formData.additionalRates}
                onChange={handleChange}
                className="mt-1 h-[42px] block w-full"
                placeholder="Rates"
                rows={3}
              />
            </div>
            <div className="mt-6 flex justify-between">
              <Button
                onClick={handlePrev}
                className="w-1/3 h-[42px] bg-blue-800 text-white"
              >
                Previous
              </Button>
              <Button
                type="primary"
                onClick={handleSubmit}
                className="w-1/3 h-[42px] bg-blue-800 text-white"
              >
                Send Quote
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </>
  )
}

export default BookingRequest

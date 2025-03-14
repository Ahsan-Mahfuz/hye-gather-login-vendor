'use client'
import { useState } from 'react'
import Password from '../../../../components/profile/Password'
import { Button, Form, Input, message, Upload } from 'antd'
import { UploadOutlined, LoadingOutlined } from '@ant-design/icons'
import Image from 'next/image'
import toast from 'react-hot-toast'
const Profile = () => {
  type FormData = {
    fullName: string
    email: string
    phone: string
    area: string
    building: string
    postalCode: string
    streetAddress: string
    pdf: File | null
    image: string | null
    description: string | null
  }
  const [userType, setUserType] = useState('vendor') // user, vendor
  const [activeTab, setActiveTab] = useState('profile')
  const [form] = Form.useForm()
  const [isEditing, setIsEditing] = useState(false)
  const [loading, setLoading] = useState(false)
  const [imageLoading, setImageLoading] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    fullName: 'Thuto Makohaone',
    email: 'thutomakohaone@gmail.com',
    phone: '+27 55745 2567 125',
    area: '',
    building: '',
    postalCode: '2191',
    streetAddress: 'Alice Street',
    pdf: null,
    image: null,
    description: '',

  })

  const handleUpdate = () => {
    if (isEditing) {
      form
        .validateFields()
        .then((values) => {
          setFormData({ ...formData, ...values })
          toast.success('Profile updated successfully!')
          setIsEditing(false)
        })
        .catch(() => {
          message.error('Please complete the form properly.')
        })
    } else {
      setIsEditing(true)
    }
  }

  const handleImageUpload = async (info: any) => {
    console.log(info)
    setImageLoading(true)

    const uploadedImage = info.file.originFileObj || info.file

    if (!(uploadedImage instanceof File)) {
      message.error('Invalid file type. Please upload a valid image.')
      setImageLoading(false)
      return
    }

    setTimeout(() => {
      setImageLoading(false)

      try {
        const imageURL = URL.createObjectURL(uploadedImage)

        setFormData({
          ...formData,
          image: imageURL,
        })

        toast.success('Profile image updated successfully!')
      } catch (error) {
        console.error('Error creating image URL:', error)
        toast.error('Error displaying image.')
      }
    }, 2000)
  }

  return (
    <div className="min-h-screen  flex flex-col items-center py-10">
      <div className=" shadow-md rounded-lg p-8 w-full max-w-3xl">
        <div className="text-2xl font-bold text-center m-5 mb-7">
          Update Your Profile
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={
              formData.image
                ? formData.image
                : 'https://randomuser.me/api/portraits/men/1.jpg'
            }
            alt="Profile"
            className="w-28 h-28 rounded-full border object-cover"
            width={5000}
            height={50}
          />

          {isEditing && (
            <Upload
              accept="image/*"
              showUploadList={false}
              beforeUpload={() => false}
              onChange={handleImageUpload}
              className="mt-2"
            >
              <Button
                icon={
                  imageLoading ? <LoadingOutlined spin /> : <UploadOutlined />
                }
              >
                {imageLoading ? 'Uploading...' : 'Update Image'}
              </Button>
            </Upload>
          )}

          <h2 className="mt-3 text-xl font-semibold">Jerome Smith</h2>
        </div>

        <div className="flex justify-center mt-6  ">
          <button
            className={`px-4 py-2 cursor-pointer ${
              activeTab === 'profile'
                ? 'border-b-2 border-blue-800 text-blue-800'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('profile')}
          >
            Profile
          </button>
          <button
            className={`px-4 py-2 cursor-pointer ${
              activeTab === 'password'
                ? 'border-b-2 border-blue-800 text-blue-800'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('password')}
          >
            Password
          </button>
        </div>

        {activeTab === 'profile' && (
          <div className="flex flex-col items-center ">
            <div className="rounded-lg  w-full max-w-3xl">
              <Form form={form} layout="vertical" initialValues={formData}>
                <div className="flex flex-col gap-1">
                  <Form.Item label="Name" name="fullName">
                    <Input disabled={!isEditing} className="h-[40px]" />
                  </Form.Item>
                  <Form.Item label="Email" name="email">
                    <Input disabled={!isEditing} className="h-[40px]" />
                  </Form.Item>
                  <Form.Item label="Contact Number" name="phone">
                    <Input disabled={!isEditing} className="h-[40px]" />
                  </Form.Item>
                  {userType === 'vendor' && (
                    <Form.Item label="Description" name="description">
                      <textarea disabled={!isEditing} className="border rounded-md outline-none p-4 h-[150px] w-full" />
                    </Form.Item>
                  )}
                  {userType === 'vendor' && (
                    <Form.Item label="Starting Price" name="staringPrice">
                      <Input disabled={!isEditing} className="h-[40px]"  placeholder='1000'/>
                    </Form.Item>
                  )}
                </div>

                <div className="flex justify-center mt-6">
                  <Button
                    type="primary"
                    onClick={handleUpdate}
                    disabled={loading}
                  >
                    {isEditing ? 'Save' : 'Update Now'}
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        )}

        {activeTab === 'password' && <Password />}
      </div>
    </div>
  )
}

export default Profile

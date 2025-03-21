'use client'
import { useState } from 'react'
import { Form, Input, Button } from 'antd'
import toast from 'react-hot-toast'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const OtpSent = () => {
  const router = useRouter()
  const [otp, setOtp] = useState(['', '', '', '', '', ''])

  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    if (value && index < 5) {
      const nextInput = document.getElementById(
        `otp-${index + 1}`
      ) as HTMLInputElement
      if (nextInput) {
        nextInput.focus()
      }
    }
  }
  const validateOtp = () => {
    const joinedOtp = otp.join('')
    if (joinedOtp.length !== 6) {
      return Promise.reject(new Error('Please enter a 6-digit code!'))
    }
    return Promise.resolve()
  }

  const onFinishOtp = () => {
    console.log(otp)
    toast.success('Otp verified successfully!')
    router.push('/set-new-password')
  }

  return (
    <div className="h-screen flex items-center justify-center  flex-col lg:flex-row">
      <div className="w-1/2 hidden lg:block">
        <Image
          src="/forgetPassword.png"
          alt="Login"
          className="w-full h-full object-cover"
          width={5000}
          height={50}
        />
      </div>
      <div className=" mx-auto lg:w-1/2  flex flex-col  items-center  pr-3">
        <div className="flex items-center flex-col max-w-[500px] w-full ">
          <h1
            className="font-bold  text-center"
            style={{ fontSize: 'clamp(20px, 8vw, 40px)' }}
          >
            Check your email
          </h1>
          <p
            className=" mb-8 text-center text-gray-600"
            style={{ fontSize: 'clamp(10px, 5vw, 20px)' }}
          >
            We sent a reset link to <strong>contact@dscode...com</strong> enter
            6 digit code that mentioned in the email
          </p>
        </div>

        <Form
          requiredMark={false}
          layout="vertical"
          onFinish={onFinishOtp}
          className="w-full max-w-md "
          style={{
            marginInline: 'auto',
          }}
        >
          <Form.Item
            style={{ textAlign: 'center' }}
            name="otp"
            rules={[{ validator: validateOtp }]}
          >
            <div className="flex gap-2  justify-center">
              {otp.map((_, index) => (
                <Input
                  key={index}
                  id={`otp-${index}`}
                  maxLength={1}
                  className="w-12 h-[42px] text-center border-gray-300 rounded-md"
                  value={otp[index]}
                  onChange={(e) => handleOtpChange(e.target.value, index)}
                />
              ))}
            </div>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full rounded-full h-11 mt-5"
            >
              Verify
            </Button>
          </Form.Item>
        </Form>
        <div className="text-gray-600 text-xs">
          You have not received the email? {''}
          <Link
            href={`/check-email-for-the-otp`}
            className=" hover:underline text-blue-800 hover:text-blue-600"
          >
            Resend
          </Link>
        </div>
      </div>
    </div>
  )
}

export default OtpSent

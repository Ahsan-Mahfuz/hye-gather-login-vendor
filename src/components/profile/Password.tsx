'use client'

import { Form, Input, Button } from 'antd'
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons'
import toast from 'react-hot-toast'

const Password = () => {
  const [form] = Form.useForm()

  const handleCancelClick = () => {
    form.resetFields()
  }

  const handleSaveClick = () => {
    form
      .validateFields()
      .then((values) => {
        console.log('Password Updated:', values)
        toast.success('Password updated successfully!')
        form.resetFields()
      })
      .catch(() => {
        console.error('Validation Failed')
      })
  }

  return (
    <div className="flex flex-col items-center ">
      <div className="rounded-lg  w-full ">
        <Form form={form} layout="vertical" requiredMark={false}>
          <Form.Item
            label="Current Password"
            name="currentPassword"
            rules={[
              {
                required: true,
                message: 'Please enter your current password',
              },
            ]}
          >
            <Input.Password
              placeholder="*************"
              iconRender={(visible) =>
                visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
              }
              className="h-[42px]"
            />
          </Form.Item>

          <Form.Item
            label="New Password"
            name="newPassword"
            rules={[
              { required: true, message: 'Please enter your new password' },
            ]}
          >
            <Input.Password
              placeholder="*************"
              iconRender={(visible) =>
                visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
              }
              className="h-[42px]"
            />
          </Form.Item>

          <Form.Item
            label="Confirm New Password"
            name="confirmPassword"
            dependencies={['newPassword']}
            rules={[
              { required: true, message: 'Please confirm your password' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('newPassword') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(new Error('Passwords do not match!'))
                },
              }),
            ]}
          >
            <Input.Password
              placeholder="*************"
              iconRender={(visible) =>
                visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
              }
              className="h-[42px]"
            />
          </Form.Item>

          <div className="flex items-center justify-center gap-1.5">
            <Button type="primary" onClick={handleSaveClick}>
              Save
            </Button>
            <Button onClick={handleCancelClick}>Cancel</Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Password

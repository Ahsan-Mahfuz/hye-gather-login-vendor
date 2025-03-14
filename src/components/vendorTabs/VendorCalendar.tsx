import type { BadgeProps } from 'antd'
import { Badge, Calendar } from 'antd'
import type { Dayjs } from 'dayjs'

interface Booking {
  date: string
  type: 'ongoing' | 'request' | 'payment' | 'completed'
}

const bookings: Booking[] = [
  { date: '2024-02-17', type: 'ongoing' },
  { date: '2024-02-17', type: 'request' },
  { date: '2024-02-18', type: 'payment' },
  { date: '2024-02-18', type: 'completed' },
  { date: '2024-02-19', type: 'ongoing' },
  { date: '2024-02-19', type: 'payment' },
  { date: '2024-03-19', type: 'payment' },
  { date: '2024-03-26', type: 'request' },
  { date: '2024-03-30', type: 'completed' },
]

const bookingBadgeColors: Record<Booking['type'], BadgeProps['status']> = {
  ongoing: 'processing',
  request: 'warning',
  payment: 'default',
  completed: 'success',
}

const getListData = (value: Dayjs) => {
  const dateString = value.format('YYYY-MM-DD')
  return bookings
    .filter((booking) => booking.date === dateString)
    .map((booking) => ({
      type: bookingBadgeColors[booking.type],
      content: `${
        booking.type.charAt(0).toUpperCase() + booking.type.slice(1)
      } Booking`,
    }))
}

const VendorCalendar: React.FC = () => {
  // Function to render data inside a date cell
  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value)
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge
              status={item.type as BadgeProps['status']}
              text={item.content}
            />
          </li>
        ))}
      </ul>
    )
  }

  return <Calendar dateCellRender={dateCellRender} />
}

export default VendorCalendar

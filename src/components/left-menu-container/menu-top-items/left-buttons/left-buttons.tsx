import './left-buttons.scss'
import { Button } from 'antd'
import {
  HomeOutlined,
  MessageOutlined,
  NotificationOutlined,
  NumberOutlined,
} from '@ant-design/icons'

function LeftButtons() {
  return (
    <div className='leftButtons'>
      <div>
        <Button
          type='link'
          className='buttonProperties'
          icon={<HomeOutlined />}
        >
          Home
        </Button>
      </div>
      <div>
        <Button
          type='link'
          className='buttonProperties'
          icon={<MessageOutlined />}
        >
          Messages
        </Button>
      </div>{' '}
      <div>
        <Button
          type='link'
          className='buttonProperties'
          icon={<NotificationOutlined />}
        >
          Notifications
        </Button>
      </div>{' '}
      <div>
        <Button
          type='link'
          className='buttonProperties'
          icon={<NumberOutlined />}
        >
          Explore
        </Button>
      </div>
    </div>
  )
}
export default LeftButtons

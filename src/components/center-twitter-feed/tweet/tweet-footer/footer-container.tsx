import './footer-container.scss'
import { Button } from 'antd'
import {
  HeartOutlined,
  MessageOutlined,
  RetweetOutlined,
  ShareAltOutlined,
} from '@ant-design/icons'

function FooterContainer() {
  return (
    <div className='footer-container'>
      <div>
        <Button type='link' icon={<MessageOutlined />}>
          100
        </Button>
      </div>
      <div>
        <Button type='link' icon={<RetweetOutlined />}>
          100
        </Button>
      </div>
      <div>
        <Button type='link' icon={<HeartOutlined />}>
          100
        </Button>
      </div>
      <div>
        <Button type='link' icon={<ShareAltOutlined />}>
          100
        </Button>
      </div>
    </div>
  )
}

export default FooterContainer

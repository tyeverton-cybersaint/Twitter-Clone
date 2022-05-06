import './right-search.scss'
import { Input } from 'antd'
import { UserOutlined } from '@ant-design/icons'

function RightSearch() {
  return (
    <div className='right-search'>
      <Input size='large' placeholder='large size' prefix={<UserOutlined />} />
    </div>
  )
}

export default RightSearch

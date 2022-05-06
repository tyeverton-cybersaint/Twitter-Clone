import './right-screen.scss'
import RightSearch from './right-search-container/right-search'
import RightAdd from './right-add-container/right-add'

function RightScreen() {
  return (
    <div className='rightScreen'>
      <RightSearch />
      <RightAdd />
    </div>
  )
}

export default RightScreen

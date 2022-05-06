import './left-overall.scss'
import MenuTopItems from '../menu-top-items/menu-top-items'
import MenuBottomItems from '../menu-bottom-items/menu-bottom-items'

function LeftOverall() {
  return (
    <div className='leftOverall'>
      <MenuTopItems />
      <MenuBottomItems />
    </div>
  )
}

export default LeftOverall

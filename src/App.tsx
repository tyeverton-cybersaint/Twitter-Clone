import './components/left-menu-container/menu-bottom-items/menu-bottom-items'
import LeftScreen from './components/left-menu-container/left-screen'
import RightScreen from './components/right-add-container/right-screen'
import CenterScreen from './components/center-twitter-feed/center-screen'

function App() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <LeftScreen />
      <CenterScreen />
      <RightScreen />
    </div>
  )
}

export default App

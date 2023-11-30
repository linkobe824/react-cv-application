import './App.css'
import Sidebar from './components/Sidebar'
import Switch from './components/Switch'

function App() {
  return (
    <div className='flex-container'>
      <Sidebar />
      <Switch component={window.location.pathname} />
    </div>
  )
}

export default App

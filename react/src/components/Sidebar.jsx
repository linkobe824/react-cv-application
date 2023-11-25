import '../css/Sidebar.css'
import { SidebarList } from '../SidebarList'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='logo'>
        <a href='/'>CV Application</a>
      </div>
      <ul className='list'>
        {SidebarList.map((val, key) => {
          return (
            <li
              className='row'
              key={key}
              onClick={() => (window.location.pathname = val.ref)}
              id={window.location.pathname === val.link ? 'active' : ''}
            >
              <div id='icon'>{val.icon}</div>
              <a id='title'>{val.title}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar

import { Outlet } from 'react-router-dom'
import { Navbar } from './presentation/shared/navbar/navbar.component'
import { Sidebar } from './presentation/shared/sidebar/sidebar.component'
import './App.css'

function App() {

  return (
    <div data-theme="light">
      <Sidebar />
      <Navbar />
      <body>
        <Outlet />
      </body>
    </div>
  )
}

export default App

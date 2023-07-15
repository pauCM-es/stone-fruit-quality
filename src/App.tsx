import { Outlet } from 'react-router-dom'

import { Navbar } from './presentation/shared/navbar/navbar.component'
import { Sidebar } from './presentation/shared/sidebar/sidebar.component'

import './App.scss'

function App () {

  return (
    <div className='app'>
      <Navbar />
      <Sidebar />
      <section className='app-content'>
        <Outlet />
      </section>
    </div>
  )
}

export default App

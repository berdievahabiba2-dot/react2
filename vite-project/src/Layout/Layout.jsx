
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Layout.css'
import ico from '../Companent/logo.png'
import ico1 from '../Companent/phone.png'
import ico2 from '../Companent/mail.png'
import ico3 from '../Companent/вк.png'
import ico4 from '../Companent/buttons.png'

const Layout = () => {
  return (
    <div >
      <header>
         <div className='icon'>
          <img src={ico} alt="" />
          <p>Качественные детали и узлыдля сельскохозяйственной техники</p>
          <img src={ico1} alt="" />
          <img src={ico2} alt="" />
          <img src={ico3} alt="" />
          <img src={ico4} alt="" />

        </div>
        <nav className="menu"> 
          <Link to="/">Главная</Link>
          <Link to="/about">Каталог</Link>
          <Link to="/products">О нас</Link>
          <p>Новости</p>
          <p>Партнеры</p>
          <p>Контакты</p>
          <input type="text" name="" id="" placeholder='поиск по каталогу'/>
        </nav>
      </header>

      <main>
          <Outlet/>
      </main>
    </div>
  )
}

export default Layout

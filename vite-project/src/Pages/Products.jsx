
import React from 'react'
import './Products.css'

import img6 from '../Companent/img6.png'
import ico from '../Companent/вк1.png'
import ico2 from '../Companent/wa.png'
import ico4 from '../Companent/tg.png'
import ico6 from '../Companent/тг.png'
import ico8 from '../Companent/ватап.png'
import image from '../Companent/img13.png'

const Products = () => {
  return (
    <div className="prod">

      <div className="head">
        <p>header on scroll</p>
        <p>buttons</p>
      </div>

      <div className="btns">
        <div className="btn">
          <button>написать нам</button>
          <button>написать нам</button>
        </div>

        <div className="btn">
          <button>узнать стоимость</button>
          <button>узнать стоимость</button>
        </div>

        <div className="btn">
          <button>Оставить заявку</button>
          <button>Оставить заявку</button>
        </div>

        <div className="btn">
          <button>получить консультацию</button>
          <button>получить консультацию</button>
        </div>

        <div className="btn">
          <button>перейти в каталог</button>
          <button>перейти в каталог</button>
        </div>
      </div>

      <div className="cont">
        <div className="cards">
          <p>cards</p>

          <div className="card">
            <h2>Картофелеуборочная техника</h2>
            <img src={img6} alt=" "/>
          </div>

          <div className="green">
            <h2>Картофелеуборочная техника</h2>
            <img src={img6} alt=""/>
          </div>
        </div>

        <div className="right">
          <div className="icons">
            <p>icons</p>
            <div className="icon-list">
              <img src={ico} alt="ВКонтакте" />
              <img src={ico2} alt="WhatsApp" />
              <img src={ico4} alt="Telegram" />
              <img src={ico6} alt="Telegram" />
              <img src={ico8} alt="WhatsApp" />
            </div>
          </div>

          <div className="bottom">
            <div className="inputs">
              <p>input</p>
              <input type="text"placeholder="⌕ Поиск по каталогу"/>
              <input type="text"placeholder="⌕ Свеклоуборо..."/>
            </div>
            <div className="img">
              <p>images</p>
              <img src={image} alt="Техника" />
            </div>

          </div>
        </div>
      </div>

      <div className="section">
        <p>points</p>
        <div className="points">
          <div className="nav">
            <p>ГЛАВНАЯ</p>
            <p>КАТАЛОГ⌄</p>
            <p>О НАС</p>
            <p>НОВОСТИ</p>
            <p>ПАРТНЕРЫ</p>
            <p>КОНТАКТЫ</p>
          </div>

          <div className="nav-green">
            <p>ГЛАВНАЯ</p>
            <p>КАТАЛОГ⌄</p>
            <p>О НАС</p>
            <p>НОВОСТИ</p>
            <p>ПАРТНЕРЫ</p>
            <p>КОНТАКТЫ</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Products

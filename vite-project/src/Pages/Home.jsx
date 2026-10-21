
import React from 'react'
import './Home.css'

import ico from '../Companent/img4.png'
import img from '../Companent/img5.png'
import img1 from '../Companent/img6.png'
import img2 from '../Companent/img7.png'
import img4 from '../Companent/img8.png'
import img5 from '../Companent/img9.png'
import img6 from '../Companent/img10.png'
import ico1 from '../Companent/logo.png'
import ico3 from '../Companent/вк.png'

const Home = () => {
  return (
    <div className="page">

      <section className="home">
        <div className="home-text">
          <h1>
            Бренд MEDO — российское производство
            транспортных лент, прутковых
            транспортеров для сельхозтехники
            по уборке урожая овощных культур
          </h1>
          <button>Оставить заявку</button>
        </div>

        <img className="hero-img" src={ico} alt="Техника MEDO" />
      </section>
      <section className="catalog">
        <div className="section-title">
          <h2>Каталог товаров</h2>
          <p>
            Небольшое описание блока
            <br />
            размеров в две строки
          </p>
        </div>

        <div className="catalog-list">
          <div className="catalog-card">
            <h3>Свеклоуборочная техника</h3>
            <img src={img} alt="Свеклоуборочная техника" />
          </div>

          <div className="catalog-card">
            <h3>Картофелеуборочная техника</h3>
            <img src={img1} alt="Картофелеуборочная техника" />
          </div>

          <div className="catalog-card">
            <h3>Транспортеры MEDO</h3>
            <img src={img2} alt="Транспортеры MEDO" />
          </div>
        </div>

        <button className="catalog-button">Весь каталог</button>
      </section>

      <section className="about">
        <h2>О компании</h2>

        <p>
          ООО «КД-ГРУПП» — это команда единомышленников и
          профессионалов в таких направлениях, как сельскохозяйственная
          и специальная техника. Основной состав компании сформирован
          из инженеров-производственников, которые не понаслышке знают
          все трудности и проблемы, с которыми Вам приходится
          сталкиваться в процессе работы с техникой. Мы всегда готовы
          прийти Вам на помощь.
        </p>

        <p>
          А также, наша компания предлагает к поставке прутковые
          транспортеры и комплектующие собственного производства
          под брендом MEDO. В кратчайшие сроки выполним заказ на
          изготовление транспортера для сельхозтехники по уборке
          урожая овощных культур. Дополнительно мы оказываем услуги
          по восстановлению ваших б/у транспортеров с заменой всех
          ремней, пластинок, заклёпок и замков.
        </p>

        <div className="stats">
          <div>
            <h3>500</h3>
            <p>товаров</p>
          </div>

          <div>
            <h3>300+</h3>
            <p>клиентов</p>
          </div>

          <div>
            <h3>15</h3>
            <p>специалистов</p>
          </div>
        </div>
      </section>

      <section className="gallery">
        <img src={img4} alt="Сельхозтехника" />
        <img src={img5} alt="Работа специалистов" />
        <img src={img6} alt="Транспортер MEDO" />
      </section>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-logo">
            <img src={ico1} alt="КД-ГРУПП" />
          </div>

          <div className="footer-column">
            <h4>Информация</h4>
            <p>О нас</p>
            <p>Партнерам</p>
            <p>Карьера</p>
            <p>Контакты</p>
          </div>

          <div className="footer-column">
            <h4>Каталог</h4>
            <p>Свеклоуборочная техника</p>
            <p>Картофелеуборочная техника</p>
            <p>Транспортеры MEDO</p>
            <p>Комплектующие MEDO</p>
          </div>

          <div className="footer-column">
            <h4>Блог</h4>
            <p>Новости</p>
            <p>События</p>
          </div>

          <div className="footer-column address">
            <h4>Адрес</h4>
            <p>Юридический и фактический:</p>
            <p>
              117638, Россия, г. Москва,
              ул. Криворожская, д. 6А, стр. 2, пом. 236
            </p>
            <p>Адрес производства:</p>
            <p>г. Брянск, Московский проезд, д. 10а</p>
          </div>

          <div className="footer-column contacts">
            <h4>Контакты</h4>
            <p>Звонок бесплатный</p>
            <h3>8 800 505 72 32</h3>
            <p>Электронная почта</p>
            <h4>info@kd-grupp.com</h4>
            <button>Написать нам</button>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2020 ООО «КД-Групп». Все права защищены</p>
          <p>Разработка и продвижение SilverDuck</p>
        </div>
      </footer>

    </div>
  )
}

export default Home

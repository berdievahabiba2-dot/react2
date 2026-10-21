import React from 'react'
import './About.css'
import img from '../Companent/img12.png'

const About = () => {
  const categories = [
    'Транспортер выгрузной',
    'Колесные экскаваторы',
    'Экскаваторы-погрузчики',
    'Картофелеуборочная техника',
    'Транспортеры MEDO',
    'Комплектующие MEDO',
    'Почвообрабатывающая техника',
    'Кормоуборочная техника',
    'Опрыскиватели',
    'Разбрасыватели',
    'Зерноуборочная техника',
    'Зерноуборочная техника',
    'Зерноуборочная техника',
    'Зерноуборочная техника',
    'Зерноуборочная техника',
    'Зерноуборочная техника',
    'Зерноуборочная техника',
    'Зерноуборочная техника',
    'Зерноуборочная техника',


  ]

  return (
    <div className="about-page">
      <div className="about-layout">

        <aside className="about-sidebar">
          <button className="about-category-active">Свеклоуборочная техника</button>
          {categories.map((item, index) => (
            <p key={index} className="about-category">{item}</p>))}
        </aside>

        <main className="about-main">
          <div className="about-breadcrumb">Главная　›　Каталог　›　Свеклоуборочная техника</div>
          <h1 className="about-title">Транспортер выгрузной БР 8050 х 1700 х 161</h1>

          <section className="about-product">
            <div className="about-product-image">
              <img src={img} alt="Транспортер выгрузной" /></div>

            <div className="about-specifications">
              <h3>Основные характеристики:</h3>

              <div className="about-spec-row">
                <span>Артикул</span>
                <strong>1056025611</strong>
              </div>

              <div className="about-spec-row">
                <span>Производитель</span>
                <strong>MEDO</strong>
              </div>

              <div className="about-spec-row">
                <span>Ширина</span>
                <strong>1700 мм</strong>
              </div>

              <div className="about-spec-row">
                <span>Кол-во прутков</span>
                <strong>161 шт.</strong>
              </div>

              <button className="about-price-btn">Узнать стоимость</button>
            </div>
          </section>

          <button className="about-delivery-btn"> Оплата и доставка</button>

          <div className="about-description">
            <p> Поставляем оригинальные запчасти, а также качественные
              аналоги. Оказываем услуги по ремонту и восстановлению
              деталей, узлов и механизмов.</p>

            <p>
              Помогаем специалистам правильно дефектовать технику и
              подобрать именно те детали, которые действительно
              необходимы. Оказываем информационную поддержку технических
              специалистов при работе с каталогами и определением
              правильных параметров и характеристик деталей.
            </p>

            <p>
              Проводим консультации для руководителей о правильной
              эксплуатации техники, а также определении причин аварийных
              поломок вследствие нарушений правил выполнения работ
              и технологии.
            </p>
          </div>

          <section className="about-contact">
            <div className="about-contact-text">
              <h2>Остались вопросы?</h2>
              <p>Оставьте заявку на подбор нужного товара и бесплатную консультацию специалиста.</p>

              <form className="about-contact-form" onSubmit={(e) => e.preventDefault()}>
                <input type="tel"placeholder="Номер телефона" aria-label="Номер телефона"/>
                <button type="submit">Получить консультацию</button>
              </form>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default About
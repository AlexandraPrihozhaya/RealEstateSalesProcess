import React from 'react';
import { SSection, SDivObjects } from './styled';
import { Link } from 'react-router-dom';


const CatalogObjects = () => {
  return (
    <SSection>
      <SDivObjects>
      <div class="card">
    <div class="card-image"></div>
    <div class="card-content">
      <Link class="card-title" to={'/'}>Квартира в центре города длкпкпдлкп лдо дцук</Link>
      <div class="card-details">
        <p>Адрес: ул. Ленина, д. 10</p>
        <p>Площадь: 50 кв.м.</p>
        <p>Этаж: 5/9</p>
        <p>Комнат: 2</p>
        <p>Санузел: совмещенный</p>
      </div>
      <div class="card-price">1 500 000 руб.</div>
    </div>
  </div>
  <div class="card">
    <div class="card-image"></div>
    <div class="card-content">
      <div class="card-title">Квартира в центре города</div>
      <div class="card-details">
        <p>Адрес: ул. Ленина, д. 10</p>
        <p>Площадь: 50 кв.м.</p>
        <p>Этаж: 5/9</p>
        <p>Комнат: 2</p>
        <p>Санузел: совмещенный</p>
      </div>
      <div class="card-price">1 500 000 руб.</div>
    </div>
  </div>
  <div class="card">
    <div class="card-image"></div>
    <div class="card-content">
      <div class="card-title">Квартира в центре города</div>
      <div class="card-details">
        <p>Адрес: ул. Ленина, д. 10</p>
        <p>Площадь: 50 кв.м.</p>
        <p>Этаж: 5/9</p>
        <p>Комнат: 2</p>
        <p>Санузел: совмещенный</p>
      </div>
      <div class="card-price">1 500 000 руб.</div>
    </div>
  </div>
  <div class="card">
    <div class="card-image"></div>
    <div class="card-content">
      <div class="card-title">Квартира в центре города</div>
      <div class="card-details">
        <p>Адрес: ул. Ленина, д. 10</p>
        <p>Площадь: 50 кв.м.</p>
        <p>Этаж: 5/9</p>
        <p>Комнат: 2</p>
        <p>Санузел: совмещенный</p>
      </div>
      <div class="card-price">1 500 000 руб.</div>
    </div>
  </div>
  <div class="card">
    <div class="card-image"></div>
    <div class="card-content">
      <div class="card-title">Квартира в центре города</div>
      <div class="card-details">
        <p>Адрес: ул. Ленина, д. 10</p>
        <p>Площадь: 50 кв.м.</p>
        <p>Этаж: 5/9</p>
        <p>Комнат: 2</p>
        <p>Санузел: совмещенный</p>
      </div>
      <div class="card-price">1 500 000 руб.</div>
    </div>
  </div>
      </SDivObjects>
    </SSection>
  );
};

export default CatalogObjects;
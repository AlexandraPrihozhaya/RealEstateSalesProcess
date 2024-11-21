import React from 'react';
import Header from '../../components/headerComponents/Header';
import Footer from '../../components/footerComponents/Footer';
import { SButton } from '../../components/requestsFormComponents/RequestForm/styled';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';

const Catalog = () => {
  return (
    <section>
      <Header />
      <Breadcrumbs
        links={[
          { path: "/", label: "Главная" },
          { path: "/catalog", label: "Каталог недвижимости" },
        ]}
      />
      <div class="search-filter-container">
  <div class="search-filter">
    <h2>Поиск недвижимости</h2>
    <form action="#" class="search-form">
      <div class="form-group">
        <label for="type">Тип недвижимости:</label>
        <select class="form-control" id="type">
          <option value="all">Все</option>
          <option value="apartment">Квартира</option>
          <option value="house">Дом</option>
          <option value="land">Участок</option>
        </select>
      </div>
      <div class="form-group">
        <label for="city">Город:</label>
        <select class="form-control" id="city">
          <option value="all">Все</option>
          <option value="minsk">Минск</option>
          <option value="vitebsk">Витебск</option>
          <option value="gomel">Гомель</option>
        </select>
      </div>
      <div class="form-group">
        <label for="price">Цена (в у.е.):</label>
        <input type="number" class="form-control" id="price" placeholder="от"/>
        <input type="number" class="form-control" id="price" placeholder="до"/>
      </div>
      <div class="form-group">
        <label for="area">Площадь (кв.м.):</label>
        <input type="number" class="form-control" id="area" placeholder="от"/>
        <input type="number" class="form-control" id="area" placeholder="до"/>
      </div>
      <div class="form-group">
        <label for="rooms">Количество комнат:</label>
        <select class="form-control" id="rooms">
          <option value="all">Все</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="form-group">
        <SButton type="submit" class="btn btn-primary">Искать</SButton>
      </div>
    </form>
  </div>
  <div class="sort-filter">
    <h2>Сортировка</h2>
    <select class="form-control">
      <option value="price-asc">Цена по возрастанию</option>
      <option value="price-desc">Цена по убыванию</option>
      <option value="area-asc">Площадь по возрастанию</option>
      <option value="area-desc">Площадь по убыванию</option>
      <option value="date-asc">Дата по возрастанию</option>
      <option value="date-desc">Дата по убыванию</option>
    </select>
  </div>
</div>
      <Footer />
    </section>
  );
};

export default Catalog;
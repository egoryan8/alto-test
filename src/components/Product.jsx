import React from 'react';

import cartIcon from '../assets/img/cart.svg';
import { numberWithSpaces } from '../utils/numberWithSpaces';

const Product = ({ name, price, imageUrl, shortDesc, availability, color }) => {
  return (
    <li className="product">
      <img className="product__image" src={imageUrl} alt="Фотография товара" />
      <div className="product__description">
        {availability ? (
          <span className="availabile">В наличии</span>
        ) : (
          <span className="not-availabile">Под заказ</span>
        )}
        <h2 className="product__name">{name}</h2>
        <div className="product__price">{numberWithSpaces(price)} &#8381;</div>
        <div className="product__color">Цвет - {color}</div>
        <div className="product__short-desc">{shortDesc}</div>
        <button className="product__btn-to-cart">
          <img src={cartIcon} alt="Иконка корзины" />В корзину
        </button>
      </div>
    </li>
  );
};

export default Product;

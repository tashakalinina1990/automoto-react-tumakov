import React from "react";
import {Link} from "react-router-dom";
import {CarPropTypes} from "../../prop-types";
import "./car-info.scss";

const CarInfo = (props) => {
  const {car} = props;

  return (
    <section className="car-info car-screen__info">
      <h1 className="car-info__title">{car.name}</h1>
      <ul className="car-info__list">
        <li className="car-info__item car-info__item--engine-type">
          <span className="car-info__text">{car.engineType}</span>
        </li>
        <li className="car-info__item car-info__item--transmission">
          <span className="car-info__text">{car.transmission}</span>
        </li>
        <li className="car-info__item car-info__item--power">
          <span className="car-info__text">{`${car.power} л.с.`}</span>
        </li>
        <li className="car-info__item car-info__item--engine-size">
          <span className="car-info__text">{`${car.engineSize} л`}</span>
        </li>
      </ul>
      <div className="car-info__price">
        <p className="car-info__cost">{`${car.price.toLocaleString(
          "ru"
        )} ₽`}</p>
        <p className="car-info__discount">{`${car.discount.toLocaleString(
          "ru"
        )} ₽`}</p>
      </div>
      <Link className="car-info__order" to="#">
        Оставить заявку
      </Link>
      <Link className="car-info__credit" to="#">
        В кредит от 11 000 ₽
      </Link>
    </section>
  );
};

CarInfo.propTypes = {
  car: CarPropTypes,
};

export default CarInfo;

import React from "react";
import {CarPropTypes} from "../../prop-types";
import "./specification.scss";

const SpecificationNames = {
  Бензин: "Бензиновый",
  Дизель: "Дизельный",
  Механика: "Механическая",
  Автомат: "Автоматическая",
  Вариатор: "Вариаторная",
  Робот: "Роботизированная",
};

const Specification = (props) => {
  const {car} = props;

  return (
    <section className="specification tabs__specification">
      <h2 className="visually-hidden">Характеристики</h2>
      <table className="specification__table">
        <tbody className="specification__tbody">
          <tr className="specification__row">
            <th className="specification__title" scrope="row">
              Трансмиссия
            </th>
            <td className="specification__value">
              {SpecificationNames[car.transmission]}
            </td>
          </tr>
          <tr className="specification__row">
            <th className="specification__title" scrope="row">
              Мощность двигателя, л.с.
            </th>
            <td className="specification__value">{car.power}</td>
          </tr>
          <tr className="specification__row">
            <th className="specification__title" scrope="row">
              Тип двигателя
            </th>
            <td className="specification__value">
              {SpecificationNames[car.engineType]}
            </td>
          </tr>
          <tr className="specification__row">
            <th className="specification__title" scrope="row">
              Привод
            </th>
            <td className="specification__value">{car.drive}</td>
          </tr>
          <tr className="specification__row">
            <th className="specification__title" scrope="row">
              Объем двигателя, л
            </th>
            <td className="specification__value">{car.engineSize}</td>
          </tr>
          <tr className="specification__row">
            <th className="specification__title" scrope="row">
              Макс. крутящий момент
            </th>
            <td className="specification__value">{`${car.torque.max}/${car.torque.revs}`}</td>
          </tr>
          <tr className="specification__row">
            <th className="specification__title" scrope="row">
              Количество цилиндров
            </th>
            <td className="specification__value">{car.cylinders}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

Specification.propTypes = {
  car: CarPropTypes,
};

export default Specification;

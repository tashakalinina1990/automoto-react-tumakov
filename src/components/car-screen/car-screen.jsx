import React, {useEffect} from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import PropTypes from "prop-types";
import Header from "../header/header";
import CarSlider from "../car-slider/car-slider";
import CarInfo from "../car-info/car-info";
import Tabs from "../tabs/tabs";
import Footer from "../footer/footer";
import {CarPropTypes} from "../../prop-types";
import {cars as carsMocks} from "../../mocks/cars";
import "./car-screen.scss";

const CarScreen = (props) => {
  const {car, onLoadCar} = props;

  useEffect(() => {
    onLoadCar(carsMocks[0]);
  }, [onLoadCar]);

  return (
    <>
      <Header />
      {car.id && (
        <main className="car-screen wrapper">
          <div className="car-screen__top">
            <CarInfo car={car} />
            <CarSlider carsImages={car.images} />
          </div>
          <Tabs car={car} />
        </main>
      )}
      <Footer />
    </>
  );
};

CarScreen.propTypes = {
  car: CarPropTypes,
  onLoadCar: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  car: store.car,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadCar(car) {
    dispatch(ActionCreator.loadCar(car));
  },
});

export {CarScreen};
export default connect(mapStateToProps, mapDispatchToProps)(CarScreen);

import React, {useState, useEffect, useCallback} from "react";
import {CarPropTypes} from "../../prop-types";
import Specification from "../specification/specification";
import Reviews from "../reviews/reviews";
import Contacts from "../contacts/contacts";
import "./tabs.scss";

const TAB_KEYCODE = 9;
const MAX_TABS = 3;

const TabsCode = {
  SPECIFICATION: 1,
  REVIEWS: 2,
  CONTACTS: 3,
};

const getActiveTabElement = (activeTab, car) => {
  switch (activeTab) {
    case TabsCode.SPECIFICATION:
      return <Specification car={car} />;
    case TabsCode.REVIEWS:
      return <Reviews />;
    case TabsCode.CONTACTS:
      return <Contacts />;
    default:
      return;
  }
};

const Tabs = (props) => {
  const {car} = props;
  const [activeTab, setActiveTab] = useState(TabsCode.SPECIFICATION);

  const HandleSpecificationButtonClick = () => {
    setActiveTab(TabsCode.SPECIFICATION);
  };

  const HandleReviewsButtonClick = () => {
    setActiveTab(TabsCode.REVIEWS);
  };

  const HandleContactsButtonClick = () => {
    setActiveTab(TabsCode.CONTACTS);
  };

  const tabKeydownHandler = useCallback(
    (evt) => {
      if (evt.keyCode === TAB_KEYCODE) {
        evt.preventDefault();

        setActiveTab(() => {
          if (activeTab === MAX_TABS) {
            return 1;
          }

          return activeTab + 1;
        });
      }
    },
    [activeTab, setActiveTab]
  );

  useEffect(() => {
    window.addEventListener("keydown", tabKeydownHandler);

    return () => {
      window.removeEventListener("keydown", tabKeydownHandler);
    };
  }, [tabKeydownHandler]);

  return (
    <div className="tabs car-screen__tabs">
      <ul className="tabs__list">
        <li className="tabs__item">
          <button
            className={`tabs__button ${
              activeTab === TabsCode.SPECIFICATION && "tabs__button--active"
            }`}
            type="button"
            onClick={HandleSpecificationButtonClick}
          >
            Характеристики
          </button>
        </li>
        <li className="tabs__item">
          <button
            className={`tabs__button ${
              activeTab === TabsCode.REVIEWS && "tabs__button--active"
            }`}
            type="button"
            onClick={HandleReviewsButtonClick}
          >
            Отзывы
          </button>
        </li>
        <li className="tabs__item">
          <button
            className={`tabs__button ${
              activeTab === TabsCode.CONTACTS && "tabs__button--active"
            }`}
            type="button"
            onClick={HandleContactsButtonClick}
          >
            Контакты
          </button>
        </li>
      </ul>
      {getActiveTabElement(activeTab, car)}
    </div>
  );
};

Tabs.propTypes = {
  car: CarPropTypes,
};

export default Tabs;

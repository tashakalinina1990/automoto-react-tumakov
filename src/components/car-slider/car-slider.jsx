import React, {useState, useEffect, useRef} from "react";
import {CarImagesPropTypes} from "../../prop-types";
import "./car-slider.scss";

const MAX_PREVIEWS = 3;
const COUNT_INACTIVE_SLIDES = 2;

const getPreviewElements = (
  maxPreviews,
  activeSlideIndex,
  previewsArray,
  altsArray
) => {
  const previewElements = [];
  let index = activeSlideIndex;

  if (!altsArray[index + COUNT_INACTIVE_SLIDES]) {
    index = altsArray.length - MAX_PREVIEWS;
  }

  for (
    let i = index;
    previewElements.length < maxPreviews && i < altsArray.length;
    i++
  ) {
    previewElements.push(
      <li className="car-slider__item" key={i}>
        <picture className="car-slider__preview-picture">
          <source
            type="image/webp"
            srcSet={`${previewsArray.webp.x1[i]} 1x, ${previewsArray.webp.x2[i]} 2x`}
          />
          <img
            className="car-slider__preview"
            src={previewsArray.jpg.x1[i]}
            srcSet={`${previewsArray.jpg.x2[i]} 2x`}
            width="128"
            height="80"
            alt={altsArray[i]}
          />
        </picture>
      </li>
    );
  }

  return previewElements;
};

const CarSlider = (props) => {
  const {carsImages} = props;
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const rightButton = useRef(null);
  const leftButton = useRef(null);

  const handleRightClick = () => {
    carsImages.alts[activeSlideIndex + 1] &&
      setActiveSlideIndex(activeSlideIndex + 1);
  };

  const handleLeftClick = () => {
    carsImages.alts[activeSlideIndex - 1] &&
      setActiveSlideIndex(activeSlideIndex - 1);
  };

  useEffect(() => {
    !carsImages.alts[activeSlideIndex + 1]
      ? (rightButton.current.disabled = true)
      : (rightButton.current.disabled = false);
    !carsImages.alts[activeSlideIndex - 1]
      ? (leftButton.current.disabled = true)
      : (leftButton.current.disabled = false);
  }, [activeSlideIndex, carsImages]);

  return (
    <section className="car-slider car-screen__slider">
      <h2 className="visually-hidden">Фотографии Марпех 11</h2>
      <picture className="car-slider__picture car-slider__picture--new-model">
        <source
          type="image/webp"
          srcSet={`${carsImages.desktop.webp.x1[activeSlideIndex]} 1x, 
          ${carsImages.desktop.webp.x2[activeSlideIndex]} 2x`}
        />
        <img
          className="car-slider__main-image"
          src={carsImages.desktop.jpg.x1[activeSlideIndex]}
          srcSet={`${carsImages.desktop.jpg.x2[activeSlideIndex]} 2x`}
          width="600"
          height="375"
          alt={carsImages.alts[activeSlideIndex]}
        />
      </picture>
      <div className="car-slider__controls">
        <button
          className="car-slider__control car-slider__control--left"
          type="button"
          ref={leftButton}
          onClick={handleLeftClick}
        >
          <span className="visually-hidden">Листать слайдер влево</span>
        </button>
        <ul className="car-slider__images">
          {getPreviewElements(
            MAX_PREVIEWS,
            activeSlideIndex,
            carsImages.previews,
            carsImages.alts
          )}
        </ul>
        <button
          className="car-slider__control car-slider__control--right"
          type="button"
          ref={rightButton}
          onClick={handleRightClick}
        >
          <span className="visually-hidden">Листать слайдер вправо</span>
        </button>
      </div>
    </section>
  );
};

CarSlider.propTypes = {
  carsImages: CarImagesPropTypes,
};

export default CarSlider;

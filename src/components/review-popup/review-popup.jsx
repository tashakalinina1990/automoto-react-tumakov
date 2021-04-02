import React, {useState, useCallback, useEffect, useRef} from "react";
import moment from "moment";
import PropTypes from "prop-types";
import {CarReviewsPropTypes} from "../../prop-types";
import {MAX_RATING} from "../reviews/reviews";
import "./review-popup.scss";

const ESC_KEYCODE = 27;

const getRatingRadioElements = (
  maxRating,
  ratingValue,
  handleChange,
  ratingHover,
  handleMouseEnter,
  handleMouseLeave
) => {
  const ratingElements = [];
  let className;

  for (let i = 1; i <= maxRating; i++) {
    ratingValue >= i || ratingHover >= i
      ? (className = "active")
      : (className = "inactive");

    ratingElements.push(
      <React.Fragment key={i}>
        <label
          className={`review-popup__rating review-popup__rating--${className}`}
          htmlFor={`review-popup__rating-${i}`}
          data-value={i}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className="visually-hidden">{`Рейтинг – ${i}`}</span>
        </label>
        <input
          className="visually-hidden"
          id={`review-popup__rating-${i}`}
          type="radio"
          name="review-popup__rating"
          value={i}
          onChange={handleChange}
        />
      </React.Fragment>
    );
  }

  return ratingElements;
};

const ReviewPopup = (props) => {
  const {carReviews, setPopupShown, onSaveReview} = props;
  const [authorValue, setAuthorValue] = useState(
    localStorage.getItem("author")
  );
  const [plusValue, setPlusValue] = useState(localStorage.getItem("plus"));
  const [minusValue, setMinusValue] = useState(localStorage.getItem("minus"));
  const [ratingValue, setRatingValue] = useState(
    localStorage.getItem("rating")
  );
  const [commentValue, setCommentValue] = useState(
    localStorage.getItem("comment")
  );
  const [ratingHover, setRatingHover] = useState(0);
  const [hasAuthorError, setAuthorError] = useState(false);
  const [hasCommentError, setCommentError] = useState(false);
  const popupElement = useRef(null);

  const handleAuthorChange = (evt) => {
    setAuthorValue(evt.target.value);
    setAuthorError(false);
  };

  const handlePlusChange = (evt) => {
    setPlusValue(evt.target.value);
  };

  const handleMinusChange = (evt) => {
    setMinusValue(evt.target.value);
  };

  const handleRatingChange = (evt) => {
    setRatingValue(evt.target.value);
  };

  const handleCommentChange = (evt) => {
    setCommentValue(evt.target.value);
    setCommentError(false);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!authorValue) {
      setAuthorError(true);

      return;
    }

    if (!commentValue) {
      setCommentError(true);

      return;
    }

    onSaveReview({
      id: carReviews.length + 1,
      author: authorValue,
      plus: plusValue,
      minus: minusValue,
      comment: commentValue,
      rating: +ratingValue,
      date: moment().format(),
    });

    localStorage.setItem("author", "");
    localStorage.setItem("plus", "");
    localStorage.setItem("minus", "");
    localStorage.setItem("rating", "");
    localStorage.setItem("comment", "");

    setPopupShown(false);
  };

  const handleRatingMouseEnter = (evt) => {
    setRatingHover(evt.target.dataset.value);
  };

  const handleRatingMouseLeave = () => {
    setRatingHover(0);
  };

  const handleCloseClick = () => {
    setPopupShown(false);
  };

  const escKeydownHandler = useCallback(
    (evt) => {
      evt.keyCode === ESC_KEYCODE && setPopupShown(false);
    },
    [setPopupShown]
  );

  const windowClickHandler = useCallback(
    (evt) => {
      popupElement.current &&
        !popupElement.current.contains(evt.target) &&
        setPopupShown(false);
    },
    [setPopupShown]
  );

  useEffect(() => {
    window.addEventListener("keydown", escKeydownHandler);
    window.addEventListener("click", windowClickHandler);

    return () => {
      window.removeEventListener("keydown", escKeydownHandler);
      window.removeEventListener("click", windowClickHandler);
    };
  }, [escKeydownHandler, windowClickHandler]);

  useEffect(() => {
    localStorage.setItem("author", authorValue);
    localStorage.setItem("plus", plusValue);
    localStorage.setItem("minus", minusValue);
    localStorage.setItem("rating", ratingValue);
    localStorage.setItem("comment", commentValue);
  }, [authorValue, plusValue, minusValue, commentValue, ratingValue]);

  return (
    <section className="review-popup">
      <div className="review-popup__wrap" ref={popupElement}>
        <h2 className="review-popup__title">Оставить отзыв</h2>
        <form className="review-popup__form" onSubmit={handleSubmit}>
          <div className="review-popup__form-wrap">
            <div className="review-popup__left-side">
              <label className="visually-hidden" htmlFor="review-popup__author">
                Напишите ваше имя
              </label>
              <span
                className={`review-popup__error 
                  ${hasAuthorError && "review-popup__error--enable"}
                `}
              >
                Пожалуйста, заполните поле
              </span>
              <input
                className={`
                  review-popup__input 
                  review-popup__input--author 
                  review-popup__input--required 
                  ${hasAuthorError && "review-popup__input--error"}
                `}
                id="review-popup__author"
                type="text"
                name="review-popup__author"
                placeholder="Имя"
                defaultValue={authorValue}
                onChange={handleAuthorChange}
                autoFocus
              />
              <label className="visually-hidden" htmlFor="review-popup__plus">
                Опишите достоинства товара
              </label>
              <input
                className="review-popup__input review-popup__input--plus"
                id="review-popup__plus"
                type="text"
                name="review-popup__plus"
                placeholder="Достоинства"
                defaultValue={plusValue}
                onChange={handlePlusChange}
              />
              <label className="visually-hidden" htmlFor="review-popup__minus">
                Опишите недостатки товара
              </label>
              <input
                className="review-popup__input review-popup__input--minus"
                id="review-popup__minus"
                type="text"
                name="review-popup__minus"
                placeholder="Недостатки"
                defaultValue={minusValue}
                onChange={handleMinusChange}
              />
            </div>
            <div className="review-popup__right-side">
              <div className="review-popup__rating-wrap">
                <span className="review-popup__rating-label">
                  Оцените товар:
                </span>
                {getRatingRadioElements(
                  MAX_RATING,
                  ratingValue,
                  handleRatingChange,
                  ratingHover,
                  handleRatingMouseEnter,
                  handleRatingMouseLeave
                )}
              </div>
              <label className="" htmlFor="review-popup__comment">
                Оставьте комментарий
              </label>
              <span
                className={`review-popup__error review-popup__error--comment 
                  ${hasCommentError && "review-popup__error--enable"}
                `}
              >
                Пожалуйста, заполните поле
              </span>
              <textarea
                className={`
                  review-popup__input 
                  review-popup__input--comment
                  review-popup__input--required 
                  ${hasCommentError && "review-popup__input--error"}`}
                name="review-popup__comment"
                id="review-popup__comment"
                placeholder="Комментарий"
                defaultValue={commentValue}
                onChange={handleCommentChange}
              ></textarea>
            </div>
          </div>
          <button className="review-popup__submit" type="submit">
            Оставить отзыв
          </button>
        </form>
        <button
          className="review-popup__close"
          type="button"
          onClick={handleCloseClick}
        >
          <span className="visually-hidden">Закрыть окно</span>
        </button>
      </div>
    </section>
  );
};

ReviewPopup.propTypes = {
  carReviews: CarReviewsPropTypes,
  setPopupShown: PropTypes.func.isRequired,
};

export default ReviewPopup;

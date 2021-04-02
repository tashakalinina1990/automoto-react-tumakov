import {ActionType} from "./action";

const initialState = {
  car: {},
  carReviews: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_CAR:
      return Object.assign({}, state, {
        car: action.payload,
      });

    case ActionType.LOAD_CAR_REVIEWS:
      return Object.assign({}, state, {
        carReviews: action.payload,
      });

    case ActionType.SAVE_REVIEW:
      return Object.assign({}, state, {
        carReviews: [...state.carReviews, action.payload],
      });

    default:
      return state;
  }
};

export const ActionType = {
  LOAD_CAR: "LOAD_CAR",
  LOAD_CAR_REVIEWS: "LOAD_CAR_REVIEWS",
  SAVE_REVIEW: "SAVE_REVIEW",
};

export const ActionCreator = {
  loadCar: (car) => ({
    type: ActionType.LOAD_CAR,
    payload: car,
  }),
  loadCarReviews: (reviews) => ({
    type: ActionType.LOAD_CAR_REVIEWS,
    payload: reviews,
  }),
  saveReview: (review) => ({
    type: ActionType.SAVE_REVIEW,
    payload: review,
  }),
};

import PropTypes from "prop-types";

export const CarImagesPropTypes = PropTypes.shape({
  desktop: PropTypes.shape({
    jpg: PropTypes.shape({
      x1: PropTypes.arrayOf(PropTypes.string),
      x2: PropTypes.arrayOf(PropTypes.string),
    }),
    webp: PropTypes.shape({
      x1: PropTypes.arrayOf(PropTypes.string),
      x2: PropTypes.arrayOf(PropTypes.string),
    }),
  }),
  previews: PropTypes.shape({
    jpg: PropTypes.shape({
      x1: PropTypes.arrayOf(PropTypes.string),
      x2: PropTypes.arrayOf(PropTypes.string),
    }),
    webp: PropTypes.shape({
      x1: PropTypes.arrayOf(PropTypes.string),
      x2: PropTypes.arrayOf(PropTypes.string),
    }),
  }),
  alts: PropTypes.arrayOf(PropTypes.string),
});

export const CarPropTypes = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  images: CarImagesPropTypes,
  price: PropTypes.number,
  discount: PropTypes.number,
  transmission: PropTypes.string,
  power: PropTypes.number,
  engineType: PropTypes.string,
  drive: PropTypes.string,
  engineSize: PropTypes.number,
  torque: PropTypes.shape({
    max: PropTypes.number,
    revs: PropTypes.number,
  }),
  cylinders: PropTypes.number,
});

export const CarReviewsPropTypes = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.number,
    author: PropTypes.string,
    plus: PropTypes.string,
    minus: PropTypes.string,
    comment: PropTypes.string,
    rating: PropTypes.number,
    date: PropTypes.string,
  })
);

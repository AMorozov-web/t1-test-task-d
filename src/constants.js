import PropTypes from 'prop-types';

const DEFAULT_LENGTH = 0.4;
const DEFAULT_ANGLE = 27;
const DEFAULT_TIME = 1.26;
const DEFAULT_ATTRACTION = 9.81;

const PI_NUMBER = 103993 / 33102;

const inputConfig = {
  ATTRACTION: {
    LABEL: `Сила притяжения в м/с2`,
    MIN: 0,
    DEFAULT: 9.81,
    MAX: 10,
    STEP: 0.01,
  },
  PLUNGER_LENGTH: {
    LABEL: `Длина подвеса маятника в метрах`,
    MIN: 0.1,
    DEFAULT: 0.4,
    MAX: 0.4,
    STEP: 0.01,
  },
  STARTING_ANGLE: {
    LABEL: `Высота исходной позиции в градусах`,
    MIN: 10,
    DEFAULT: 27,
    MAX: 45,
    STEP: 1,
  },
};

const configValidation = PropTypes.shape({
  LABEL: PropTypes.string.isRequired,
  MIN: PropTypes.number.isRequired,
  DEFAULT: PropTypes.number.isRequired,
  MAX: PropTypes.number.isRequired,
  STEP: PropTypes.number.isRequired,
}).isRequired;

export {
  DEFAULT_ANGLE,
  DEFAULT_LENGTH,
  DEFAULT_TIME,
  DEFAULT_ATTRACTION,
  PI_NUMBER,
  inputConfig,
  configValidation,
};

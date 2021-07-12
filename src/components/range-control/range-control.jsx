import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import {configValidation} from '../../constants';

const RangeWrapper = styled.label`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 20px;
  width: 70%;
  min-height: 50px;
  margin: 0;
  font-size: 16px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const Input = styled.input`
  grid-column: 1/4;
  grid-row: 2/-1;
  width: 100%;
  height: 5px;
  color: #ffffff;
  background-color: transparent;
  background-image: url('../img/chalk.png');
  border: none;
  border-radius: 3px;
  -webkit-appearance: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 27px;
    width: 9px;
    border-radius: 3px;
    background-color: transparent;
    background-image: url('../img/chalk.png');
    cursor: pointer;
  }

  &::-moz-range-thumb {
    height: 27px;
    width: 9px;
    border-radius: 3px;
    background-color: transparent;
    background-image: url('../img/chalk.png');
    cursor: pointer;
  }
`;

const Span = styled.span`
  grid-column: 1/3;
  grid-row: 1/2;
  display: block;
  min-height: 50px;
`;

const Value = styled.span`
  grid-column: 3/4;
  grid-row: 1/2;
  display: block;
  min-height: 50px;
`;

const RangeControl = ({selector, action, inputConfig}) => {
  const value = useSelector(selector);
  const dispatch = useDispatch();

  const handleChangeValue = (evt) => {
    const targetValue = evt.target.value;

    dispatch(action(targetValue));
  };

  return (
    <RangeWrapper>
      <Span>
        {inputConfig.LABEL}
      </Span>
      <Value>
        {value}
      </Value>
      <Input
        type="range"
        defaultValue={inputConfig.DEFAULT}
        min={inputConfig.MIN}
        max={inputConfig.MAX}
        step={inputConfig.STEP}
        onChange={handleChangeValue}/>
    </RangeWrapper>
  );
};

RangeControl.propTypes = {
  inputConfig: configValidation,
  action: PropTypes.func.isRequired,
  selector: PropTypes.func.isRequired,
};

export {RangeControl};

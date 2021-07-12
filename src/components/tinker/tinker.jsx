import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import styled, {css, keyframes} from 'styled-components';
import {DEFAULT_TIME} from '../../constants';
import {selectAngle, selectAttraction, selectLength} from '../../store/selector/selector';
import {getTinkerInterval} from '../../utils';

const animation = (props) => keyframes`
  0% {
    transform: rotate(${props.angle}deg);
  }
  50% {
    transform: rotate(-${props.angle}deg);
  }
  100% {
    transform: rotate(${props.angle}deg);
  }
`;

const swing = (props) =>
  css`
    ${animation} ease-in-out ${props.animationTime}s infinite alternate;
  `;

const TinkerWrapper = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 500px;
  margin-bottom: 45px;
`;

const TinkerBase = styled.div`
  width: 100px;
  height: 15px;
  background-color: transparent;
  background-image: url('../img/chalk.png');
  border-radius: 10px;
`;

const TinkerPlunger = styled.div.attrs((props) => ({
  style: {
    height: props.plungerLengthInMeters * 1000,
    transform: `rotate(-${props.angle}deg)`
  },
}))`
  position: relative;
  top: 7px;
  left: calc(50% - 2px);
  width: 4px;
  background-color: transparent;
  background-image: url('../img/chalk.png');
  border-radius: 10px;
  transition: all 0,5s;
  transform-origin: 100% 0%;
  animation: ${swing};
`;

const TinkerLoad = styled.div`
  position: absolute;
  bottom: -88px;
  left: -43px;
  width: 90px;
  height: 90px;
  background-color: transparent;
  background-image: url('../img/chalk.png');
  border-radius: 50%;
`;

const Tinker = () => {
  const [time, setTime] = useState(DEFAULT_TIME);

  const length = useSelector(selectLength);
  const angle = useSelector(selectAngle);
  const attraction = useSelector(selectAttraction);

  useEffect(() => {
    const newTime = getTinkerInterval(length, attraction);

    setTime(newTime);
  }, [length, attraction]);

  return (
    <TinkerWrapper>
      <TinkerBase>
        <TinkerPlunger plungerLengthInMeters = {length} angle={angle} animationTime={time}>
          <TinkerLoad>
          </TinkerLoad>
        </TinkerPlunger>
      </TinkerBase>
    </TinkerWrapper>
  );
};

export {Tinker};

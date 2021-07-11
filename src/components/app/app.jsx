import React from 'react';
import {AppContainer} from '../app-container/app-container';
import {MemoTitle} from '../title/title';
import {Tinker} from '../tinker/tinker';
import {Controls} from '../controls/controls';
import {RangeControl} from '../range-control/range-control';
import {inputConfig} from '../../constants';
import {setAngle, setAttraction, setLength} from '../../store/action/action';
import {selectAngle, selectAttraction, selectLength} from '../../store/selector/selector';

const App = () => {

  return (
    <AppContainer>
      <MemoTitle>
        Маятник
      </MemoTitle>
      <Tinker />
      <Controls>
        <RangeControl selector={selectAttraction} action={setAttraction} inputConfig={inputConfig.ATTRACTION} />
        <RangeControl selector={selectLength} action={setLength} inputConfig={inputConfig.PLUNGER_LENGTH} />
        <RangeControl selector={selectAngle} action={setAngle} inputConfig={inputConfig.STARTING_ANGLE} />
      </Controls>
    </AppContainer>
  );
};

export {App};

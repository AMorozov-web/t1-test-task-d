import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ControlsContainer = styled.div`
  grid-column: 2/-1;
  grid-row: 2/3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  font-size: 45px;
  text-align: center;
`;

const Controls = ({children}) => {

  return (
    <ControlsContainer>
      {children}
    </ControlsContainer>
  );
};

Controls.propTypes = {
  children: PropTypes.node.isRequired,
};

export {Controls};

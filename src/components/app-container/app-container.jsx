import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, fit-content);
  column-gap: 40px;
  min-width: 320px;
  max-width: 1130px;
  margin: 0 auto;
  padding-top: 40px;
`;

const AppContainer = ({children}) => {

  return (
    <Container>
      {children}
    </Container>
  );
};

AppContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export {AppContainer};

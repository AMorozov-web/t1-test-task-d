import React, {memo} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TitleElement = styled.h1`
  grid-column: 1/-1;
  grid-row: 1/2;
  margin: 0;
  margin-bottom: 60px;
  font-size: 45px;
  text-align: center;
`;

const Title = ({children}) => {

  return (
    <TitleElement>
      {children}
    </TitleElement>
  );
};

const MemoTitle = memo(Title);

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

export {MemoTitle};

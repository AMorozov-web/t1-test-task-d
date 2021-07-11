import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import {mainReducer} from './store/reducer/reducer';
import {createGlobalStyle} from 'styled-components';
import {normalize} from 'styled-normalize';
import {App} from './components/app/app';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: 'LC-Chalk';
    font-display: swap;
    src: local('LC-Chalk'),
    url('../fonts/LC-Chalk.woff2') format('woff2'),
    url('../fonts/LC-Chalk.woff2') format('woff');
    font-weight: 500;
    font-style: normal;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    font-family: LC-Chalk, Arial ,sans-serif;
    color: #ffffff;
    background-color: #797979;
    background-image: url('../img/blackboard.jpg');
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const store = configureStore({
  reducer: mainReducer,
});

ReactDOM.render(
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>,
    document.querySelector(`#app`)
);

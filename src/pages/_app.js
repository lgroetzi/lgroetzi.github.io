import React from 'react';
import NextApp from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Context as ResponsiveContext } from 'react-responsive'

import "../global.css"

const theme = {}

export default class App extends NextApp {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles);
    this.setState({ width: window.innerWidth });
  }

  render() {
    const { Component, pageProps } = this.props;
    try {
      window
    } catch (e) {
      return null;
    }

    return (
      <ResponsiveContext.Provider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ResponsiveContext.Provider>
    );
  }
}

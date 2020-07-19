import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';


class CustomDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Cabin:wght@700&family=Open+Sans&family=Open+Sans:wght@700&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cabin:wght@700&family=Open+Sans&family=Open+Sans:wght@700&display=swap"
                onLoad="this.media='all'"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default CustomDocument;

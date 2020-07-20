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
          <link rel="icon" type="image/png" sizes="16x16" href="/img/icon-16.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/img/icon-32.png" />
          <link rel="icon" type="image/png" sizes="64x64" href="/img/icon-64.png" />

          <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
          <script type="text/javascript" src="/js/lazy-line-painter.min.js"></script>
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

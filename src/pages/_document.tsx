import React from 'react';

import Document, { DocumentContext } from 'next/document';

import { ServerStyleSheet } from 'styled-components';

interface Data {
  styles: JSX.Element;
  html: string;
  head?: JSX.Element[];
}

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<Data> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}

export default MyDocument;

import React from "react"
import Document, { Html, Head, Main, NextScript } from "next/document"
import { GA_TRACKING_ID } from '../lib/gtag'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8"/>
          <meta name="theme-color" content="#000000"/>
          <link rel="shortcut icon" href="/img/brand/favicon.ico"/>
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/img/brand/apple-icon.png"
          />
          {/* Google Analytics */}
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });`,
              }}
            />
          </>
        </Head>
        <body className="text-blueGray-700 antialiased">
        <div id="page-transition"></div>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    )
  }
}

export default MyDocument

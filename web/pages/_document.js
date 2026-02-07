import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const isProd = process.env.NODE_ENV === 'production'
  const basePath = isProd ? '/shalini' : ''

  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href={`${basePath}/favicon.ico`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href={`${basePath}/favicon.ico?v=2`} sizes="any" />
        <link rel="shortcut icon" href={`${basePath}/favicon.ico?v=2`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

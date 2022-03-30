import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

const MyDocument = () => {
  async function getInitialProps(context: DocumentContext) {
    const initialProps = await Document.getInitialProps(context)
    return { ...initialProps }
  }

  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )

}

export default MyDocument
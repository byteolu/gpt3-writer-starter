import { Html, Head, Main, NextScript } from 'next/document'



export default function Document() {
  return (
    <Html>
      <Head>
      
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-2TRKKH0G14"></script>
        <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)};
        gtag('js', new Date());

        gtag('config', 'G-2TRKKH0G14');
</script>
        <meta property="og:title" content="Olu's Web App" key="title"/>
        <meta property="og:description" content="Build With Me!" key="description"/>
        <meta
          property="og:image"
          content="https://cdn.buildspace.so/courses/gpt3-writer/project-og.jpg"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

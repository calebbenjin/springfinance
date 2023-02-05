import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    return (
      <Html>
        <Head>
          <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
          <meta name="google" content="notranslate" key="notranslate" />
          <link rel="icon" sizes="96x96" href="/favicons/favicon.ico" />
          <link href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css" rel="stylesheet" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />



          <link
          href="/static/favicons/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/static/favicons/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/static/favicons/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link
          color="#4a9885"
          href="/static/favicons/safari-pinned-tab.svg"
          rel="mask-icon"
        />
        <meta content="#ffffff" name="theme-color" />
        <meta content="#ffffff" name="msapplication-TileColor" />
        <meta
          content="/static/favicons/browserconfig.xml"
          name="msapplication-config"
        />
        <meta content="14d2e73487fa6c71" name="yandex-verification" />
        <meta
          content="eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw"
          name="google-site-verification"
        />

          <link rel="shortcut icon" href="/public/favicon.ico" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Managing your money through Internet Banking is quick and secure - and it only take a few simple steps to register. You can do things like pay people, check your balance and manage bills, standing orders and direct debits." />

          {/*<!-- Google / Search Engine Tags -->*/}
          <meta itemProp="name" content="Spring Financial Bank" />
          <meta itemProp="description" content="Our banking accounts give you a great range of features for your daily needs at all stages of your life." />
          <meta
            itemProp="image"
            content="https://res.cloudinary.com/calebbenjin/image/upload/v1666225016/Screenshot_145_yjklcj.png"
          />

          {/*<!-- Facebook Meta Tags -->*/}
          <meta property="og:title" content="Spring Financial Bank" />
          <meta property="og:description" content="Our banking accounts give you a great range of features for your daily needs at all stages of your life." />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/calebbenjin/image/upload/v1666225016/Screenshot_145_yjklcj.png"
          />
          <meta property="og:url" content="https://springfinancialbank.vercel.app" />
          <meta property="og:type" content="website" />

          {/*<!-- Twitter Meta Tags -->*/}
          <meta name="twitter:title" content="Spring Financial Bank" />
          <meta name="twitter:description" content="Our banking accounts give you a great range of features for your daily needs at all stages of your life." />
          <meta
            name="twitter:image"
            content="https://res.cloudinary.com/calebbenjin/image/upload/v1666225016/Screenshot_145_yjklcj.png"
          />
          <meta name="twitter:card" content="summary_large_image" />

          <meta
            property="og:image"
            content="https://res.cloudinary.com/calebbenjin/image/upload/v1666225016/Screenshot_145_yjklcj.png"
          ></meta>
          <script src="//code.tidio.co/qlnekkboikgbugqbtip9lpdnicdvntx2.js" async></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="modal-root"></div>
        </body>
      </Html>
    )
  }
}

export default MyDocument

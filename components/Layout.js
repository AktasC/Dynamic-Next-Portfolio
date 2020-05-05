import Head from "next/head";
import styles from "./Layout.module.css";
import Navbar from "./Navbar";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Cebrail Aktas";
export const siteTitle = "Site portfolio avec SSR créé avec NextJS";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Simple portfolio avec SSR créé avec NextJS"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"
        />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/pp.jpeg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/pp.jpeg"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
          </>
        )}
      </header>
      <br />
      <Navbar />
      <br />
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Retour à l'accueil</a>
          </Link>
        </div>
      )}
    </div>
  );
}

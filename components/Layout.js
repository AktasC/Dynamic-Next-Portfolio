import Head from "next/head";
import styles from "./Layout.module.css";
import Navbar from "./Navbar";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { Button } from "react-bootstrap";

const name = "AktasC";
export const siteTitle = "Portfolio NextJS Dynamique - SSR✅ - jQuery❌";

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
          )}.png?theme=dark&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
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
              alt="NextJS Logo"
              src="/nextjs.png"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
            />
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  alt="NextJS Logo"
                  src="/nextjs.png"
                  width="85"
                  height="50"
                  className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                />
              </a>
            </Link>
          </>
        )}
      </header>
      <Navbar />
      <br />
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <Button>← Accueil</Button>
          </Link>
        </div>
      )}
    </div>
  );
}

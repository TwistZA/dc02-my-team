import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Team Page Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <img src="./photo1.png"></img>CARD
          </div>
          <div className={styles.card}>
            <img src="./photo2.png"></img>CARD
          </div>
          <div className={styles.card}>
            <img src="./photo3.png"></img>CARD
          </div>
          <div className={styles.card}>
            <img src="./photo4.png"></img>CARD
          </div>
          <div className={styles.card}>
            <img src="./photo5.png"></img>CARD
          </div>
          <div className={styles.card}>
            <img src="./photo6.png"></img>CARD
          </div>
        </div>
      </main>

      <footer className={styles.footer}>TwistZA @ DevChallenges.io</footer>
    </div>
  );
}

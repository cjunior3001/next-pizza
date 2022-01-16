import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant Tijuca</title>
        <meta name="Pizza na Tijuca" content="Best Pizza Tijuca" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList />
    </div>
  );
}

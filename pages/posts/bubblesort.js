import Head from "next/head";
import Layout from "../../components/Layout";
import Bubble from "../../components/Bubble";

function BubbleSort() {
  return (
    <Layout>
      <Head>
        <title>The BubbleSort problem</title>
      </Head>
      <h2>The BubbleSort problem</h2>
      <br />
      <p>
        Le "bubble sort" ou tri à bulles est un algorithme de tri simple à
        comprendre et à mettre en place.
        <br />
        Cet algorithme consiste à répétitivement comparer les éléments
        consécutifs d'un tableau et les permuter si nécessaire.
        <br />
        Souvent enseigné car son principe est simple, son utilisation pratique
        reste quasi nulle en raison de sa lenteur.
      </p>
      <br />
      <Bubble />
    </Layout>
  );
}
export default BubbleSort;

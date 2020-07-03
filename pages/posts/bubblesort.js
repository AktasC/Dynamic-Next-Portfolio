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
        Le BubbleSort est un algorithme de tri simple à comprendre et à mettre
        en place.
      </p>
      <br />
      <Bubble />
    </Layout>
  );
}
export default BubbleSort;

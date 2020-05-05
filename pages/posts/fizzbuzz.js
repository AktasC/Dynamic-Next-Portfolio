import Head from "next/head";
import Layout from "../../components/Layout";
import dynamic from "next/dynamic";

const Fizz = dynamic(() => import("../../components/Fizz"), { ssr: false });

function FizzBuzz() {
  return (
    <Layout>
      <Head>
        <title>The FizzBuzz problem</title>
      </Head>
      <h2>The FizzBuzz problem</h2>
      <br />
      <p>
        Le "Fizzbuzz" est un exercice figurant parmi les plus communs demandés
        lors d'entretiens pour un poste de développeur (junior en majorité) et
        semble poser problème pour certains.
        <br />
        <br />
        L'exercice est "simple", il est demandé de remplacer l'entier N par :
        <br />- <b>Fizz</b> lorsque ce dernier est divisible par <b>3</b>
        <br />- <b>Buzz</b> lorsqu'il est divisible par <b>5</b>
        <br />- <b>FizzBuzz</b> lorsque divisible par <b>3 et 5</b>.
      </p>
      <br />
      <Fizz />
    </Layout>
  );
}
export default FizzBuzz;

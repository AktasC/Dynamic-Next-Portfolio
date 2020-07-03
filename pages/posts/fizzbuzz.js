import Button from "react-bootstrap";
import Fizz from "../../components/Fizz";
import Head from "next/head";
import Layout from "../../components/Layout";
import React, { useState } from "react";

function FizzBuzz() {
  const [theme, setTheme] = useState("");
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
      <div className="cases">
        <div className="case">N</div>
        <div className="case Fizz">Fizz</div>
        <div className="case Buzz">Buzz</div>
        <div className="case FizzBuzz">FizzBuzz</div>
      </div>
      <div>
        <br />
        <h4>Thèmes à disposition </h4>
        <Button onClick={() => setTheme("Eighties")} variant="danger">
          Eighties
        </Button>{" "}
        <Button onClick={() => setTheme("Midnight")} variant="warning">
          Midnight
        </Button>{" "}
        <Button onClick={() => setTheme("Oceanic")} variant="primary">
          Oceanic
        </Button>{" "}
        <Button onClick={() => setTheme("")} variant="light">
          Reset
        </Button>{" "}
        <br />
      </div>
      <br />
      <Fizz theme={theme} />
    </Layout>
  );
}

export default FizzBuzz;

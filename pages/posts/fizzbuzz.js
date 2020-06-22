import $ from "jquery";
import Head from "next/head";
import Layout from "../../components/Layout";
import dynamic from "next/dynamic";
import { Button } from "react-bootstrap";

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
      <div className="cases">
        <div className="case">N</div>
        <div className="case Fizz">Fizz</div>
        <div className="case Buzz">Buzz</div>
        <div className="case FizzBuzz">FizzBuzz</div>
      </div>
      <div>
        <br />
        <h4>Thèmes à disposition </h4>
        <Button id="Eighties" variant="danger">
          Eighties
        </Button>{" "}
        <Button id="Midnight" variant="warning">
          Midnight
        </Button>{" "}
        <Button id="Oceanic" variant="primary">
          Oceanic
        </Button>{" "}
        <Button id="Reset" variant="light">
          Reset
        </Button>{" "}
        <br />
      </div>
      <br />
      <Fizz />
    </Layout>
  );
}

// jQuery is awful and lovely at the same time
// But since I'm feeling lazy, it's pretty handy

if (process.browser) {
  $("#Reset").click(function () {
    $(".case").css("background-color", "#900c3f");
    $(".Fizz").css("background-color", "#c70039");
    $(".Buzz").css("background-color", "#ff5733");
    $(".FizzBuzz").css("background-color", "#ffc30f");
  });

  $("#Eighties").click(function () {
    $(".case").css("background-color", "#8338ec");
    $(".Fizz").css("background-color", "#ff006e");
    $(".Buzz").css("background-color", "#fb5607");
    $(".FizzBuzz").css("background-color", "#ffbe0b");
  });

  $("#Midnight").click(function () {
    $(".case").css("background-color", "#f94144");
    $(".Fizz").css("background-color", "#f8961e");
    $(".Buzz").css("background-color", "#90be6d");
    $(".FizzBuzz").css("background-color", "#577590");
  });

  $("#Oceanic").click(function () {
    $(".case").css("background-color", "#ade8f4");
    $(".Fizz").css("background-color", "#48cae4");
    $(".Buzz").css("background-color", "#0096c7");
    $(".FizzBuzz").css("background-color", "#023e8a");
  });
}

export default FizzBuzz;

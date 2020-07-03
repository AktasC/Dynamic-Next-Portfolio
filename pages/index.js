import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2>Bienvenue !</h2>
        <p>
          Dans la famille "<i>découverte de nouvelles technos</i>" je vous
          propose <b>NextJS</b> !<br />
          Next est un framework FOSS (Open Source & Gratuit) basé sur Vue.
        </p>
        <p>
          Commencé avec le tutoriel officiel de{" "}
          <a href="https://nextjs.org/learn">Next.js</a>, ce projet / site m'a
          rapidement redonné goût au développement front-end de par sa courbe de
          d'apprentissage et sa documentation. <br />
          <br />
          Ce site a pour objectif de démontrer quelques unes de mes compétences
          en développement web, domaine dans lequel je poursuis mes études.
          <br />
          <small>
            La création / mise en place d'un site dynamique et adaptable, pour
            ne citer que ces derniers, par exemple.
          </small>
          <br />
          <br />
          Le site utilise le <b>Server Side Rendering</b>, ce qui permet de
          renvoyer une version HTML <b>préinterprêtée par le serveur</b> au
          client.
          <br />
          Cela permet d'obtenir un site dont l'essentiel est disponible en un
          clin d'oeil même si Javascript est désactivé dans votre navigateur 😉.
          <br />
        </p>
      </section>
    </Layout>
  );
}

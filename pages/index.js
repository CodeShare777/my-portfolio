import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title> Farid Sheikh </title>
        <meta
          name='description'
          content='I’m a lead developer, specializing in infrastructure and backend development.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>
      <Main />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

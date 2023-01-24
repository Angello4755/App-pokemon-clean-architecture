import { FC } from "react";
import Head from "next/head";
import { Props } from "./Props";
import { Navbar } from "../ui";

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
  const titleApp: string = title || "Pokemon App";

  return (
    <>
      <Head>
        <title> {titleApp} </title>
        <meta name="author" content="Angello Arredondo"></meta>
        <meta
          name="description"
          content={`Informacion sobre el pokémon ${titleApp}`}
        />
        <meta name="keywords" content={`${titleApp}, pokemon, pokedex`} />
        <meta
          property="og:title"
          content={`Informacion sobre el Pokemon ${titleApp}`}
        />
        <meta
          property="og:description"
          content={`Esta es la pagina ${titleApp}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <Navbar />
      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};

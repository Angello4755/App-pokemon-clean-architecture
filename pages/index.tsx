import { ReactElement } from "react";
import { Layout } from "../components/layouts/";
import { GetStaticProps } from "next";
import { Pokemon, ProviderDetail } from "../core/entity/interfaces";
import { ListPokemon, CardPokemon } from "../components/pokemon";
import { PokemonRepositoryInPokeApi } from "../infrastructure/repository";
import GetPokemonById from "../core/useCase/getPokemonById";
import GetPokemonesByLimit from "../core/useCase/getPokemonesByLimit";

interface Props {
  pokemones: Pokemon[];
}

export default function HomePage(props: Props) {
  const { pokemones } = props;

  const dataPokemons = pokemones.map((pokemon, i) => ({
    ...pokemon,
    id: `${i + 1}`,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));
  return <ListPokemon listPokemon={dataPokemons} />;
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="App Angello">{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const repo = new PokemonRepositoryInPokeApi();
  const getPokemonesByLimit = new GetPokemonesByLimit(repo);
  const pokemones = await getPokemonesByLimit.execute(150);
  return {
    props: {
      pokemones,
    },
  };
};

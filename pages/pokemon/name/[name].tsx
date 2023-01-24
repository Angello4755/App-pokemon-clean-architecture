import React from "react";
import { Layout } from "../../../components/layouts";
import { GetStaticProps, NextPage } from "next";
import {
  PokemonApi,
} from "../../../core/entity/interfaces/pokemon-full";
import {
  Card,
  Grid,
  Row,
  Text,
} from "@nextui-org/react";
import { DetailPokemon } from "../../../components/pokemon";
import FavoriteRepositoryInLocaStorage from "../../../infrastructure/repository/FavoriteRepositoryInLocaStorage";
import ToogleFavorites from "../../../core/useCase/ToogleFavorites";
import ExistPokemonInFavorites from "../../../core/useCase/existPokemonInFavorites";
import { PokemonRepositoryInPokeApi } from "../../../infrastructure/repository";
import GetPokemonByName from "../../../core/useCase/getPokemonByName";
import GetPokemonesByLimit from "../../../core/useCase/getPokemonesByLimit";

interface Props {
  pokemon: PokemonApi;
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
  const repo = new FavoriteRepositoryInLocaStorage();
  const toogleFavorites = new ToogleFavorites(repo);
  const existPokemonInFavorites = new ExistPokemonInFavorites(repo);
  const provider = { toogleFavorites, existPokemonInFavorites };

  return (
    <Layout title={pokemon.name}>
      <Grid.Container gap={2} css={{ marginTop: "5px" }}>
        <Grid xs={12} sm={4}>
          <Card isHoverable variant="bordered" css={{ padding: "30px" }}>
            <Card.Body css={{ p: 1 }}>
              <Card.Image
                width="100%"
                height={200}
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  "/no-image.png"
                }
                alt={pokemon.name}
              />
            </Card.Body>
            <Card.Footer>
              <Row justify="space-between">
                <Text transform="capitalize">{pokemon.name}</Text>
                <Text>#{pokemon.name}</Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
        <DetailPokemon pokemon={pokemon} provider={provider} />
      </Grid.Container>
    </Layout>
  );
};

export async function getStaticPaths() {
  const repo = new PokemonRepositoryInPokeApi();
  const getPokemonesByLimit = new GetPokemonesByLimit(repo);
  const pokemones = await getPokemonesByLimit.execute(150);

  return {
    paths: pokemones.map(({ name }) => ({
      params: { name },
    })),
    fallback: false, // can also be true or 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { name } = ctx.params as { name: string };

  const repo = new PokemonRepositoryInPokeApi();
  const getPokemonByName = new GetPokemonByName(repo);
  const data = await getPokemonByName.execute(name);

  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokemonByNamePage;

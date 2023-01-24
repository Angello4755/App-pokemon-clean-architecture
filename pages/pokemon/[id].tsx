import React from "react";
import { Layout } from "../../components/layouts";
import { GetStaticProps, NextPage } from "next";
import { PokemonApi } from "../../core/entity/interfaces/pokemon-full";
import {
  Card,
  Grid,
  Row,
  Text,
} from "@nextui-org/react";
import { DetailPokemon } from "../../components/pokemon";
import FavoriteRepositoryInLocaStorage from "../../infrastructure/repository/FavoriteRepositoryInLocaStorage";
import ToogleFavorites from "../../core/useCase/ToogleFavorites";
import ExistPokemonInFavorites from "../../core/useCase/existPokemonInFavorites";
import { PokemonRepositoryInPokeApi } from "../../infrastructure/repository";
import GetPokemonById from "../../core/useCase/getPokemonById";

interface Props {
  pokemon: PokemonApi;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
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
  const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);

  return {
    paths: pokemons151.map((id) => ({
      params: { id },
    })),
    fallback: false, // can also be true or 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { id } = ctx.params as { id: string };
  
  const repo = new PokemonRepositoryInPokeApi();
  const getPokemonById = new GetPokemonById(repo);

  const  data = await getPokemonById.execute(Number(id));

  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokemonPage;

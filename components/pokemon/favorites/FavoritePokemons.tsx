import { Button, Card, Grid } from "@nextui-org/react";
import router from "next/router";
import React, { FC, useState } from "react";
import DeleteFavoriteById from "../../../core/useCase/deleteFavoriteById";
import GetFavorites from "../../../core/useCase/getFavorites";
import {
  FavoriteRepositoryInLocaStorage,
  PokemonRepositoryInPokeApi,
} from "../../../infrastructure/repository";
import { ProviderFavoritePokemon } from "../../../core/entity/interfaces/provider";
import { FavoriteCardPokemon } from "./FavoriteCardPokemon";

interface Props {
  pokemons: number[];
  setFavoritesPokemons: any;
}

export const FavoritePokemons: FC<Props> = ({
  pokemons,
  setFavoritesPokemons,
}) => {
  const repoFavorites = new FavoriteRepositoryInLocaStorage();
  const getFavorites = new GetFavorites(repoFavorites);
  const deleteFavoriteById = new DeleteFavoriteById(repoFavorites);
  const providerFavoritePokemon: ProviderFavoritePokemon = {
    getFavorites,
    deleteFavoriteById,
  };

  return (
    <Grid.Container direction="row" justify="flex-start">
      {pokemons.map((id) => (
        <FavoriteCardPokemon
          key={id}
          provider={providerFavoritePokemon}
          setFavoritesPokemons={setFavoritesPokemons}
          id={id}
        />
      ))}
    </Grid.Container>
  );
};

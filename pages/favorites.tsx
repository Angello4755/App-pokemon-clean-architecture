import React, { ReactElement, useEffect, useState } from "react";
import { Layout } from "../components/layouts";
import FavoriteRepositoryInLocaStorage from "../infrastructure/repository/FavoriteRepositoryInLocaStorage";
import GetFavorites from "../core/useCase/getFavorites";
import PokemonRepositoryInPokeApi from "../infrastructure/repository/PokemonRepositoryInPokeApi";
import { NoFavorites } from "../components/ui";
import DeleteFavoriteById from "../core/useCase/deleteFavoriteById";
import router from "next/router";
import { FavoritePokemons } from "../components/pokemon/favorites/FavoritePokemons";

export const Favorites = () => {
  const repoFavorites = new FavoriteRepositoryInLocaStorage();
  const getFavorites = new GetFavorites(repoFavorites);
  const [favoritesPokemons, setFavoritesPokemons] = useState([]);

  useEffect(() => {
    setFavoritesPokemons(getFavorites.execute());
  }, []);
  return (
    <>
      {favoritesPokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons
          pokemons={favoritesPokemons}
          setFavoritesPokemons={setFavoritesPokemons}
        />
      )}
    </>
  );
};

Favorites.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="Favoritos Pokemons">{page}</Layout>;
};

export default Favorites;

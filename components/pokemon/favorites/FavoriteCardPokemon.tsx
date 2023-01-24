import { Button, Card, Grid } from "@nextui-org/react";
import router from "next/router";
import React, { FC } from "react";
import { ProviderFavoritePokemon } from "../../../core/entity/interfaces";

interface Props {
  provider: ProviderFavoritePokemon;
  setFavoritesPokemons: any;
  id: number;
}

export const FavoriteCardPokemon: FC<Props> = ({
  provider,
  setFavoritesPokemons,
  id,
}) => {
  const deleteFavorite = () => {
    provider.deleteFavoriteById.execute(id);
    setFavoritesPokemons(provider.getFavorites.execute());
  };

  const onClick = () => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <>
      <Grid xs={6} sm={3} md={2} xl={1} key={id}>
        <Card
          isHoverable
          isPressable
          onClick={onClick}
          css={{
            padding: 10,
          }}
        >
          <Card.Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            width={"100%"}
            height={140}
          />
        </Card>
      </Grid>
      <Button size="xs" color="warning" onClick={deleteFavorite}>
        Quitar
      </Button>
    </>
  );
};

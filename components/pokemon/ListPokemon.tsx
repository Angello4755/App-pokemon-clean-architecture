import { Grid } from "@nextui-org/react";
import { FC } from "react";
import { Pokemon } from "../../core/entity/interfaces";
import { CardPokemon } from "./CardPokemon";

interface Props {
  listPokemon: Pokemon[];
}

export const ListPokemon: FC<Props> = ({ listPokemon }) => {
  return (
    <Grid.Container gap={2} justify="flex-start">
      <h1>Total: {listPokemon.length}</h1>
      {listPokemon.map((pokemon) => (
        <CardPokemon key={pokemon.id} pokemon={pokemon} />
      ))}
    </Grid.Container>
  );
};

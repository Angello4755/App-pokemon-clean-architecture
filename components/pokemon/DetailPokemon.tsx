import { FC, useEffect, useState } from "react";
import { Grid, Card, Button, Container, Text, Image } from "@nextui-org/react";
import { PokemonApi, Provider } from "../../core/entity/interfaces";
import confetti from "canvas-confetti";

interface Props {
  pokemon: PokemonApi;
  provider: Provider;
}

export const DetailPokemon: FC<Props> = ({ pokemon, provider }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(provider.existPokemonInFavorites.execute(pokemon.id));
  }, []);

  const onToggleFavorite = () => {
    provider.toogleFavorites.execute(pokemon.id);
    setIsFavorite(provider.existPokemonInFavorites.execute(pokemon.id));
    if (isFavorite) return;
    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      },
    });
  };

  return (
    <Grid xs={12} sm={8}>
      <Card>
        <Card.Header css={{ display: "flex", justifyContent: "space-between" }}>
          <Text h1>{pokemon.name}</Text>
          <Button
            color="gradient"
            ghost={isFavorite}
            onClick={onToggleFavorite}
          >
            {isFavorite ? "Quitar en Favoritos" : "Guardar en Favoritos"}
          </Button>
        </Card.Header>
        <Card.Body>
          <Text size={30}>Sprintes</Text>
          <Container direction="row" display="flex" gap={0}>
            <Image
              src={pokemon.sprites?.front_default || ""}
              alt={pokemon.name}
              width={100}
              height={100}
            />
            <Image
              src={pokemon.sprites?.back_default || ""}
              alt={pokemon.name}
              width={100}
              height={100}
            />
            <Image
              src={pokemon.sprites?.front_shiny || ""}
              alt={pokemon.name}
              width={100}
              height={100}
            />
            <Image
              src={pokemon.sprites?.back_shiny || ""}
              alt={pokemon.name}
              width={100}
              height={100}
            />
          </Container>
        </Card.Body>
      </Card>
    </Grid>
  );
};

import { Card, Grid, Row, Text } from "@nextui-org/react";
import { FC } from "react";
import { Pokemon } from "../../core/entity/interfaces";
import { useRouter } from "next/router";
import { ProviderDetail } from "../../core/entity/interfaces/provider";

interface Props {
  pokemon: Pokemon;
}

export const CardPokemon: FC<Props> = ({ pokemon }) => {
  const { id, img, name }: Pokemon = pokemon;

  const router = useRouter();

  const onClick = () => {
    router.push(`/pokemon/name/${name}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Card
        isHoverable
        isPressable
        onClick={onClick}
        variant="bordered"
        css={{ mw: "400px" }}
      >
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={img} alt={name} height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{name}</Text>
            <Text>#{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};

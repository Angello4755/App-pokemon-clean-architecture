import NextLink from "next/link";
import { Spacer, Text, useTheme, Image, Link } from "@nextui-org/react";

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0x 20px",
        backgroundColor: "gray",
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="Icono de la app"
        width={70}
        height={70}
      />
      <Link href="/">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okemon
          </Text>
        </div>
      </Link>
      <Spacer css={{ flex: 1 }} />

      <NextLink href="/favorites" passHref>
        <div style={{ marginRight: "10px" }}>
          <Text color="white" h3>
            Favoritos
          </Text>
        </div>
      </NextLink>
    </div>
  );
};

import NextLink from "next/link";
import { Spacer, Text, useTheme, Link } from '@nextui-org/react'
import Image from 'next/image'

export const Navbar = () => {
  const { theme } = useTheme()
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "center",
        width: "100%",
        padding: "0px, 20px",
        backgroundColor: theme?.colors?.gray900.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="pokemon"
        width="70px"
        height="70px"
      />
      <NextLink href="/" passHref>
        <Link>
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okemon
          </Text>
        </Link>
      </NextLink>
      <Spacer css={{ flex: 1 }} />
      <NextLink href="/favorites" passHref>
        <Link>
          <Text
            style={{ marginRight: "25px", marginTop: "7px" }}
            color="white"
            h3
          >
            Favorites
          </Text>
        </Link>
      </NextLink>
    </div>
  )
}

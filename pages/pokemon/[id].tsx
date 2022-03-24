import { useState } from 'react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { Button, Card, Container, Grid, Text, Image } from '@nextui-org/react'
import confetti from 'canvas-confetti'
import { Layout } from '../../components/layouts/Layout'
import pokeApi from '../../api/pokeApi'
import { Pokemon } from '../../interfaces/pokemon-full'
import styles from './pokemon.module.css'
import { localFavorites } from '../../utils'
import { getPokemonInfo } from '../../utils/getPokemonInfo'

interface Props{
  pokemon: Pokemon
}
const PokemonPage: NextPage<Props> = ({pokemon}) => {

  const [isInFavorites, setIsInFavorites] = useState(localFavorites.existInFavorites(pokemon.id))

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id)
    setIsInFavorites(!isInFavorites)

    if (!isInFavorites) {
      confetti({
        particleCount: 100,
        spread: 360,
        origin: {
          x: 1,
          y: 0.1
        },
      })
    }
  }
  
  return (
    <Layout title={pokemon.name}>
      <Grid.Container gap={2} justify="flex-start">
        <Grid xs={12} sm={6} md={4} lg={3}>
          <Card hoverable css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  "/no-image.png"
                }
                alt={pokemon.name}
                width="100%"
                height="200px"
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={8} lg={9}>
          <Card hoverable className={styles.card}>
            <Card.Header className={styles.card_header}>
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>
              <Button
                onClick={onToggleFavorite}
                color="gradient"
                ghost={!isInFavorites}
              >
                {isInFavorites ? "Remove from favorites" : "Add to favorites"}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container display="flex" direction="row" gap={0}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemos151 = [...Array(151)].map((value, index) => `${index + 1}`)

  return {
    paths: pokemos151.map((id) => (
      { params: { id } }
      )),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  
  const { id } = params as { id: string }
  
  return {
    props: {
      pokemon: await getPokemonInfo(id)
    },
  }
}

export default PokemonPage

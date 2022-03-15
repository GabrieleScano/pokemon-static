import type { NextPage } from "next"
import { GetStaticProps } from "next"
import { Card, Grid, Row, Text } from "@nextui-org/react"
import { Layout } from "../components/layouts/Layout"
import pokeApi from "../api/pokeApi"
import { PokemonListResponse, SmallPokemon } from "../interfaces/pokemon-list"
import { PokemonCard } from "../pokemon/PokemonCard"

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  console.log(pokemons);
  return (
    <Layout title="List of Pokemons">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");
  const pokemons: SmallPokemon[] = data.results.map((pokemon, i) => ({
    ...pokemon,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));
  console.log(pokemons);

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;

import { useRouter } from 'next/router'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { Layout } from '../../components/layouts/Layout'
import pokeApi from '../../api/pokeApi';
import { Pokemon } from '../../interfaces/pokemon-full';


interface Props{
  pokemon: Pokemon
}
const PokemonPage: NextPage<Props> = ({pokemon}) => {

  return (
    <Layout title='Some pokemon'>
      PokemonPage
      <h1>{pokemon.name}</h1>
    </Layout>
  )
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
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);
  
  return {
    props: {
      pokemon: data
    },
  };
};

export default PokemonPage;

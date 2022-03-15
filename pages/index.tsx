import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { Layout } from '../components/layouts/Layout'
import pokeApi from '../api/pokeApi';
import { PokemonListResponse } from '../interfaces/pokemon-list';

const HomePage: NextPage = (props) => {
  console.log(props);
  return (
    <Layout title="List of Pokemons">

    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
console.log(data)
  return {
    props: {
      pokemons:data.results
      
    }
  }
}

export default HomePage

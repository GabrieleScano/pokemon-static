import { Layout } from '../../components/layouts/Layout'
import { NoFavorites } from '../../components/ui/NoFavorites'
import { useEffect, useState } from 'react'
import { localFavorites } from '../../utils'
import { FavoritePokemons } from '../../components/pokemon/FavoritePokemons';


const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons())
  }, [])

  return (
    <Layout title='Favorites'> 
      {favoritePokemons.length === 0 
        ? (<NoFavorites />) 
        : (<FavoritePokemons pokemons={favoritePokemons} />)
      }
    </Layout>
  )
}

export default FavoritesPage

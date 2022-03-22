import { Layout } from '../../components/layouts/Layout'
import { NoFavorites } from '../../components/ui/NoFavorites'
import { useEffect, useState } from 'react'
import { Grid, Card } from '@nextui-org/react'
import { localFavorites } from '../../utils'


const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons())
  }, [])

  return (
    <Layout title='Favorites'> 
      {favoritePokemons.length === 0 
        ? (<NoFavorites />) 
        : (
          <Grid.Container gap={2} direction='row' justify='flex-start'>
            {
            favoritePokemons.map(id => (
              <Grid xs={6} sm={3} md={2} lg={1} xl={1} key={id}>
                <Card hoverable clickable css={{padding:10}}>
                  <Card.Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                    alt={`Pokemon ${id}`}
                    width={'100%'}
                    height={'100%'}
                  />
                </Card>
              </Grid>
            ))
            }
          </Grid.Container>
        )
      }
    </Layout>
  )
}

export default FavoritesPage

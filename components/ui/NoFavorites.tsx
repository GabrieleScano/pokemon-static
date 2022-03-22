import { Container, Text, Image } from '@nextui-org/react'
import styles from './NoFavorites.module.css'

export const NoFavorites = () => {
  return (
    <Container className={styles.container}>
        <Text h1>There are no favorites</Text>
        <Image 
          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/66.svg'
          alt='No image'
          width={250}
          height={250}
          style={{opacity: 0.1 }}
        />

      </Container>
  )
}

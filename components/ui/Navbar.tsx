import { Spacer, Text, useTheme } from '@nextui-org/react'
import Image from 'next/image';
import styles from './Navbar.module.css'

export const Navbar = () => {

    const { theme } = useTheme()
  return (
    <div 
      className={styles.logo}
      style={{ backgroundColor: theme?.colors?.gray900.value}}
    >

    <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="pokemon" width="70px" height="70px" />
    <Text color='white' h2>P</Text>
    <Text color='white' h3>okemon</Text>
    <Spacer css={{flex:1}}/>
    <Text color='white' >Favorites</Text>


    </div>
  )
}

import { FC } from "react"
import Head from "next/head"

interface LayoutProps {
    title?: string
    children: any
}

export const Layout:FC<LayoutProps> = ({children, title}) => {
  return (
    <>
      <Head>
          <title>{ title || 'Pokemon App'}</title>
          <meta name="author" content="Gabriele" />
          <meta name="description" content={`information about pokemon ${title}`} />
          <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>
      <main>
          {children}
      </main>
    </>
  )
}

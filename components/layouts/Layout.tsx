import { FC } from "react"
import Head from "next/head"
import { Navbar } from '../ui/Navbar'

interface LayoutProps {
    title?: string
    children: any
}

const origin = (typeof window !== 'undefined') ? window.location.origin : ''
export const Layout:FC<LayoutProps> = ({children, title}) => {
  console.log(origin)


  return (
    <>
      <Head>
          <title>{ title || 'Pokemon App'}</title>
          <meta name="author" content="Gabriele" />
          <meta name="description" content={`information about pokemon ${title}`} />
          <meta name="keywords" content={`${title}, pokemon, pokedex`} />
          <meta property="og:title" content={`Information about ${title}`} />
          <meta property="og:description" content={`This is a page about ${title}`} />
          <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <Navbar />
      <main>
          {children}
      </main>
    </>
  )
}

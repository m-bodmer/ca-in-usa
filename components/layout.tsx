import Head from 'next/head'
import Navbar from './navbar'

type LayoutProps = {
  children: React.ReactNode
  title?: string
}

export default function Layout({ children, title = 'CA in USA' }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Just a canadian living in USA who needs some conversion help"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        {children}
      </main>
    </>
  )
}

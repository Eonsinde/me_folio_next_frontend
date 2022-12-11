import '../styles/globals.css'
import { FC, ReactNode, useEffect } from 'react'
import type { AppProps } from 'next/app'


const Noop: FC<{ children?: ReactNode }> = ({ children }) => <>{children}</>


export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop

  useEffect(() => {

  }, [])

  return (
    <>
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

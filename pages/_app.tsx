import '../styles/globals.css'
import { FC, ReactNode, useEffect } from 'react'
import type { AppProps } from 'next/app'
import NextProgress from "next-progress";


const Noop: FC<{ children?: ReactNode }> = ({ children }) => <>{children}</>


export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop

  useEffect(() => {

  }, [])

  return (
    <>
      <NextProgress color="234" delay={300} options={{ showSpinner: false }} />
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

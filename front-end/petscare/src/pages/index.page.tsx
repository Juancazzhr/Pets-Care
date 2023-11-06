
import Nosotros from '../components/home/nosotros'
import {Servicios}  from '../components/home/servicios/Servicios'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pets Care</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Servicios />
        <Nosotros/>
      </main>
    </>
  )
}

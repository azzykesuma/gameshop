import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { createClient } from 'contentful';

export const getStaticProps = async() => {
  const client = createClient({
    space : process.env.SPACE_ID,
    accessToken : process.env.ACCESS.TOKEN
  })
}

export default function Home() {


  return (
    <>
    <Head>
      <title>Home</title>
    </Head>


    </>

  )
}

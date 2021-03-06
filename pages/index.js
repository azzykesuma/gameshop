import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Gamecard from '../components/Gamecard'
import { createClient } from 'contentful';
import {
   Container,
   Grid,
   Box
  } from '@mui/material';

export const getStaticProps = async() => {
  const client = createClient({
    space : 'jdnolxh774dq',
    accessToken : '0gaM9ZkTUPE4TLOY1z3d8-7GMPHaAqAmMGCT-hWAGBE'
  })

  const res = await client.getEntries({content_type : 'game'})

  return {
    props : {
      game : res.items,
      revalidate : 1
    }
  }
}

export default function Home({ game }) {
  console.log(game);
  return (
    <>
    <Head>
      <title>Welcome to Game Shop</title>
    </Head>
     {/* mapping games */}
      <div className={styles.gridContainer}>
        {
          game.map(item => (
            <Gamecard item={item} key={item.sys.id} />            
          ))
        }
      </div>
    </>

  )
}

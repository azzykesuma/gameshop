import { createClient } from "contentful";
import Image from 'next/image'

const client = createClient({
    space: "jdnolxh774dq",
    accessToken: "0gaM9ZkTUPE4TLOY1z3d8-7GMPHaAqAmMGCT-hWAGBE"
})

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: "game"
    })
    console.log(res); 
    const paths = res.items.map(item => ({
        params: { slug: item.fields.slug }
    }))

    return {
        paths,
        fallback : false
    }
}

export const getStaticProps = async({ params }) => {
    const {items} = await client.getEntries({
        content_type: "game",
        'fields.slug': params.slug
    })

    if(!items.length) {
        return {
            redirect : {
                destination : '/',
                permanent : false
            }
        }
    }

    return {
        props : {game : items[0]},
        revalidate : 1
    }
}


const Game = ({ game }) => {
    console.log(game);
    const { image, gameTitle,price} = game.fields
    return (    
        <>
            <Image 
            src={'https:' + image.fields.file.url}
            width={'500px'}
            height={'300px'}
            />
        </>
    );
}
 
export default Game;
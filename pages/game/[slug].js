import { createClient } from "contentful";
import Image from 'next/image';
import { Container,Box, Typography } from '@mui/material';
import styles from '../../styles/Data.module.css';

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
    
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'IDR',
      });
    //   reduce the formatted price by 10%
    const { image, gameTitle,price,imageAddOn,promo} = game.fields
    var discountedPrice = formatter.format(price * 0.9)

    return (    
        <Container
        maxWidth="lg"
        sx={{
            margin : '20px',
            justifyContent : 'center',
            display : 'flex',
            flexDirection : 'column',
        }}
        >
            <Box
            sx={{
                display: 'grid',
                gridTemplateColumns : 'repeat(3,200px)',
                gap : '10px',
                justifyContent : 'center',
                marginBottom : '20px'
            }}
            >
                <Box
                sx={{
                    gridRow : '1/3',
                }}
                >
                    <Image 
                    src={'https:' + image.fields.file.url}
                    width={'500px'}
                    height={'700px'}
                    alt={gameTitle}
                    />
                </Box>
                <Box>
                    <Image 
                    src={'https:' + imageAddOn[0].fields.file.url}
                    width={'300px'}
                    height={'200px'}
                    alt={gameTitle}
                    />
                </Box>
                <Box>
                    <Image 
                    src={'https:' + imageAddOn[1].fields.file.url}
                    width={'300px'}
                    height={'200px'}
                    alt={gameTitle}
                    />
                </Box>
                <Box>
                    <Image 
                    src={'https:' + imageAddOn[2].fields.file.url}
                    width={'300px'}
                    height={'200px'}
                    alt={gameTitle}
                    />
                </Box>
                <Box>
                    <Image 
                    src={'https:' + imageAddOn[3].fields.file.url}
                    width={'300px'}
                    height={'200px'}
                    alt={gameTitle}
                    />
                </Box>
            </Box>
            <Box
            sx={{
                width : '500px',
                alignSelf : 'center',
            }}
            >
                <Typography>{gameTitle}</Typography>
                { promo ? discountedPrice : <Typography>{formatter.format(price)}</Typography> 
            }
            </Box>
        </Container>
    );
}
 
export default Game;
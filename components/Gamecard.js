import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActions,
    Button
} from '@mui/material/';
import Link from 'next/link';

const Gamecard = ({item}) => {
    const { gameTitle,price,promo,slug,image } = item.fields
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'IDR',
      });
    //   reduce the formatted price by 10%
    var discountedPrice = formatter.format(price * 0.9)
    return (
            <Card sx={{ 
                maxWidth: 500, 
                margin: '20px',
                height : '450px;'
                }}
                >
                <CardMedia
                    component="img"
                    alt={slug}
                    height="250"
                    image={image.fields.file.url}
                />
                <CardContent  sx={{
                    position: 'relative'
                }}>
                    <Typography gutterBottom variant="h5" component="div">
                    {gameTitle}
                    </Typography>

                    { 
                    promo ? 
                        <Typography sx={{textDecoration : 'line-through'}}>{formatter.format(price)}</Typography> 
                    : null
                    }
                    
                    <Box
                    backgroundColor="primary.main"
                    sx={{
                        width : '60%',
                        padding : '10px',
                        color : 'white',
                    }}
                    >
                        {promo ? 
                        discountedPrice :
                        formatter.format(price)}
                    </Box>

                    {promo ? 
                    <Box
                    sx={{
                        position : 'absolute',
                        bottom : '30px',
                        right : '40px',
                        backgroundColor : 'red',
                        color : 'white',
                    }}
                    >
                        <Typography>-10% Off!</Typography>
                    </Box> : 
                    null
                }
                </CardContent>
                <CardActions
                sx={{
                display : 'flex',
                flexGrow : 1,
                }}
                >
                    <Button
                    variant="contained"
                    >
                        <Link href={`/game/${slug}`}>
                            <a>Buy Now</a>
                        </Link>
                    </Button>
                </CardActions>
            </Card>
    );
}
 
export default Gamecard;
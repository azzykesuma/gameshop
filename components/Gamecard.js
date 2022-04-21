import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid
} from '@mui/material/';

const Gamecard = ({item}) => {
    const { gameTitle,price,promo,slug,image } = item.fields
    return (
            <Card sx={{ 
                maxWidth: 500, 
                margin: '20px',
                }}
                >
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="200"
                    image={image.fields.file.url}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {gameTitle}
                    </Typography>
                    
                    <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>
            </CardContent>
            </Card>
    );
}
 
export default Gamecard;
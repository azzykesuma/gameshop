import {AppBar,Toolbar,Avatar,Box} from '@mui/material/';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import Link from 'next/link';

const Navbar = () => {
    return (
        <AppBar
        position="static"
        >
            <Container
            maxWidth="lg"
            >
                <Toolbar>
                    <VideogameAssetIcon />
                    <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap : '10px',
                        marginLeft: 'auto',
                        marginRight: '10px'
                    }}
                    >
                        <Link href='/'><a><Typography>Home</Typography></a></Link>
                        <Link href='/'><a><Typography>Game List</Typography></a></Link>
                        <Link href='/'><a><Typography>Account</Typography></a></Link>
                    </Box>
                    <Avatar
                    src='/ava.jpg'
                    />
                </Toolbar>
            </Container>
        </AppBar>
    );
}
 
export default Navbar;
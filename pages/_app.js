import '../styles/globals.css'
import Layout from '../components/Layout'
import { createTheme, ThemeProvider } from '@mui/material/styles';

function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    typography : {
      fontFamily : '"Lato", "Helvetica", "Arial", sans-serif',
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout> 
   </ThemeProvider>
  )
}

export default MyApp

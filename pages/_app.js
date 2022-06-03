import 'styles/globals.css'
import Header from '@/layout/Header'
import Footer from '@/layout/Footer'
import 'styles/Layout.css'

function MyApp({ Component, pageProps }) {
  
  //se o componente tem um layout .. retorna ele com seu layout
  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps}/>)
  }
  return <>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
  </>
}

export default MyApp


import React,{useEffect} from 'react'
import "@/styles/globals.css";
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import NavBar from './component/navbar';
import Footer from './component/footer';

export default function App({ Component, pageProps }) {
  // useEffect(() => {
  //   window.onpopstate = () => {
  //     window.location.reload();
  //   };
  // }, []);
  return(
    <div>
  <Provider store={store}> 
    <NavBar></NavBar>
    <Component {...pageProps} />
    <Footer></Footer>
    </Provider>;
  </div>
  ) 
}

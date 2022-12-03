import '../styles/globals.css'
import AOS from 'aos';
import { useEffect } from 'react'
import 'aos/dist/aos.css';
import MDXcompo from '../components/MDXcompo';
import { MDXProvider } from '@mdx-js/react';


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 500,
    });
   });
  return (
    <MDXProvider components={MDXcompo}>
  <Component {...pageProps} />
  </MDXProvider>
  )
}

export default MyApp

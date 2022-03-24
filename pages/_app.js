import '../styles/globals.css'
import { AppProvider } from '../context';
import { motion,AnimatePresence } from 'framer-motion'
import Head from "next/head"

function MyApp({ Component, pageProps, router }) {
    return(
        <AppProvider>
            <AnimatePresence>
            <motion.div key={router.route} initial='pageInitial' animate='pageAnimate' exit="pageExit" variant={{
            pageInitial:{
                opacity: 0
            },
            pageAnimate:{
                opacity: 1,
                delay: .4
            },
            pageExit:{
                backgroundColor: 'white',
                filter: `invert()`,
                opacity: 0
            }
        }}>
            <Head>
            <link rel="shortcut icon" href="/favicon.png" />
            </Head>
                <Component {...pageProps} />
            </motion.div>
            </AnimatePresence>
        </AppProvider> 
    )
}

export default MyApp

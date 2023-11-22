import React from 'react'
import Search from './Search'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Footer from './Footer'
import Header from './Header'
import ScrollTo from '../../utils/scrollTo'

const Main = (props) => {
    return (
        <HelmetProvider>
            <ScrollTo />
            <Helmet
                titleTemplate='%s | Fashion Youtube'
                defaultTitle='Fashion Youtube'
                defer={false}
            >
                {props.title && <title>{props.title}</title>}
                <meta name="description" content={props.description} />

            </Helmet>

            <Header />
            <main id='main' role='main'>
                <Search />
                {props.children}
            </main>
            <Footer />
        </HelmetProvider>

    )
}

export default Main
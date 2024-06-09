import React from 'react'
import Hero from '../sections/Hero/Hero'
import Skills from '../sections/Skills/Skills'
import Work from '../sections/Projects/Work'
import Contact from '../sections/Contact/Contact'

const Home = () => {
    return (
        <main className='main'>
            <Hero />
            <Work />
            <Skills />
            <Contact />
        </main>
    )
}

export default Home
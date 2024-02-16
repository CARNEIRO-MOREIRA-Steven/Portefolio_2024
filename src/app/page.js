import React from 'react'
import Header from '../components/Header'
import NavBar from '@/components/NavBar'
import Banner from '../components/Banner'
import Skills from '../components/Skills'
import Projets from '../components/Projets'
import Parcours from '../components/Parcours'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const page = () => {
  return (
    
    <div>
      <Header />
      <NavBar />
      <Banner />
      <Skills />
      <Projets />
      <Parcours />
      <Contact />
      <Footer />
    </div>
  )
}

export default page
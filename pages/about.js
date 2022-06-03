import React from 'react'
import Footer from '../components/layout/Footer'
import Head from 'next/head'
import Image from 'next/image'

const About = () => {
  return (
    <>
    <Head>
      <title>About Zero</title>
      <meta name="description" content='free studies about next js'/>
    </Head>
    <div>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, quos.</p>
    </div>
    </>
  )
}

export default About

About.getLayout = function PageLayout(page){
  return (
    <>
    {page}
    <Footer/>
    </>
  )
}
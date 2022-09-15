import React from 'react'
import Header from '../Components/Reuseable/layout';
import HomeLayout from '../Components/Home/HomeLayout';
import Footer from '../Components/Reuseable/Footer';
import Copyrights from '../Components/Reuseable/Copyrights';

const Home = () => {
  return (
    <>
      <Header />
      <HomeLayout />
      <Footer />
      <Copyrights />
    </>
  )
}

export default Home

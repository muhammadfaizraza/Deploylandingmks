import React,{useEffect} from 'react'
import Header from '../Components/Reuseable/layout';
import HomeLayout from '../Components/Home/HomeLayout';
import Footer from '../Components/Reuseable/Footer';
import Copyrights from '../Components/Reuseable/Copyrights';
import {Helmet} from "react-helmet";
import { fetchSeo, STATUSES } from "../../Webiste/redux/getReducer/getSeo";
import { useDispatch, useSelector } from "react-redux";
import Lottie from 'react-lottie';
import Animate from '../assets/loader.json'
import Cookies from 'js-cookie';

const Home = () => {

  const dispatch = useDispatch();
  const { data: Seo, status } = useSelector((state) => state.Seo);
  
  useEffect(() => {
    dispatch(fetchSeo());
  }, [dispatch]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Animate,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }}


  if (status === STATUSES.LOADING) {
    return (
      <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
    );
  }
  if (status === STATUSES.ERROR) {
    return (
      <h2
        style={{
          margin: "100px",
        }}
      >
        Something went wrong!
      </h2>
    );
  }
  const cookiedata = Cookies.get('i18next')

  return (
    <>

    <Helmet>
    {
        Seo.slice(-1).map((item) => {
          return(
            <title>{cookiedata === 'en' ? item.TitleEn : item.TitleAr}</title>
          )
        })
      }
    </Helmet>
      <Header />
      <HomeLayout />
      <Footer />
      <Copyrights />
    </>
  )
}

export default Home

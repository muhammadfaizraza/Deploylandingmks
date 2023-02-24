import React, { Fragment, useEffect } from 'react';
import Layout from "../Components/Reuseable/layout";
import Footer from "../Components/Reuseable/Footer.jsx";
import CoptRight from "../Components/Reuseable/Copyrights";
import { fetchNews, STATUSES } from "../redux/getReducer/getNewsSlice";
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Banner from "../assets/Rectangle 16.jpg"
import { htmlToText } from "html-to-text";
const BlogDetails = () => {
  const dispatch = useDispatch()
  const { data: allnews, status } = useSelector((state) => state.news);
  const { state } = useLocation()
  const { blogs } = state

  console.log(blogs, "hahha")
  useEffect(() => {
    dispatch(fetchNews());
    console.log(allnews, "news");
  }, [allnews, dispatch])
  if (status === STATUSES.LOADING) {
    return (
      <h2
        style={{
          margin: "100px",
        }}
      >

      </h2>
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
  return (
    <Fragment>
      <Layout />
      <div className="aboutpageheader">
        <h2> Blogs </h2>
      </div>
      <div className='blogMain'>
        <h4>{blogs.TitleEn}</h4>
        <div className='blogBanner'>
          <img src={Banner} alt="" />
        </div>
        <p className='mt-5'>{htmlToText(blogs.DescriptionEn)}</p>
        <div className='blogDatas'>
          <div className='blogDesc'>
            <p >{htmlToText(blogs.DescriptionEn)}</p>
          </div>
          <div>

            <img src={blogs.image} alt='' />
          </div>
        </div>
        {/* {
          allnews.map((item) => {
            return (
              <div className='blogDetailMain'>
                <h4>{item.TitleEn}</h4>
                <div className=''>
                  <img src={item.image} alt="" />
                  <h2>{item.TitleEn}</h2>
                  <h3>{item.SecondTitleEn}</h3>
                  <p>{item.DescriptionEn}</p>
                </div>
              </div>
            )
          })
        } */}
        <p className='mt-5'>{htmlToText(blogs.DescriptionEn)}</p>

      </div>
      <Footer />
      <CoptRight />
    </Fragment>
  )
}

export default BlogDetails
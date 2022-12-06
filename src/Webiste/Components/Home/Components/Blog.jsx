import React,{useEffect} from 'react';
import '../../CSS/HomeCSS/blogs.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews, STATUSES } from "../../../redux/getReducer/getNewsSlice";
import { BlogData } from '../../../data/data';
import ScrollContainer from 'react-indiana-drag-scroll'
import {useTranslation} from 'react-i18next';
import Cookies from 'js-cookie';

const Blog = () => {
  const dispatch = useDispatch();
  const { data: allnews, status } = useSelector((state) => state.news);

  const { t } = useTranslation()

  useEffect(() => {
    dispatch(fetchNews());
  },[])

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

  const cookiedata = Cookies.get('i18next')
  return (
   <>
     <div className="BlogCard">
        <div className='blognews'>
          
          <h1>{t('newsblogs')}</h1>
        </div>
        <div className='innerCardBlogs'>
          {/* {
            allnews.slice(0,4).map((item) => {
              return(
                <div className='singleCardBlogs'>
                   <img src={item.image} alt="" />
                   <h2>{item.TitleEn}</h2>
                   <h3>{item.DescriptionEn}</h3>
                </div>
              )
            })
          } */}
          {
            allnews === undefined ? <h2
            style={{
              margin: "100px",
            }}
          >
 
          </h2> :  <ScrollContainer  className="scroll-container1">
            {
              allnews.map((item) => {
                return(
                  <div className='singleCardBlogs'>
                     <img src={item.image} alt="" />
                     <h2>{cookiedata === 'en' ? item.TitleEn : item.TitleAr}</h2>
                     <h3>{cookiedata === 'en' ? item.DescriptionEn : item.DescriptionAr}</h3>
                  </div>
                )
              })
            }
            </ScrollContainer>
          }
        </div>
      </div> 
   </>
  )
}
export default Blog
import React ,{Fragment , useEffect}from 'react';
import Layout from "../Components/Reuseable/layout";
import Footer from "../Components/Reuseable/Footer.jsx";
import CoptRight from "../Components/Reuseable/Copyrights";
import { fetchNews, STATUSES } from "../redux/getReducer/getNewsSlice";
import { useSelector,useDispatch } from 'react-redux';

const BlogDetails = () => {
    const dispatch = useDispatch()
    const { data: allnews, status } = useSelector((state) => state.news);
 

    useEffect(() => {
        dispatch(fetchNews());
        console.log(allnews , "news");
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
    return (
    <Fragment>
  <Layout/>
    <div className="aboutpageheader">
    <h2>MKS Blogs Details</h2>
  </div>
  <div className='row'>
  {
              allnews.map((item) => {
                return(
                    <div className='d-flex '>
                    <div className=''>
                    <img src={item.image} alt="" />
                    <h2>{ item.TitleEn }</h2>
                    <h3>{ item.SecondTitleEn}</h3>
                    <p>{item.DescriptionEn}</p>
                 </div>
                 </div>
                )
              })
            }
 </div>
  <Footer/>
  <CoptRight/>
  </Fragment>
  )
}

export default BlogDetails
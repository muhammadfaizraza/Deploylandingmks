import React,{useEffect} from 'react';
import '../../CSS/HomeCSS/blogs.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews, STATUSES } from "../../../redux/getReducer/getNewsSlice";

const Blog = () => {
  const dispatch = useDispatch();
  const { data: allnews, status } = useSelector((state) => state.news);

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
        Loading....
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
   <>
     <div className="BlogCard">
        <div className='blognews'>
          <h1>NEWS & BLOGS</h1>
        </div>
        <div className='innerCardBlogs'>
          {
            allnews.slice(-4).map((item) => {
              return(
                <div className='singleCardBlogs'>
                   <img src={item.image} alt="" />
                   <h2>{item.TitleEn}</h2>
                   <h3>{item.DescriptionEn}</h3>
                </div>
              )
            })
          }
        </div>
      </div> 
   </>
  )
}
export default Blog
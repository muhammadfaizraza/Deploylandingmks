import '../../CSS/blogs.css'
import { BlogData } from '../../../data/data'

const Blog = () => {
  return (
   <>
     <div className="BlogCard">
        <div className='blognews'>
          <h1>NEWS & BLOGS</h1>
        </div>
        <div className='innerCardBlogs'>
          {
            BlogData.map((item) => {
              return(
                <div className='singleCardBlogs'>
                   <img src={item.image} alt="" />
                   <h2>{item.title}</h2>
                   <h3>{item.subtitle}</h3>
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
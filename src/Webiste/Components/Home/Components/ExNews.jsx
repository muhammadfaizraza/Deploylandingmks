import {News} from '../../../data/data'

const ExNews = () => {
  return (
    <>
    <div className='exnews'> 
     {
      News.map((item,index) => {
        return(
          <span className='newsflex' key={item.id} >
            <h5>{item.title}</h5>
            <p>{item.description}</p>
          </span>
        )
      })
     }
    </div>
    </>
  )
}
export default ExNews
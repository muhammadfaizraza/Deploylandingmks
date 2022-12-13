import axios from "axios";
import React,{useState, useEffect} from "react"

const Search = () => {

  const [item, SearchData] = useState('');
  const [Data, setData] = useState([])

   useEffect(() => {
    (async () => {
      try {
        const res = await axios.post(`${window.env.API_URL}/searchhorse_trainer_jockey`, {Query:item});
        setData(res.data.data1)
        if(item === ''){
          setData([])
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, [item]);
  
  console.log(Data,'Data')
  console.log( Data.length,'Data')

  return (
    <div className="searchparent">
      <div className="searchbox">
         <input type="text" onChange={event => SearchData(event.target.value)} />
        <i className="fa fa-search icon11" ></i>
      </div>
      <div className = {item === '' ? 'searchchild1' : 'searchchild'}  >
      {
        Data.length === 0 ? <>No Data Found</> : <>{Data.map((item) => {
          return(
            <div className="searchdatalist ">
              <p>{item.NameEn}</p>
            
            </div>
          )
        })}</>
      }</div>
    
    </div>
  )
}
export default Search
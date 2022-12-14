import axios from "axios";
import React,{useState, useEffect} from "react"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Search = () => {

  const [item, SearchData] = useState('');
  const [Data, setData] = useState([])
  const [Data2, setData2] = useState([])

   useEffect(() => {
    (async () => {
      try {
        const res = await axios.post(`${window.env.API_URL}/searchhorse_trainer_jockey`, {Query:item});
        setData(res.data.data1)
        setData2(res.data.data2)
        if(item === ''){
          setData([])
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, [item]);
  
  console.log(Data,'Data')
  console.log(Data2,'Data2')

  console.log( Data.length,'Data')

  return (
    <div className="searchparent">
      <div className="searchbox">
         <input type="text" onChange={event => SearchData(event.target.value)} />
        <i className="fa fa-search icon11" ></i>
      </div>
      <div className={item === '' ? 'searchchild1' : 'searchchild'}>
      {
        Data.length === 0 ? <p className="searchdatalist1">No Data Found</p> : <>{Data.map((item) => {
          return(
            <div className="searchdatalist ">
                  <OverlayTrigger placement={"left"} overlay={<Tooltip id="tooltip-disabled">
                    <span>
                      <p>Height:{item.Height}</p>
                    </span>
                  </Tooltip>}>
                  <p>{item.NameEn}</p>
                  </OverlayTrigger>
             
            </div>
          )
        })}</>
      }</div>
    
    </div>
  )
}
export default Search
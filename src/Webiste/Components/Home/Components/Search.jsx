import axios from "axios";
import React,{useState, useEffect} from "react"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Search = () => {

  const [item, SearchData] = useState('');
  const [Data, setData] = useState([])
  const [Data2, setData2] = useState([])
  const [Data3, setData3] = useState([])


   useEffect(() => {
    (async () => {
      try {
        const res = await axios.post(`${window.env.API_URL}/searchhorse_trainer_jockey`, {Query:item});
        setData(res.data.data1)
        setData2(res.data.data2)
        setData3(res.data.data3)
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
      <div className="searchdatalist ">
               <div className="row">
               <div className="col-sm">
                 <h5>Horse</h5>
               </div>
                
                
                <div className="col-sm">
                <h5>Trainer</h5>
                </div>
                <div className="col-sm">
             
                <h5>Owner</h5>
                </div>


                </div>
                 
            </div>
            <hr/>
      <div className="searchdatalist ">
               <div className="row">
               <div className="col-sm">
               {
                Data.length === 0 ? <p className="searchdatalist1">No Data Found</p> : <>
                {
                 Data.map((data2) => {
                  return(
                    <p className="searchname">{data2.NameEn}</p>
                  
                  )
                 })
                  }</>
                  
               }  
               </div>
                
                
                <div className="col-sm">
                {
                Data2.length === 0 ? <p className="searchdatalist1">No Data Found</p> : <>
                {
                 Data2.map((data2) => {
                  return(
                    <p className="searchname">{data2.NameEn}</p>
                  )
                 })
                  }</>
               }
             
                </div>
                <div className="col-sm">
                {
                Data3.length === 0 ? <p className="searchdatalist1">No Data Found</p> : <>
                {
                 Data3.map((data2) => {
                  return(
                    <p className="searchname">{data2.NameEn}</p>
                  )
                 })
                  }</>
               }
             
                </div>


                </div>
                 
            </div>
      </div>
    
    </div>
  )
}
export default Search
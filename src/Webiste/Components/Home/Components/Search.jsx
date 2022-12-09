import axios from "axios";
import React,{useState, useEffect} from "react"

const Search = () => {

  const [item, SearchData] = useState();
  const [Data, setData] = useState()

  useEffect(() => {
    handleSearch();
  }, []);
  const handleSearch = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("Query",item ); 
   const response =  await axios.post(`${window.env.API_URL}/searchhorse_trainer_jockey`, formData);
   setData(response.data.data1)
  };

  console.log('data is ',Data)
 

  return (
    <>
      <div className="searchbox">
         <input type="text" onChange={event => SearchData(event.target.value)} />
        <i className="fa fa-search icon11" onClick={handleSearch}></i>
      </div>
      <div className="SearchDataPanel">
      {
       Data !== undefined ? Data.map((item) => {
          return(
            <>
            <p>{item.NameEn}</p>
            </>
          )
        }) : <></>
      }
      </div>
      
    </>
  )
}
export default Search
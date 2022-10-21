import Layout from "../Components/Reuseable/layout";
import "../Components/CSS/pagesCSS/about.css";
import Footer from "../Components/Reuseable/Footer.jsx";
import CoptRight from "../Components/Reuseable/Copyrights";
import "../Components/CSS/pagesCSS/horse.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import {
  fetchTrainer,
  STATUSES,
} from "../../Webiste/redux/getReducer/getTrainerSlice";

const Trainer = () => {
    const [country, setCountry] = useState([]);
    const [search, setSearch] = useState("");
    // const [filterCountries, setFilterCountries] = useState("");
    const navigate = useNavigate();

    
    const dispatch = useDispatch();
  const { data: trainer, status } = useSelector((state) => state.trainer);

  useEffect(() => {
    dispatch(fetchTrainer());
    setCountry(trainer);
    setCountry(trainer);
  }, []);

//   useEffect(() => {
//     const result = country.filter(country => {
//     return country.name.toLowerCase().match(search.toLowerCase());
//     });
//     setCountry(result)
//   },[search])

console.log(country,'trainer')
  if (status === STATUSES.LOADING) {
    return (
      <h2
      className="loader"
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
  const HandleJockey = (Id) => {
    Cookies.set('sjockey',Id)
    navigate('/trainerdetail')
  };

  const columns = [
    {
        name: "Image",
        selector: (row) => <img width={50} height={50} src={row.image} />,
      },
    {
      name: "Name",
      selector: (row) => row.Name,
      sortable: true,
    },
    {
      name: "Age",
      selector: (row) => row.Age,
    },
    {
      name: "Detail",
      selector: (row) => row.Detail,
    },
    {
        name: "Remarks",
        selector: (row) => row.Remarks,
      },
      {
        name: "details",
        selector: (row) => (
          <button className="btn" onClick={() => HandleJockey(row._id)}>
            Detailed View
          </button>
        )
      },
    
  ];
  
  return (
    <>
      <Layout />
      <div className="aboutpage">
        <div className="aboutpageheader">
          <h2>MKS Racing Trainer</h2>
        </div>
        <div className="aboutpagesection">
          <div className="horseTable">
            <DataTable
              columns={columns}
              data={trainer}
              pagination
              fixedHeader
              fixedHeaderScrollHeight="450px"
              highlightOnHover
            //   actions={<button>Export</button>}
            //   subHeader
            //   subHeaderComponent={
            //     <input
            //       type={"text"}
            //       placeholder="search"
            //       value={search}
            //       onChange={(e) => setSearch(e.target.value)}
            //     />
            //   }
            />
          </div>
        </div>
      </div>
      <Footer />
      <CoptRight />
    </>
  );
};
export default Trainer;

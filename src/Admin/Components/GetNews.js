import React, { useEffect } from "react";
import { fetchNews } from "../redux/getNewsSlice";
import { useDispatch, useSelector } from "react-redux";
import { STATUSES } from "../redux/getNewsSlice";
import Table from "react-bootstrap/Table";
import { MdDelete } from 'react-icons/md';
import { remove } from "../redux/PostNewsSlice";
const GetNews = () => {
  const dispatch = useDispatch();
  const { data: allnews, status } = useSelector((state) => state.news);
  useEffect(() => {
    dispatch(fetchNews());
  }, []);

//   const handleRemove = (Id) => {
//     dispatch(remove(Id));
// };
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
    <div
      style={{
        marginTop: "30px",
      }}
    >
          <>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Image</th>
                  <th>Title En</th>
                  <th>Title Ar</th>
                  <th>Description En</th>
                  <th>Description Ar</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                    allnews.map((item,index) => {
                        return(
                            <>
                            <tr>
                                <td>{index}</td>
                                <td><img src={item.image} alt="" /></td>
                                <td>{item.TitleEn}</td>
                                <td>{item.TitleAr}</td>
                                <td>{item.DescriptionEn}</td>
                                <td>{item.DescriptionAr}</td>
                                <td><MdDelete style={{
                                    fontSize:'22px'
                                }} /></td>
                                </tr>
                            </>
                        )
                    })
                }
              </tbody>
            </Table>
          </>
    </div>
  );
};

export default GetNews;

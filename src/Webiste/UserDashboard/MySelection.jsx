import React,{ Fragment }  from 'react'
import Header from "../Components/Reuseable/Header"
import Auth from "../Components/Reuseable/Auth"
import '../../Webiste/Components/CSS/pagesCSS/dashboard.css'
import Search from '../Components/Home/Components/Search';
import Tracker from '../Components/Home/Components/Tracker';
import Notification from '../Components/Home/Components/Notification';
import ExNews from '../Components/Home/Components/ExNews';
import Language from '../Components/Home/Components/Language';
import ScrollContainer from 'react-indiana-drag-scroll';
import Moment from 'react-moment';


const MySelection = () => {
  return (
    <Fragment>
    <div className='d-flex'>
    <Header />
    <Auth />
  </div>
  <div className="rightlayoutinner dashboardH">
    <ExNews />
    <Search />
    <Tracker />
    <Notification />
    <Language />

  </div>
<div className="userHeader">
<h3>My Selections</h3>

</div>
<div className="page">
        <div className="rightsidedata">
          <div
            style={{
              marginTop: "30px",
            }}
          >
           
            <>
              <div className="div_maintb">
                <ScrollContainer>
                  <table>
                    <thead>
                      <tr>
                        <th>Competition Name</th>
                        <th>Type</th>

                        <th>Horse Name</th>
                        <th>Selection(s)</th>
                        <th>Racecource</th>
                        <th>Race Name</th>

                        <th>Race Type</th>
                        <th>Country</th>
                        <th>Nationality</th>


                      </tr>
                    </thead>
                    <tbody>
                      {/* {currentPosts.map((item, index) => {
                        return (
                          <>
                            <tr className="tr_table_class">
                              <td>{item.NameEn}</td>
                              <td>{item.NameAr}</td>

                              <td>{item.shortCode} </td>
                              <td>{item.DescriptionEn} </td>
                              <td>{item.DescriptionAr} </td>
                              <td>
                                <img src={item.image} alt="" />
                              </td>

                              <td className="table_delete_btn1">
                                <BiEdit
                                  onClick={() =>
                                    history("/editbreeder", {
                                      state: {
                                        breederid: item,
                                      },
                                    })
                                  }
                                />
                                <MdDelete
                                  style={{
                                    fontSize: "22px",
                                  }}
                                  onClick={() => handleRemove(item._id)}
                                />
                                <BsEyeFill onClick={() => handleShow(item)
                                }/>
                              </td>
                            </tr>
                          </>
                        );
                      })} */}
                    </tbody>
                  </table>
                </ScrollContainer>
              </div>
            </>
          </div>
          <span className="plusIconStyle"></span>
          {/* <Pagination
          postsPerPage={postsPerPage}
          totalPosts={breeder.length}
          paginate={paginate}
        /> */}
        </div>
      </div>


  </Fragment>
  )
}

export default MySelection
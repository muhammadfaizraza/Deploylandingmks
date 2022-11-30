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
<div className="div_maintb">
          <ScrollContainer className="scroll-container">
            <table >
              <thead>
                <tr> 
                  <span className='userT'>             
                <th>Competition Name</th>
                <th>Type</th>
                <th>Horse Name</th>
                <th>Selection(s)</th>
                </span>
                <th>Race Course</th>
               
                <th>Race Name</th>
                <th>Race Type</th>
                <th>Country </th>
                <th>Owner</th>
            
               
           
                </tr>
              </thead>
              <tbody>
       
                    <>
                      <tr className="tr_table_class">
        
                      <span className='userT'>        
                        <td>My </td>
                        <td>Prob</td>
                        <td> <Moment fromNow ago></Moment></td>
                        <td>Done</td>
                        </span>
                        <td>Sing</td>
                      
                       <td> <Moment format="YYYY/MM/DD"></Moment></td>  
                       <td>Ok </td>
                       <td>Done </td>
                       
           
                       <td style={{maxWidth: '400px',  overflow: 'hidden',textOverflow: "ellipsis", whiteSpace: "nowrap"    }}  ></td>
                        <td style={{maxWidth: '400px',  overflow: 'hidden',textOverflow: "ellipsis", whiteSpace: "nowrap"    }}></td>
                        <td>
                          <img src='' alt="" />
                        </td>                        
                        <td className="table_delete_btn1 ">
                         
                   
                        </td>
                      </tr>
                    </>
                 
              </tbody>
            </table>
            </ScrollContainer>
            </div>
 


  </Fragment>
  )
}

export default MySelection
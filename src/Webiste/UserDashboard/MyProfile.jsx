import React, { Fragment } from "react";
import Header from "../Components/Reuseable/Header";
import Auth from "../Components/Reuseable/Auth";
import Search from "../Components/Home/Components/Search";
import ExNews from "../Components/Home/Components/ExNews";
import Notification from "../Components/Home/Components/Notification";
import Tracker from "../Components/Home/Components/Tracker";
import { fetchProfile } from "../redux/getReducer/getUserProfile";
import { Form } from "react-bootstrap";
import { FloatingLabel } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-date-picker";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getUserDetails } from "../redux/postReducer/UserPost";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { fetchnationality, STATUSES } from "../redux/getReducer/getNationality";
import Select from "react-select";
import { Country_Name, Country_NameAr } from "../Components/Reuseable/Country";
import Moment from 'react-moment';

const MyProfile = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const dispatch = useDispatch();
  const { userInfo, userToken } = useSelector((state) => state.user);
  const { data: nationality, status } = useSelector(
    (state) => state.nationality
  );
  useEffect(() => {
    if (userInfo === null) {
      dispatch(getUserDetails());
    }
  }, [userInfo, dispatch]);

  const [PassportPicture, setPassportPicture] = useState();
  const [NationalityID, setNationalityID] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [Error, setError] = useState("");

  const [state1, setState] = useState({
		FirstName: '',
    LastName:'',
    PassportNo:'',
    PhoneNumber:'',
    PassportPicture:'',
    Email: '',
    NationalityID:'',
    Address:'',
    DOB:'',
	});

  useEffect(() => {
		if (userInfo) {
			setState({
				FirstName: userInfo.data.FirstName,
        LastName: userInfo.data.LastName,
				PassportNo: userInfo.data.PassportNo,
        PhoneNumber: userInfo.data.PhoneNumber,
        Email: userInfo.data.Email,
        NationalityID: userInfo.data.NationalityID,
				Address: userInfo.data.Address,
        DOB: userInfo.data.DOB,
			});
		} else {
		}
	}, [userInfo]);
 


  const UpdateProfile = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("FirstName", state1.FirstName);
      formData.append("LastName", state1.LastName);
      formData.append("PassportNo", state1.PassportNo);
      formData.append("PhoneNumber", state1.PhoneNumber);
      formData.append("password", password);
      formData.append("Email", state1.Email);
      formData.append("DOB", state1.DOB);
      formData.append("NationalityID", state1.NationalityID);
      formData.append("Address", state1.Address);
      formData.append("PassportPicture", PassportPicture);

      const response = await axios.post(
        `${window.env.API_URL}/register`,
        formData
      );
      toast("Successfuly Registered");
      navigate("/login");
    } catch (error) {
      toast(error.response.data.message);
    }
  };


  //  if(password !== confirmpassword){
  //   setError('Password Should be matched')
  //  }
  return (
    <Fragment>
      <div className="d-flex">
        <Header />
        <Auth />
      </div>
      <div className="rightlayoutinner dashboardH">
        <ExNews />
        <Search />
        <Tracker />
        <Notification />
      </div>
      <div className="userHeader">
        <h3>My Profile</h3>
      </div>
      <div className="form">
        <form onSubmit={UpdateProfile}>
          <div className="row mainrow">
            <div className="col-sm">
              <FloatingLabel
                controlId="floatingInput"
                label="Name"
                className="mb-3"
                onChange={(e) =>
                  setState({ ...state1, FirstName: e.target.value })
                }
                name="Name"
               
              >
                <Form.Control
                  type="text"
                  value={state1.FirstName}
                  placeholder="Name"
                />
              </FloatingLabel>

              <span className="spanForm"> |</span>
            </div>

            <div className="col-sm">
              <FloatingLabel
                controlId="floatingInput"
                label="اسم"
                className="mb-3 floatingInputAr"
                // onChange={(e) => setNameAr(e.target.value)}
                //                   name="Name"
                //                   value={NameAr}
                style={{ direction: "rtl" }}
              >
                <Form.Control type="text" placeholder="اسم" />
              </FloatingLabel>
            </div>
          </div>
          <div className="row mainrow">
            <div className="col-sm">
              <FloatingLabel
                controlId="floatingInput"
                label="User Name"
                className="mb-3"
                onChange={(e) =>
                  setState({ ...state1, LastName: e.target.value })
                }
              >
                <Form.Control
                  type="text"
                  value={state1.LastName}
                  placeholder="User Name"
                />
              </FloatingLabel>

              <span className="spanForm"> |</span>
            </div>

            <div className="col-sm">
              <FloatingLabel
                controlId="floatingInput"
                label="اسم"
                className="mb-3 floatingInputAr"
                // onChange={(e) => setNameAr(e.target.value)}
                //                   name="Name"
                //                   value={NameAr}
                style={{ direction: "rtl" }}
              >
                <Form.Control type="text" placeholder="اسم" />
              </FloatingLabel>
            </div>
          </div>
          <div className="row mainrow">
            <div className="col-sm">
              <FloatingLabel
                controlId="floatingInput"
                label="Email"
                className="mb-3"
                onChange={(e) =>
                  setState({ ...state1, Email: e.target.value })
                }
              >
                <Form.Control
                  type="text"
                  value={state1.Email}
                  placeholder="User Name"
                />
              </FloatingLabel>

              <span className="spanForm"> |</span>
            </div>

            <div className="col-sm">
              <FloatingLabel
                controlId="floatingInput"
                label=""
                className="mb-3 floatingInputAr"
                // onChange={(e) => setNameAr(e.target.value)}
                //                   name="Name"
                //                   value={NameAr}
                style={{ direction: "rtl" }}
              >
                <Form.Control type="text" placeholder="" />
              </FloatingLabel>
            </div>
          </div>
          <div className="row mainrow">
            <div className="col-sm">
              <FloatingLabel
                controlId="floatingInput"
                label="Date Of Birth"
                className="mb-3"
                onChange={(e) =>
                  setState({ ...state1, DOB: e.target.value })
                }
              >
                <Form.Control
                  type="text"
                  value={state1.DOB}
                  placeholder="User Name"
                />
              </FloatingLabel>

              <span className="spanForm"> |</span>
            </div>

            <div className="col-sm">
              <FloatingLabel
                controlId="floatingInput"
                label=""
                className="mb-3 floatingInputAr"
                // onChange={(e) => setNameAr(e.target.value)}
                //                   name="Name"
                //                   value={NameAr}
                style={{ direction: "rtl" }}
              >
                <Form.Control type="text" placeholder="" />
              </FloatingLabel>
            </div>
          </div>
          <div className="row mainrow">
            <div className="col-sm">
              <FloatingLabel
                controlId="floatingInput"
                label="Passport Number"
                className="mb-3"
                onChange={(e) =>
                  setState({ ...state1, PassportNo: e.target.value })
                }
              >
                <Form.Control
                  type="text"
                  value={state1.PassportNo}
                  placeholder="User Name"
                />
              </FloatingLabel>

              <span className="spanForm"> |</span>
            </div>

            <div className="col-sm">
              <FloatingLabel
                controlId="floatingInput"
                label="اسم"
                className="mb-3 floatingInputAr"
                // onChange={(e) => setNameAr(e.target.value)}
                //                   name="Name"
                //                   value={NameAr}
                style={{ direction: "rtl" }}
              >
                <Form.Control type="number" placeholder="اسم" />
              </FloatingLabel>
            </div>
          </div>
          <div className="Updateprofile">
            <p>
              {" "}
              For updating passport number please send us email. Passport copy
              and passport number enter must match to claim prize.{" "}
            </p>
          </div>
          <div className="row mainrow">
            <div className="col-sm">
              <FloatingLabel
                controlId="floatingInput"
                label="Passport Scan Copy"
                className="mb-3"
                // onChange={(e) => setNameEn(e.target.value)}
                //                   name="Name"
                //                   value={NameEn}
              >
                <Form.Control type="file" />
              </FloatingLabel>

              {/* <span className="spanForm"> |</span> */}
            </div>
{/* 
            <div className="col-sm">
              <FloatingLabel
                controlId="floatingInput"
                label="اسم"
                className="mb-3 floatingInputAr"
                // onChange={(e) => setNameAr(e.target.value)}
                //                   name="Name"
                //                   value={NameAr}
                style={{ direction: "rtl" }}
              >
                <Form.Control type="text" placeholder="اسم" />
              </FloatingLabel>
            </div> */}
          </div>
          <div className="row mainrow">
            <div className="col-sm">
              <select
                class="form-control control1"
                id="exampleFormControlSelect1"
                onChange={(e) => setNationalityID(e.target.value)}
                name="country"
                
                required
              >
                {Country_Name.map((item) => {
                  return (
                    <option key={item.country_id} name="country">
                      {item.country_name}
                    </option>
                  );
                })}
              </select>
              {/* <span className="spanForm">|</span> */}
            </div>
{/* 
            <div className="col-sm">
              <select
                class="form-control control1"
                id="exampleFormControlSelect1"
                onChange={(e) => setNationalityID(e.target.value)}
                name="country"
                required
              >
                {Country_Name.map((item) => {
                  return (
                    <option key={item.country_id} name="country">
                      {item.country_name}
                    </option>
                  );
                })}
              </select>
              <span className="spanForm">|</span>
            </div> */}
          </div>
          <div className="row mainrow">
            <div className="col-sm">
              <FloatingLabel
                controlId="floatingInput"
                label="Address"
                className="mb-3"
                onChange={(e) =>
                  setState({ ...state1, Address: e.target.value })
                }
              >
                <Form.Control
                  type="text"
                  value={state1.Address}
                  placeholder="User Name"
                />
              </FloatingLabel>

              {/* <span className="spanForm"> |</span> */}
            </div>

            {/* <div className="col-sm">
              <FloatingLabel
                controlId="floatingInput"
                label="اسم"
                className="mb-3 floatingInputAr"
                // onChange={(e) => setNameAr(e.target.value)}
                //                   name="Name"
                //                   value={NameAr}
                style={{ direction: "rtl" }}
              >
                <Form.Control type="text" placeholder="اسم" />
              </FloatingLabel>
            </div> */}
          </div>
          <div className="row mainrow">
            <div className="col-sm">
              <FloatingLabel
                controlId="floatingInput"
                label="Password"
                className="mb-3"
                onChange={(e) => setpassword(e.target.value)}
              >
                <Form.Control type="password"
                value={password}
                placeholder="Password" />
              </FloatingLabel>

              {/* <span className="spanForm"> |</span> */}
            </div>
{/* 
            <div className="col-sm">
              <FloatingLabel
                controlId="floatingInput"
                label="اسم"
                className="mb-3 floatingInputAr"
                // onChange={(e) => setNameAr(e.target.value)}
                //                   name="Name"
                //                   value={NameAr}
                style={{ direction: "rtl" }}
              >
                <Form.Control type="text" placeholder="اسم" />
              </FloatingLabel>
            </div> */}
          </div>
          <div className="row mainrow">
            <div className="col-sm">
              <FloatingLabel
                controlId="floatingInput"
                label="Re-type Password"
                className="mb-3"
                onChange={(e) => setconfirmpassword(e.target.value)}

              
              >
                <Form.Control type="password" value={confirmpassword} placeholder="Re-type Password" />
              </FloatingLabel>

              {/* <span className="spanForm"> |</span> */}
            </div>
            <p>{Error}</p>
            {/* 
            <div className="col-sm">
              <FloatingLabel
                controlId="floatingInput"
                label="اسم"
                className="mb-3 floatingInputAr"
                // onChange={(e) => setNameAr(e.target.value)}
                //                   name="Name"
                //                   value={NameAr}
                style={{ direction: "rtl" }}
              >
                <Form.Control type="text" placeholder="اسم" />
              </FloatingLabel>
            </div> */}
          </div>

          <div className="ButtonSection">
            <button className="updateButton">Update</button>
            <button type="submit" className="SubmitButton">
              Save
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default MyProfile;

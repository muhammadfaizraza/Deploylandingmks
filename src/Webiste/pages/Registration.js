import { useEffect, useState } from "react";
import Layout from "../Components/Reuseable/layout";
import "../Components/CSS/registration.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { fetchnationality } from "../redux/getReducer/getNationality";
import { useSelector, useDispatch } from "react-redux";


const RegisterScreen = () => {

  const { data: nationality } = useSelector((state) => state.nationality);
  const dispatch = useDispatch();

  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [PassportNo, setPassportNo] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [password, setpassword] = useState("");
  const [Email, setEmail] = useState("");
  const [NationalityID, setNationalityID] = useState("");
  const [Address, setAddress] = useState("");
  const [PassportPicture, setPassportPicture] = useState();
  const [DOB, setDOB] = useState("");
  const [preview, setPreview] = useState();

  const onSelectFile = (e) => {
    setPassportPicture(e.target.files[0]);
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (!PassportPicture) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(PassportPicture);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [PassportPicture]);


  const RegisterUser = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("FirstName", FirstName);
      formData.append("LastName", LastName);
      formData.append("PassportNo", PassportNo);
      formData.append("PhoneNumber", PhoneNumber);
      formData.append("password", password);
      formData.append("Email", Email);
      formData.append("NationalityID", NationalityID);
      formData.append("Address", Address);
      formData.append("DOB", DOB);
      formData.append("PassportPicture", PassportPicture);

       await axios.post(
        `${window.env.API_URL}/register`,
        formData
      );

      toast("Successfuly Registered");
      navigate("/login");
    } catch (error) {
      toast(error.response.data.message);

    }
  };
  useEffect(() => {
    dispatch(fetchnationality());
  }, [dispatch])
 

  return (
    <>
      <Layout />
      <div className="registrationform">
        <form onSubmit={RegisterUser}>
          <div className="form-group">
            <input
              type="text"
              className="form-input"
              placeholder="First Name"
              name="FirstName"
              onChange={(e) => setFirstName(e.target.value)}
              value={FirstName}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-input"
              placeholder="Last Name"
              name="LastName"
              onChange={(e) => setLastName(e.target.value)}
              value={LastName}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-input"
              placeholder="Email"
              name="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={Email}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-input"
              placeholder="Passport No"
              name="PassportNo"
              onChange={(e) => setPassportNo(e.target.value)}
              value={PassportNo}
            />
          </div>

          <div className="form-group">
            <input
              type="number"
              placeholder="Phone Number"
              className="form-input"
              name="PhoneNumber"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={PhoneNumber}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="password"
              className="form-input"
              name="password"
              onChange={(e) => setpassword(e.target.value)}
              value={password}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              className="form-input"
              placeholder="Date of Birth"
              name="DOB"
              max="2023-01-"
              onChange={(e) => setDOB(e.target.value)}
              value={DOB}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-input"
              placeholder="Address"
              name="Address"
              onChange={(e) => setAddress(e.target.value)}
              value={Address}
              required
            />
          </div>

          <div className="form-group">
            <select
              class="form-control"
              id="exampleFormControlSelect1"
              onChange={(e) => setNationalityID(e.target.value)}
              name="country"
              required
            >
              <option >Select Nationality</option>
              {nationality.map((item) => {
                return (
                  <>
                    <option key={item._id} value={item._id} defaultValue={item._id} name="country">
                      {item.NameEn}
                    </option>
                  </>
                );
              })}
            </select>
          </div>
          <label className="PassportPicturelabel">Select Profile Image</label>
          <div className="form-group PassportPicturefile">
            <input
              type="file"
              className="form-input"
              name="PassportPicture"
              onChange={onSelectFile}
              required
            />
          </div>
          {PassportPicture && (
            <>
              <img src={preview} className="PreviewImage" alt="" />
            </>
          )}
          <button type="submit" className="buttonRegister">
            Register
          </button>
        </form>
      </div>
      {/* <Footer />
   <Copyrights /> */}
    </>
  );
};

export default RegisterScreen;

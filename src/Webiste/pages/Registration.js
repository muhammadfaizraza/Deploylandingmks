import { useEffect, useState } from 'react'
import Layout from '../Components/Reuseable/layout'
import '../Components/CSS/registration.css'
import Footer from '../Components/Reuseable/Footer';
import Copyrights from '../Components/Reuseable/Copyrights';
import axios from 'axios';
import {  toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'

const RegisterScreen = () => { 

  const [FirstName,setFirstName] = useState('');
  const [LastName,setLastName] = useState('');
  const [PassportNo,setPassportNo] = useState('');
  const [PhoneNumber,setPhoneNumber] = useState('');
  const [password,setpassword] = useState('');
  const [Email,setEmail] = useState('');
  const [PassportPicture,setPassportPicture] = useState()

  const onSelectFile = e => {
      setPassportPicture(e.target.files[0])
  console.log(PassportPicture,'image')

  }
  const navigate = useNavigate()


  const RegisterUser = async (e) => {
    e.preventDefault();
    try {
    const formData = new FormData();
    formData.append("FirstName", FirstName)
    formData.append("LastName", LastName)
    formData.append("PassportNo", PassportNo)
    formData.append("PhoneNumber", PhoneNumber)
    formData.append("password", password)
    formData.append("Email", Email)
    formData.append("PassportPicture", PassportPicture)

    const response = await axios.post(`https://mksbackendreal.herokuapp.com/api/v1/register`,formData)
    console.log(response.success,'response')
    toast('Successfuly Registered')
    navigate('/login')

    } catch (error) {
      toast(error.response.data.message)
      console.log(error.response.data.message,'error')
    }
  };

  return (
    <>
    <Layout />
   <div className='registrationform'>
   <form onSubmit={RegisterUser}>
      <div className='form-group'>
        <input
          type='text'
          className='form-input'
          placeholder='First Name'
          name="FirstName"
          onChange={(e) => setFirstName(e.target.value)}
          value={FirstName}
          required
        />
      </div>
      <div className='form-group'>
        
        <input
          type='text'
          className='form-input'
          placeholder='Last Name'
          name="LastName"
          onChange={(e) => setLastName(e.target.value)}
          value={LastName}
          required
        />
      </div>
      <div className='form-group'>
      
        <input
          type='email'
          className='form-input'
          placeholder='Email'
          name="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={Email}
          required
        />
      </div>
      <div className='form-group'>
       
        <input
          type='number'
          className='form-input'
          placeholder='Passport No'
          name="PassportNo"
          onChange={(e) => setPassportNo(e.target.value)}
          value={PassportNo}
          
        />
      </div>

      <div className='form-group'>
       
        <input
          type='number'
          placeholder='Phone Number'
          
          className='form-input'
          name="PhoneNumber"
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={PhoneNumber}
          required
        />
      </div>

      <div className='form-group'>
      
        <input
          type='text'
          placeholder='password'
          className='form-input'
          name="password"
          onChange={(e) => setpassword(e.target.value)}
          value={password}
          required
        />
      </div>
      {/* <div className='form-group'>
      
        <input
          type='text'
          placeholder='Confirm password'
          className='form-input'
          name="email"
          onChange={(e) => handleChange(e)}
          required
        />
      </div> */}
      <div className='form-group'>
      
        <input
          type='file'
          className='form-input'
          name="PassportPicture"
          onChange={onSelectFile}
          required
        />
      </div>
      <button type='submit' className='buttonRegister' >
        Register
      </button>
    </form>
   </div>
   <Footer />
   <Copyrights />
    </>
  )
}

export default RegisterScreen
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Error from '../Components/Reuseable/Error'
import { registerUser } from '../redux/postReducer/UserPost'
import Layout from '../Components/Reuseable/layout'
import '../Components/CSS/registration.css'
import Footer from '../Components/Reuseable/Footer';
import Copyrights from '../Components/Reuseable/Copyrights';

const RegisterScreen = () => {
  const [customError, setCustomError] = useState(null)

  const { loading, userInfo, error, success } = useSelector(
    (state) => state.user
  )
  const dispatch = useDispatch()

  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  useEffect(() => {
    // redirect authenticated user to profile screen
    if (userInfo) navigate('/')
    // if (success) navigate('/')
  }, [navigate, userInfo, success])

  const submitForm = (data) => {
    if (data.Password !== data.confirmPassword) {
      setCustomError('Password mismatch')
      return
    }
    data.Email = data.Email.toLowerCase()
    dispatch(registerUser(data))
    console.log("data is here",data)
  }
  
  
  return (
    <>
    <Layout />
   <div className='registrationform'>
   <form onSubmit={handleSubmit(submitForm)}>
      {error && <Error>{error}</Error>}
      {customError && <Error>{customError}</Error>}
      <div className='form-group'>
       
        <input
          type='text'
          className='form-input'
          placeholder='First Name'
          {...register('FirstName')}
          required
        />
      </div>
      <div className='form-group'>
        
        <input
          type='text'
          className='form-input'
          placeholder='Last Name'
          {...register('LastName')}
          required
        />
      </div>
      <div className='form-group'>
      
        <input
          type='email'
          className='form-input'
          placeholder='Email'
          {...register('Email')}
          required
        />
      </div>
      <div className='form-group'>
       
        <input
          type='number'
          className='form-input'
          placeholder='Passport No'
          {...register('PassportNo')}
          required
        />
      </div>

      <div className='form-group'>
       
        <input
          type='number'
          placeholder='Phone Number'
          
          className='form-input'
          {...register('PhoneNumber')}
          required
        />
      </div>

      <div className='form-group'>
      
        <input
          type='text'
          placeholder='Password'
          className='form-input'
          {...register('Password')}
          required
        />
      </div>
      <div className='form-group'>
      
        <input
          type='text'
          placeholder='Confirm Password'
          className='form-input'
          {...register('confirmPassword')}
          required
        />
      </div>
      <div className='form-group'>
      
        <input
          type='file'
          className='form-input'
          {...register('PassportPicture')}
          required
        />
      </div>
      <button type='submit' className='buttonRegister' 
      disabled={loading}>
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
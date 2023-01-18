import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate,NavLink  } from 'react-router-dom'
import { userLogin } from '../redux/postReducer/UserPost'
import {useform} from 'react-hook-form'
import {BsEyeFill} from 'react-icons/bs'
import { toast } from 'react-toastify';
import ForgetPassword from '../Components/Reuseable/ForgetPassword'
import { Modal } from "react-bootstrap";
import Layout from '../Components/Reuseable/layout'
import '../Components/CSS/registration.css'
import Footer from '../Components/Reuseable/Footer';
import Copyrights from '../Components/Reuseable/Copyrights';
import {useTranslation} from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';

const Login = () => {
  const { loading, userInfo, error ,success} = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const [customError, setCustomError] = useState(null)
  const [passwordShown, setPasswordShown] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = async () => {
    await setShow(true);
  };
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const { t } = useTranslation()

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  // redirect authenticated user to profile screen
  useEffect(() => {
    if (userInfo) {
      navigate('/dashboard')
    }
  }, [navigate, userInfo])

  const submitForm = (data) => {
    
     dispatch(userLogin(data))
    if (error) {
       toast(error)
    } else {
      toast('Email or password is incorrect')
    }
  }
  
console.log(error)
  useEffect(() => {
    if (userInfo) {
      window.location.reload(); 

      navigate('/dashboard')
    }
  }, [navigate, userInfo])

  // const AllFilled = (register.Email !== '') && (register.password !== "")
  // 
  return (
    <div className='mainlogin'>
     {/* <Layout /> */}
     <div className='headerlayout'>
     <div className={
        !show ? 'header' : 'header1'
      }>
       <div className='largemenu'>
       <div className="d-flex menuNav">
        <Link to='/'>
        <img src={t('logo')} className='logoclass' alt="img"/>
        </Link>
        <Link to='/about' className="LinkStyle">
        <p>{t('about')}</p>
        </Link>
        <Link to='/statistics' className="LinkStyle">
        <p>{t('statistics')}</p>
        </Link>
        <Link to='/racecard' className="LinkStyle">
        <p>{t('race_card')}</p>
        </Link>
        <Link to='/result' className="LinkStyle">
        <p>{t('result')}</p>
        </Link>
        <Link to='/racecourse' className="LinkStyle">
        <p>{t('race_course')}</p>
        </Link>
        <Link to='/competition' className="LinkStyle">
        <p>{t('competition')}</p>
        </Link>
        <Link to='/sponsor' className="LinkStyle">
        <p>{t('sponsors')}</p>
        </Link>
      </div>
       </div>
     
      </div>
      <div className="cta">
      <div className="auth1 ">
            <NavLink className="buttonLogin" to="/login">
            {t("Login")}
          </NavLink>
          <NavLink className="buttonSubscribe" to="/register">
          {t("Subscibe")}
          </NavLink>
          </div>
      </div>
     </div>
    
   <div className='registrationform'>
   <form onSubmit={handleSubmit(submitForm)}>

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
           type={passwordShown ? "text" : "password"}
          placeholder='Password'
          className='form-input'
          {...register('password')}
          required
        />
        {/* <div className='showIcon'> <i onClick={togglePasswordVisiblity}><BsEyeFill/></i></div> */}
      </div>
      <button type='submit' className='buttonRegister' 
      disabled={loading}>
        Login
      </button>
      <div className='ForgetPassword'>
      <p onClick={() => handleShow()}>Forget Password</p>
      </div>
      {/* <hr/> */}
    </form>
  
   </div>
   {/* <Footer/>
   <Copyrights /> */}
   <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <h2 style={{ fontFamily: "inter" }}>Forget Email </h2>
        </Modal.Header>
        <Modal.Body>
          <ForgetPassword />
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Login;
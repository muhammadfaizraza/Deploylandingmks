import React from 'react'
import '../CSS/footer.css'
import image1 from '../../assets/MKS.png'
import {Link} from 'react-router-dom';
import insta from '../../assets/Instagram.png'
import linkedin from '../../assets/LinkedIn.png'
import youtube from '../../assets/YouTube.png'
import facebook from '../../assets/Facebook.png'
import Twitter from '../../assets/Twitter Squared.png'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';


const Footer = () => {
    const {t} = useTranslation();

    const [EmailSend , setEmailSend] = useState('')

    const submit = async (event) => {
        event.preventDefault();
        try {
          const formData = new FormData();
          formData.append("email",EmailSend);
          const res = await axios.post(`${window.env.API_URL}/api/v1/addnewsletter`, formData);
          const msg = res.data.message
          toast(msg)
        } catch (error) {
          const err = error.response.data.message;
          toast(err)
        }
        setEmailSend('')
      };
  return (
    <>
      <div className='footer1'>
      <footer className="w-100 py-4 flex-shrink-0">
        <div className="container py-4">
            <div className="row gy-4 gx-5">
                <div className="col-lg-3 col-md-6">
                    {/* <h5 className="h1 text-black">FB.</h5> */}
                    <img src={image1} alt="" className='mtfooter1'/>
                    <p className="footertext1">
                    {t('Aboutsite')}
                    </p>
                </div>

                <div className="col-lg-3 col-md-6 mobiledata1">
                    <h5 className="text-white mb-3">{t('Quicklinks')}</h5>
                    <ul className="list-unstyled text-muted text-bold">
                        <li ><p><b>{t('Quicklinks')}</b></p></li>
                        <Link to='/' className="LinkStyle">
                        <li><p>{t('race_card')}</p></li>
                        </Link>
                        <Link to='/' className="LinkStyle">
                           <li><p>{t('Horses')}</p></li>
                        </Link>
                        <Link to='/competition' className="LinkStyle">
                        <li><p>{t('competition')}</p></li>
                        </Link>
                        <Link to='/jockey' className="LinkStyle">
                        <li><p>{t('Jockey')}</p></li>
                        </Link>
                        <Link to='/trainer' className="LinkStyle">
                        <li><p>{t('Trainer')}</p></li>
                        </Link>
                        <Link to='/owner' className="LinkStyle">
                        <li><p>{t('Owner')}</p></li>
                        </Link>
                        <Link to='/tracker' className="LinkStyle">
                        <li><p>{t('My_Tracker')}</p></li>
                        </Link>
                    </ul>
                </div>
                
               
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-white mb-3">Quick links</h5>
                    <ul className="list-unstyled text-muted">
                        <li><p><b>{t('Contact')}</b></p></li>
                        <li><p>{t('Location')}</p></li>
                        <li><p><a href="callto:1-800-123-4567">{t('TelePhone')}</a></p></li>
                        <li><p><a href="mailto:email@example.com" >info@mksracing.com</a></p></li>
                        <li><p>{t('followus')}</p></li>
                        <li style={{
                            display:'flex'
                        }}>
                           <a href='https://www.twitter.com/'> <img src={Twitter} alt=''/></a>
                           <a href='https://www.facebook.com/'><img src={facebook} alt=''/></a> 
                           <a href='https://www.instagram.com/'><img src={insta} alt=''/></a> 
                           <a href='https://www.linkedin.com/'><img src={linkedin} alt=''/></a> 
                           <a href='https://www.youtube.com/'><img src={youtube} alt=''/></a>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-black mb-3 mtfooter">{t('SubscribeNewsletter')}</h5>
                    <form onSubmit={submit}>
                        <div className='formclass1'>
                        <input type='email' placeholder={t('email')} onChange={(e) => setEmailSend(e.target.value)} value={EmailSend}/>
                        </div>
                        <div className='formclass2'>
                        <button type='submit'>{t('Submit')}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </footer>
      </div>
    </>
  )
}

export default Footer

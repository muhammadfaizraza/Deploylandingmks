import React from 'react'
import '../CSS/footer.css'
import image1 from '../../assets/MKS.png'
import {Link} from 'react-router-dom';
import insta from '../../assets/Instagram.png'
import linkedin from '../../assets/LinkedIn.png'
import youtube from '../../assets/YouTube.png'
import facebook from '../../assets/Facebook.png'
import Twitter from '../../assets/Twitter Squared.png'

const Footer = () => {
  return (
    <>
      <div className='footer1'>
      <footer className="w-100 py-4 flex-shrink-0">
        <div className="container py-4">
            <div className="row gy-4 gx-5">
                <div className="col-lg-4 col-md-6">
                    {/* <h5 className="h1 text-black">FB.</h5> */}
                    <img src={image1} alt="" />
                    <p className="footertext1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="col-lg-2 col-md-6">
                    <h5 className="text-white mb-3">Quick links</h5>
                    <ul className="list-unstyled text-muted text-bold">
                        <li ><p><b>Quicklinks</b></p></li>
                        <Link to='/racecard' className="LinkStyle">
                        <li><p>Race Cards</p></li>
                        </Link>
                        <Link to='/horse' className="LinkStyle">
                           <li><p>Horses</p></li>
                        </Link>
                        <Link to='/competition' className="LinkStyle">
                        <li><p>Competition</p></li>
                        </Link>
                        <Link to='/jockey' className="LinkStyle">
                        <li><p>Jockey</p></li>
                        </Link>
                        <Link to='/trainer' className="LinkStyle">
                        <li><p>Trainer</p></li>
                        </Link>
                        <Link to='/mytracker' className="LinkStyle">
                        <li><p>My Tracker</p></li>
                        </Link>
                    </ul>
                </div>
                <div className="col-lg-2 col-md-6">
                    <h5 className="text-white mb-3">Quick links</h5>
                    <ul className="list-unstyled text-muted">
                        <li><p><b>Contact</b></p></li>
                        <li><p>Dubai, UAE</p></li>
                        <li><p>+971 123 456 789</p></li>
                        <li><p>info@mksracing.com</p></li>
                        <li><p>Follow us</p></li>
                        <li style={{
                            display:'flex'
                        }}>
                            <img src={Twitter} alt=''/>
                            <img src={facebook} alt=''/>
                            <img src={insta} alt=''/>
                            <img src={linkedin} alt=''/>
                            <img src={youtube} alt=''/>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-6">
                    <h5 className="text-black mb-3">Subscribe to our Newsletter</h5>
                    <form action="#">
                        <div className='formclass1'>
                        <input type='email' placeholder='email' />
                        </div>
                        <div className='formclass2'>
                        <button>Submit</button>
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

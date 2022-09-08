import React from 'react'
import '../CSS/footer.css'
import image1 from '../../assets/MKS.png'
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
                        <li><p>Race Cards</p></li>
                        <li><p>Horses</p></li>
                        <li><p>Competition</p></li>
                        <li><p>Jockey</p></li>
                        <li><p>Trainer</p></li>
                        <li><p>My Tracker</p></li>
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
                    </ul>
                </div>
                <div className="col-lg-4 col-md-6">
                    <h5 className="text-black mb-3">Subscribe to our Newsletter</h5>
                    <form action="#">
                        <div className="input-group mb-3">
                        <input className="form-control" type="text" placeholder="email" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                            <button className="btn btn-primary" id="button-addon2" type="button"><i className="fas fa-paper-plane">Subscribe</i></button>
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

import Layout from "../Components/Reuseable/layout"
import '../Components/CSS/pagesCSS/about.css'
import Footer from '../Components/Reuseable/Footer.jsx';
import CoptRight from '../Components/Reuseable/Copyrights'

const About = () => {
  return (
    <>
    <Layout/>
    <div className="aboutpage">
      <div className="aboutpageheader">
        <h2>MKS Racing </h2>
      </div>
      <div className="aboutpagesection"></div>
    </div>
    <Footer />
    <CoptRight />
    </>
  )
}
export default About
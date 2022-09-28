import Layout from "../Components/Reuseable/layout"
import '../Components/CSS/pagesCSS/about.css'
import Footer from '../Components/Reuseable/Footer.jsx';
import CoptRight from '../Components/Reuseable/Copyrights'

const Result = () => {
  return (
    <>
    <Layout/>
    <div className="aboutpage">
      <div className="aboutpageheader">
        <h2>MKS Racing Result</h2>
      </div>
      <div className="aboutpagesection"></div>
    </div>
    <Footer />
    <CoptRight />
    </>
  )
}
export default Result
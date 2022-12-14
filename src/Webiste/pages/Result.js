import Layout from "../Components/Reuseable/layout"
import '../Components/CSS/pagesCSS/about.css'
import Footer from '../Components/Reuseable/Footer.jsx';
import CoptRight from '../Components/Reuseable/Copyrights'
import ResultComponents from '../Components/Home/Components/Result';
const Result = () => {
  return (
    <>
    <Layout/>
    <div className="aboutpage">
      <div className="aboutpageheader">
        <h2>MKS Racing Result</h2>
      </div>
      <div className="aboutpagesection resultdata">
        <ResultComponents/>
      </div>
    </div>
    <Footer />
    <CoptRight />
    </>
  )
}
export default Result
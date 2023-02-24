import Layout from "../Components/Reuseable/layout"
import '../Components/CSS/pagesCSS/about.css'
import Footer from '../Components/Reuseable/Footer.jsx';
import CoptRight from '../Components/Reuseable/Copyrights'

const Competition = () => {

  // var now = new Date()
  // let century = 20;
  // let user_age = 18;
 
  // let year = now.getFullYear();
  // let month = now.getMonth();
  // let day = now.getDay();
  // function CheckAge(a,b){
  // let dateofbirth = year - (a,b);
  // console.log(dateofbirth + "-" + month + "-"+day, 'dateofbirth')
  // }
  // CheckAge(century,user_age);


  return (
    <>
    <Layout/>
    <div className="aboutpage">
      <div className="aboutpageheader">
        <h2>MKS Racing Competition</h2>
      </div>
      <div className="aboutpagesection"></div>
    </div>
    <Footer />
    <CoptRight />
    </>
  )
}
export default Competition
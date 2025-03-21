
//import { Link , useNavigate } from "react-router-dom";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

function HomePage() {
   // const navigate = useNavigate();              <-- navigate programmaticaly
                                                   
  //function navigateHandler() {
  //        navigate('/artworks');
  //    }


    return  (
       <>
          <div>
            <Carousel/>
            <Footer />
          </div>
       </>
    )
}

export default  HomePage;


    

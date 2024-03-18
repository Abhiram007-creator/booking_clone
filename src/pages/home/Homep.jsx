import Qproperties from "../../Qproperties/Qproperties"
import PropertyList from "../../components/PropertyList/PropertyList"
import Destinations from "../../components/destination/Destinations"
import Featured from "../../components/featured/Featured"
import Featured1 from "../../components/featured/Featured1"
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import { Navbar } from "../../components/navbar/Navbar"
import Tproperties from "../../components/tproperties/Tproperties"
import Uproperty from "../../uproperty/Uproperty"
import "./homep.css"


const Homep = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <div className="homeContainer">
          <h1 className="homeTitle">Trending destinations</h1>
          <Featured/> 
          <Featured1/>
          <h1 className="homeTitle">Explore India</h1>
          <Tproperties/>
          <h1 className="homeTitle">Browse by property type</h1>    
          <PropertyList/>
          <h1 className="homeTitle">Quick and easy trip planner</h1>
          <Qproperties/>
          <h1 className="homeTitle">Homes guests love</h1>
          <FeaturedProperties/>
          <h1 className="homeTitle">Stay at our top unique properties</h1>
          <Uproperty/>
          <h1 className="homeTitle">Destinations we love</h1>
          <Destinations/>
          <MailList/>
          <Footer/>
        </div>
    </div>
  )
}

export default Homep
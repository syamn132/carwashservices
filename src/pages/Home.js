import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import "../styles/HomeStyles.css";
import Data from "../data/data";

const Home = () => {
  return (
    <Layout>
      <div>
        <div className="home" style={{ backgroundImage: `url(${Data.bgcImage})` }}>
          <div className="headerContainer" >
            <h1>Bangalore Quickest Car Wash Services</h1>
            <p>Quick and glossy! Try our express wash and wax for a speedy exterior clean with a protective wax finish. Your car will clean ASAP.</p>
            <Link to="/packages">
              <button>BOOK NOW</button>
            </Link>
          </div>
        </div>
        {/* Who We Are */}
        <div className="whoWeAreLeft" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <img src={Data.moreAboutUsImage} alt="" style={{ width: "50%" }} />
          <div style={{ textAlign: 'center', maxWidth: '40%' }}>
            <h1 style={{ backgroundColor: '#1B204E', color: 'white', marginBottom: '20px', padding: '15px', fontSize: '35px' }}>More About Us</h1>
            <p>Enjoy the shine! Our basic car wash package includes a thorough exterior wash, wheel cleaning, and a hand dry. Get your ride sparkling clean for as low as possible.</p>
          </div>
        </div>
        {/* About Work */}
        <div style={{ backgroundImage: `url(${Data.ourTeambgcImage})`, backgroundSize: 'cover' }}>
          <div className="bannerColorContainer">
            <h1 style={{ color: '#3dc071', marginBottom: '20px', paddingBottom: '15px', fontSize: '45px' }}>Our Team</h1>
            <p style={{ color: 'white', fontSize: '18px' }}>Our team is dedicated to delivering meticulous cleaning services, utilizing hands-on techniques to ensure precision in every detail. We go the extra mile to achieve the highest standards, turning even the smallest tasks into a work of excellence</p>
          </div>
        </div>
        {/* Process */}
        <div>
          <div className="processName">
            <h1 style={{ color: '#121619', margin: "30px 0 30px 0" , paddingBottom: '15px', fontSize: '45px' }}>Steps to avail our services</h1>
          </div>
          <div className="processCard">
            <div>
              <h1 style={{ color: '#3dc071', marginBottom: '15px', paddingBottom: '10px', fontSize: '25px', maxWidth: "250px" }}>Book an Appointment through the site</h1>
              <img src={Data.bookAppointmentImg} alt="Book Appointment" style={{ width: "150px", marginBottom: "25px" }} />
            </div>
            <div>
              <h1 style={{ color: '#3dc071', marginBottom: '15px', paddingBottom: '10px', fontSize: '25px', maxWidth: "250px" }}>Select the Package based on your budget</h1>
              <img src={Data.selectPackageImg} alt="Select Package" style={{ width: "150px", marginBottom: "25px" }} />
            </div>
            <div>
              <h1 style={{ color: '#3dc071', marginBottom: '15px', paddingBottom: '10px', fontSize: '25px', maxWidth: "250px" }}>Enjoy your drive in a cleaned car</h1>
              <img src={Data.enjoyDriveImg} alt="Enjoy Drive" style={{ width: "150px", marginBottom: "25px" }} />
            </div>
          </div>
        </div>
    


      </div>
    </Layout>
  );
};

export default Home;

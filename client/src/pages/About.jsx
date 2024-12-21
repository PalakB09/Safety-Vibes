import React, { useEffect } from "react";
import "../styles/about.css";
import about from "../images/img3.png";
import about2 from "../images/img4.png";
import about3 from "../images/img5.png";
import "../styles/features.css";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <section id="about" className="about_wrapper">
        <div className="container">
          <div className="features_wrapper" style={{ marginTop: "-90px" }}>
            <div className="row">
              <div className="col-12 text-center">
                <p className="features_subtitle">"Every Woman Deserves to Feel Safe – Your Safety, Our Promise"</p>
                <h2 className="features_title">About Us</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-sm-12 col-lg-5 text-center text-lg-start">
              <p className="about_number">1</p>
              <h2 className="about_title">
                Safety Vibes is here for you and your safety
              </h2>
              <p className="about_text " style={{ textAlign: "justify" }}>
              "We are committed to ensuring that every individual returns home safely. With advanced features like real-time notifications, mobile messaging, and live location tracking, we act as your trusted guardian. Your safety is our top priority, and we leve
              rage technology to provide protection when you need it most.
              In India, the safety of women and vulnerable individuals is a pressing concern. According to the National Crime Records Bureau (NCRB), a woman is raped every 15 minutes. Over 80% of women in urban areas report feeling unsafe when traveling alone at night. With such alarming statistics, we recognize the urgent need for effective safety measures. That's why we sacrifice nothing in our mission to ensure your protection. 
              Together, we can reduce these risks and create a safer environment for all."
              </p>
              {/* <div className="my-5">
                <a className="learn-more-btn" href="#cars">
                  Enrole Now
                </a>
              </div> */}
            </div>
            <div className="col-sm-12 col-lg-7 text-center text-md-start">
              <img decoding="async" src={about2} className="img-fluid" />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-sm-12 col-lg-5 text-center text-lg-start">
              <p className="about_number">2</p>
              <h2 className="about_title">
                Safety Vibes is here for you and your safety
              </h2>
              <p className="about_text " style={{ textAlign: "justify" }}>
              "We are committed to ensuring that every individual returns home safely. With advanced features like real-time notifications, mobile messaging, and live location tracking, we act as your trusted guardian. Your safety is our top priority, and we leve
              rage technology to provide protection when you need it most.
              In India, the safety of women and vulnerable individuals is a pressing concern. According to the National Crime Records Bureau (NCRB), a woman is raped every 15 minutes. Over 80% of women in urban areas report feeling unsafe when traveling alone at night. With such alarming statistics, we recognize the urgent need for effective safety measures. That's why we sacrifice nothing in our mission to ensure your protection. 
              Together, we can reduce these risks and create a safer environment for all."
              </p>
              {/* <div className="my-5">
                <a className="learn-more-btn" href="#cars">
                  Enrole Now
                </a>
              </div> */}
            </div>
            <div className="col-sm-12 col-lg-7 text-center text-md-start">
              <img decoding="async" src={about} className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="innovate mt-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-12 col-lg-6 px-5 text-center text-md-start">
                <img decoding="async" src={about3} className="img-fluid" />
              </div>
              <div className="col-sm-12 col-lg-6 text-center text-lg-start">
                <p className="about_number">3</p>
                <h2 className="about_title">Your Trusted Partner in Safety</h2>
                <p className="about_text" style={{ textAlign: "justify" }}>
                We're not just an app; we are your unwavering ally in ensuring you reach home safely. In India, the safety of women and vulnerable individuals is a growing concern. Every 15 minutes, a woman falls victim to sexual assault, according to the National Crime Records Bureau (NCRB). With over 80% of women in urban areas feeling unsafe when traveling alone at night, these statistics are a stark reminder of the challenges we face. 

At the heart of our mission, we combine cutting-edge technology with a passion for safety. Our real-time notifications, live location tracking, and emergency messaging features provide the peace of mind you deserve. We are more than just a service—we’re a movement dedicated to changing the narrative around safety. With us by your side, you are never alone. Together, we can create a future where everyone can walk freely and safely.
                </p>
                <div className="mt-5">
                  <a className="learn-more-btn btn-header" href="#brands">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </section>
    </div>
  );
};

export default About;

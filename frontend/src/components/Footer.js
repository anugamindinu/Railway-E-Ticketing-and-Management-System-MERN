import React from "react";
// import InstagramIcon from "@material-ui/icons/Instagram";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../css/Footer.css";
import logo from '../assets/logo.png';

function Footer() {
  return (
    <footer class="footer-distributed">

    <div class="footer-left">

    <img className="l" src={logo} alt='logo'/>

      <p class="footer-links">
        <a href="/" class="link-1">Home</a>
        
        <a href="#">About</a>
      
        <a href="#">Service</a>
        
        <a href="#">Contact</a>
      </p>

      <p class="footer-company-name">REMS © 2023</p>
    </div>

    <div class="footer-center">

      <div>
        <i class="fa fa-map-marker"></i>
        <p><span>Sri Lanka Railways</span> Sri Lanka Railways Headquarters,</p>
      </div>

      <div>
        <i class="fa fa-phone"></i>
        <p>Colombo 10 , Sri Lanka</p>
      </div>

      <div>
        <i class="fa fa-envelope"></i>
        <p><a href="mailto:support@company.com">Telephones : +94 11 4 600 111</a></p>
      </div>

    </div>

    <div class="footer-right">

      <p class="footer-company-about">
        <span>About the Sri Lanka Railway</span>
        The Sri Lanka Railway Department is Sri Lanka's railway owner and primary operator. As part of the Sri Lankan government, it is overseen by the Ministry of Transport.
      </p>

      <div class="footer-icons">

        <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-linkedin"></i></a>
        <a href="#"><i class="fa fa-github"></i></a>

      </div>

    </div>

  </footer>
  );
}

export default Footer;

import "./FooterStyles.css";

import React from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          {" "}
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />{" "}
            <div>
              {" "}
              <p> New Baneshwor, Kathmandu </p> <p> Nepal </p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />{" "}
              +977-9806000961
            </h4>
          </div>{" "}
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />{" "}
              alish.basnet2212@gmail.com
            </h4>
          </div>{" "}
        </div>{" "}
        <div className="right">
          <h4>Stuff yet to fill</h4>
          <p>
            euwu sldjow owjodijwo ojweoijw ojoweij wojeij ljewiwdo jdwoijd oi
            djoijw qijd onew
          </p>

          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />{" "}
            <FaTwitter
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />{" "}
            <FaLinkedin
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />{" "}
          </div>
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Footer;

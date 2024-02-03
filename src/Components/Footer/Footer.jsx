import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaLaptop } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer1">
          <div className="names">
            <div className="logo2">
            StudyZone<span style={{ color: "white" }}> Mart</span>
            </div>

            <div className="content1">
              <div className="item10">
                <div className="text-red-500">Categories</div>
                <div>
                  <Link
                    to="books"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    Books
                  </Link>
                </div>
                <div>
                  <Link
                    to="electronics"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    Electronics
                  </Link>
                </div>
                <div>
                  <Link
                    to="furniture"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    Furniture
                  </Link>
                </div>
                <div>
                  <Link
                    to="other"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    Other
                  </Link>
                </div>
              </div>
              <div className="item10">
                <div className="text-red-500">Contact no.</div>
                <div>+91 8960628583</div>
                <div className="text-red-500">Email</div>
                <div>surajchauhan8545@gmail.com</div>
                <div className="text-red-500">Location</div>
                <div>Jankipuram sector-F,Lucknow</div>
                <div>Utter Pradesh,India</div>
              </div>
            </div>
          </div>

          <div className="line-lower-footer">
            <hr id="line" />
          </div>

          <div className="LinksBelow">
            <div className="copyrights">
              <h1 className="text-below-footer text-white">
               
                   Copyright&copy;kris1729
                  
              </h1>
            </div>

 
            <div className="handles">
              <Link target="_blank"
                to="https://wa.me/8960628583"
                className="fa fa-whatsapp"
              ></Link>
              <Link target="_blank"
                to="https://www.linkedin.com/in/surajchauhan1729/"
                className="fa fa-linkedin"
              ></Link>
              <Link target="_blank"
                to="https://t.me/8960628583"
                className="fa fa-telegram"
              ></Link>
              
  
            </div>
            
          </div>

          <div className="text-white flex items-center justify-center  mb-3 text-xl">
           Made By <FaLaptop className="ml-2" /> <b className="text-white" target='_blank'>kris1729</b>
          </div>

     
                
        </div>
      </footer>
    </>
  );
}

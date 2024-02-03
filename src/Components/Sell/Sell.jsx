import React from "react";
import {FaWhatsapp , FaTelegram} from 'react-icons/fa'

function Sell() {
  return (
    <div className=" sellitem ">
      <div className="ml-6">
        <p className="text-2xl font-extrabold text-black py-5">
          Welcome to StudyZone Mart, to list any product follow these steps:
        </p>

        <div className="text-black">
          <h1 className="py-2">
            1. Snap 2-3 photos of your item from different angles to showcase
            it.
          </h1>

          <h1 className="py-2">
            {" "}
            2. Send these photos to our provided WhatsApp and Telegram numbers.
            Our team will swiftly review your listing.
          </h1>

          <h1 className="py-2">
            3. Provide key details about your product. The more information, the
            better!
          </h1>
        </div>

        <div className="text-black-500">
         <b> Join us at StudyZone Mart– selling made easy in three simple steps.
          Connect with fellow students, declutter your space, and find a new
          home for your items!.</b>
        </div>
      </div>


      <div className="flex flex-col sm:flex-row justify-evenly items-center py-7">
          <div className="mb-5 sm:mb-0">
            <div className="  bg-green-500 hover:bg-orange-400 transition ease-in-out duration-300 text-black font-bold py-2 px-4 rounded cursor-pointer">

                <a href={"https://wa.me/8960628583"} target="_blank" rel="noopener noreferrer" className="flex" >
                  <FaWhatsapp size={30} style={{ marginRight: '5px' }} />
                  <span>Join Whatsapp</span>
                </a>
                
            </div>
          </div>

          <div >
              <div className="bg-blue-600 hover:bg-orange-400 transition ease-in-out duration-300 text-black font-bold py-2 px-4 rounded cursor-pointer">

              <a href={"https://t.me/8960628583"} target="_blank" rel="noopener noreferrer" className="flex" >
                <FaTelegram size={30} style={{ marginRight: '5px' }} />
                <span>Join Telegram</span>
              </a>
                  
                </div>
          </div>
      </div>

      <div>
               


      </div>

    </div>
  );
}

export default Sell;

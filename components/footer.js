import React from "react";
// import  IoIosArrowBack  from "react-icons/io/IoIosArrowBack";

// import { Bs0Square } from "react-icons/bs";

// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";





let Footer=()=>{
    return(
        <div>
            <footer className="bg-white h-10  text-">
               <div className="flex space-x-4 justify-end mr-56 mt-28"> 
              <label className="mt-2" for="total">Row Per Page</label>

              <select className="pl-2 mt-2 bg-slate-600 " id="total" name="total"> 
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
              </select>
              <FaArrowLeft className="mt-3" />
              <FaArrowRight className="mt-3"/>



              </div>
            </footer>
        </div>
    )
}
export default Footer;
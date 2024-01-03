import React from "react";
import { useContext } from "react";
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";
import { StoreContext } from "../store/store";





let Footer=()=>{
    let values=useContext(StoreContext);
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
              <h1 className="mt-2">{values.length}</h1>
              <FaArrowLeft className="mt-3" />
              <FaArrowRight className="mt-3"/>



              </div>
            </footer>
        </div>
    )
}
export default Footer;
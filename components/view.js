import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../store/store";
import img from "../images/pd.png"
import { FaSpinner } from "react-icons/fa";
import Footer from "./footer";


let View=()=>{
     let values=useContext(StoreContext);
     const handler=()=>{
        console.log(values)
     }
     let lin=()=>{
        return (<hr/>)
     }
     const[status,setStatus]=useState(false);
     setTimeout(()=>{setStatus(true)},2000)
    return(<div>
      {!(status)?<FaSpinner className="animate-spin h-32 w-32 bg-center mt-64 mx-auto "/>:
      <div><table className=" bg-white-100 min-w-min table-fixed  columns-5xl space-x-40  " style={{border:"1px solid black", border:"1px solid black",width:"100%"}}>
         <thead className="   bg-gray-600 w-auto h-10">
            <tr>
                
            <th >Name </th>
            <th>Description</th>
            <th>CreatedOn</th>
            <th>Lastupdated</th>
            <th>status</th>
            </tr>

         </thead>
         <tbody className="">
            {values.map((data)=>{
                     return <tr >
                        
                        <td> <div className="flex space-x-2 mt-4  align-middle "> <div className=" "><img src={img} alt="pff" className="w-7 h-auto"/> </div> <div className="mt-1"> {data.name} </div></div> </td>
                        <td> <div className="mt-5"></div> <p className="mt-2"> {data.description} </p> </td>
                        <td> <div className="mt-4"></div> {data.createdOn} </td>
                        <td> <div className="mt-4"> {data.lastUpdated} </div> </td>
                        <td > <button className="bg-lime-300 w-auto p-1 rounded-xl mt-4" > {data.status} </button></td>
                        
                        
                     </tr>
            })}
    {/* <tr>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
    </tr>
    <tr>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr> */}
  </tbody>

        </table>
        <Footer/>
        </div>
        }  
        

  
        
        
    </div>)
}

export default View;
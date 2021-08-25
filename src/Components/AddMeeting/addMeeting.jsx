import React,{useContext} from "react";
import "./addMeeting.css";
import { dataContext } from "../../DataLayer/dataLayer"
import { useHistory, useLocation } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Validate from "../../utils/validator";

export default function AddMeeting(){
  const [data, setData] = useContext(dataContext);
  
  let meetingData=data;
  
  meetingData.navLabel="Add Meetings";
  setData(meetingData);
  
  function handle() {
  if(data.scheduleData.length>0){
   
    if(data.startTime==="" || data.endTime===""||data.dateText==="" || data.description ===""){
      toast("Please enter all the values");
    } 
    else if(data.endTime < data.startTime){
      toast("End time can not be greater than start time");
    }
    else if(data.endTime === data.startTime){
      toast("End Date and Start Date can not be the same");
    }
    else{
  

      if(Validate.timeinBetween(data.startTime,data.endTime,data.scheduleData)){
        toast("Slot is available");
      }
      else {
        toast("Slot is not available");
      }

    }
  }
  else{
    toast("Please go back and select date again");
  }
        
  }

    return(
     
      <>
       
      <Navbar/>
        <div className="add-meeting">
             <div className="card-meeting" >
         <div className="container-meeting">
        
 
        </div>
        <div>
        <input type="date" className="meeting" autoComplete="off" defaultValue={data.dateText}  onChange={ (event) =>{
           let copyDate=data;
           copyDate.dateText=event.target.value;
           setData(copyDate);
        }} />
       </div>
        <div>
        <input type="time" className="meeting"  defaultValue={data.startTime}  onChange={ (event) => {
           let copyDate=data;
           copyDate.startTime=event.target.value;
           setData(copyDate);
        } }  />
        <input type="time" className="meeting1"  defaultValue={data.endTime}  onChange={ (event) =>{
           let copyDate=data;
           copyDate.endTime=event.target.value;
           setData(copyDate);
        }} />
        
  </div>
  <textarea className="description" name="subject" defaultValue={data.description} onChange={
    (event) =>{
      let copyDate=data;
      copyDate.description=event.target.value;
      setData(copyDate);
    }
  }  placeholder="Type description here..." ></textarea>
 
           </div>
           
        </div>
        <button className="submit" onClick={handle} >Save</button>
        <ToastContainer />
       </> 
      
    )
}
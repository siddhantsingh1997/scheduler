import React,{useEffect,useState,useContext} from "react";
import "./homePage.css";
import {NavigateNext,NavigateBefore} from '@material-ui/icons';
import monthName from "../../utils/monthName";
import Validate from "../../utils/validator";
import DateCard from "../DateCard/dateCard";
import axios from "axios"
import { dataContext } from "../../DataLayer/dataLayer"
import { DataProvider } from "../../DataLayer/dataLayer";
import Navbar from "../Navbar/navbar";

export default function HomePage(){
  let dateObj = new Date();
  const [data, setData] = useContext(dataContext);
  let homeData=data;
  homeData.navLabel="Meetings";
  setData(homeData);
 
  let [dateTracker, setDateTracker] = useState(0);
  let [orgdate,setOrgDate]=useState(dateObj.getDate()+"  "+monthName[(dateObj.getMonth())]+"  "+dateObj.getUTCFullYear());
  let[apidate,setApiDate]=useState(dateObj.getDate()+"/"+(dateObj.getMonth()+1)+"/"+dateObj.getUTCFullYear());
  let[dataSchedule,setdataSchedule]=useState([]);
  let [validateDate,setValidateDate]=useState(false);
 
    useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get("http://fathomless-shelf-5846.herokuapp.com/api/schedule?date="+apidate.toString())
        dataSchedule=JSON.parse(JSON.stringify(result.data))
         
        setdataSchedule(dataSchedule);
      
      } catch (error) {
        console.error("error:"+error);
      }
    }
    fetchData();
  },[apidate])
  
    
    return(
      <>
      <Navbar/>
        <div className="home-page">
          <div className="home-page-wrapper">
             <div className="date-selector">
               <NavigateBefore onClick={()=>
                {
                  dateTracker=dateTracker-1;
                  setDateTracker(dateTracker)
                  dateObj.setDate(dateObj.getDate()+dateTracker);
                  orgdate=dateObj.getDate()+"  "+monthName[(dateObj.getMonth())]+"  "+dateObj.getUTCFullYear();
                  setOrgDate(orgdate)
                  apidate=dateObj.getDate()+"/"+(dateObj.getMonth()+1)+"/"+dateObj.getUTCFullYear();
                  setApiDate(apidate);
                  validateDate=Validate.PastDate((dateObj.getMonth()+1)+"/"+dateObj.getDate()+"/"+dateObj.getUTCFullYear());
                  setValidateDate(validateDate)
                
                  }} style={{ fontSize:150,color:"blue" }}/>
               <h1 className="date-text">{orgdate}</h1>
               <NavigateNext
               onClick={()=>
                {
                  dateTracker=dateTracker+1;
                  setDateTracker(dateTracker)
                  dateObj.setDate(dateObj.getDate()+dateTracker);
                  orgdate=dateObj.getDate()+"  "+monthName[(dateObj.getMonth())]+"  "+dateObj.getUTCFullYear();
                  setOrgDate(orgdate)
                  apidate=dateObj.getDate()+"/"+(dateObj.getMonth()+1)+"/"+dateObj.getUTCFullYear();
                  setApiDate(apidate);
                  validateDate=Validate.PastDate((dateObj.getMonth()+1)+"/"+dateObj.getDate()+"/"+dateObj.getUTCFullYear());
                  setValidateDate(validateDate)
                  console.log("validate",validateDate);
                  }}
               style={{ fontSize: 150,color:"blue" }}/>
             </div>
            {dataSchedule != undefined && <DateCard scheduleData={dataSchedule} pastDate={validateDate}  />} 
            
                  
          </div>
        </div>
        </>
        
    )
}
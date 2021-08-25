import React,{ useState,useContext} from "react";
import "./dateCard.css";
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import { ContactSupportOutlined } from "@material-ui/icons";
import { dataContext } from "../../DataLayer/dataLayer";

export default function DateCard({scheduleData,pastDate}){
    const [data, setData] = useContext(dataContext);
    let buttonMargin="10%";
    const history = useHistory();
    let dataCopy=data;

    function handle() {
        dataCopy.scheduleData=scheduleData;
        setData( dataCopy);
        let path = `/AddMeetings`;
        history.push(path);
      }
    
    const renderCard=(data,index)=>{
        buttonMargin=(((index+1)*7)+10).toString()+"%";
    return(
     
        
        <div className="card" style={{ marginTop:((index+1)*7).toString()+"%"}} key={index}>
         <div className="container">
          <h4><b>{data.start_time+"-"+data.end_time}</b></h4>
         <p className="text-message">{data.description}</p>
        </div>
           </div>
         
        
         
          
    )
    }

    return(
        <div className="card-wrapper">
        {scheduleData.map(renderCard)}
        <div className="box" style={{ marginTop: buttonMargin}}>
        <Button disabled={pastDate} onClick={handle} variant="contained" color="primary" style={{backgroundColor:"rgb(13, 121, 230)"}}>
        Add Meeting
      </Button>
        </div>
        </div>
        )

    
}
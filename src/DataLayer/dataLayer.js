import { FormatColorResetSharp } from "@material-ui/icons";
import React, { useState, createContext } from "react";
import monthName from "../utils/monthName";

export const dataContext = createContext();
let dateObj = new Date();




export const DataProvider = (props) => {
    const [data, setData] = useState({
      navLabel:"Meetings",
      scheduleData:[],
      dateText:dateObj.toISOString().split('T')[0],
      startTime:"12:00",
      endTime:"23:00",
      description:"Please enter any description about event"
    });
  
    return (
      <dataContext.Provider value={[data, setData]}>
        {props.children}
      </dataContext.Provider>
    );
  };
import React,{useContext} from "react";
import "./navbar.css";
import { dataContext } from "../../DataLayer/dataLayer"
import { DataProvider } from "../../DataLayer/dataLayer";  
import { LocalConvenienceStoreOutlined } from "@material-ui/icons";
export default function Navbar(){
    const [data, setData] = useContext(dataContext);
   
    return(
     
        <div className="navbar">
            <div className="navbar-wrapper">
                <div className="left">
                <img
           
            src={"https://upload.wikimedia.org/wikipedia/commons/8/86/Microsoft_Skype_for_Business_logo.png"}
            width="100%"
            height="30px"
          />
         

                </div>
                <span className="logo-label">{"Vector Agency/"+data.navLabel}</span>
            </div>
        </div>
       
    )
}
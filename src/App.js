
import './App.css';
import Navbar from "./Components/Navbar/navbar";
import HomePage from './Components/HomePage/homePage';
import AddMeeting from "./Components/AddMeeting/addMeeting";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
   
    <div className="App">
       
    
     <Router>
      <Switch>
     <Route exact path="/" component={HomePage}/>
     <Route exact path="/AddMeetings" component={AddMeeting}/>
     </Switch>
     </Router>
   
    </div>
   
  );
}

export default App;

import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar";
import {  BrowserRouter as Router,Route } from "react-router-dom"
function App() {
  return (
   <Router>
   <PreNavbar/>
   <Navbar/>
   </Router>
  );
}

export default App;

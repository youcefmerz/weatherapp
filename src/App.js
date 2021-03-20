import React from "react"
import Navbar from "./Comonents/Navbar"
import Weather from "./Comonents/Weather"
import './App.css'
const App = () => {
  
  
  return (
    <div className="App"> 
    <Navbar />
    <div className="page-content">
      <Weather />
    </div>
   
    
      </div>
  )

  }
  


export default App;

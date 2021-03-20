import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Weather =()=>{
    const WEATHER_BASE_URL = "http://api.openweathermap.org/data/2.5/weather?q="
    const API_KEY = "fea4c23781be9b16d29e7f4b6b4537d4" 
    const [input, setInput] = useState("")
    const [data, setData] = useState(null)
    const [loading , setLoading] = useState(false)
    const fetchWeather = async (city) => {
        const url = `${WEATHER_BASE_URL}${city}&APPID=${API_KEY}`
        try { 
            setLoading(true)
            const response =  await axios.get(url)
            setLoading(false)
            if(response.status === 200) {
                setData(response.data)
                console.log(response.data)
            }
        } catch (error){
            setLoading(false)
            setData(null)
            console.log("Error: ", error)
        }
    }
    
    useEffect(() => {
        fetchWeather("paris")
    })
  
  return (
    <div className="weather">
    <div style={{display:"flex" , margin:"10px"}}>
    <input type='text' name="search" placeholder='Chercher une ville'  style={{width:"70%",margin:"0"}}  onChange = {(e)=>{setInput(e.target.value)}}   />
    <button onClick={()=>{fetchWeather(input)}} style={{padding:"7px",margin:"0px"}}>Chercher</button>
    </div>
    <div>
      <img src="/sky.png" width="150px" height="150px" alt="e" />
      {loading ? ("loading")  : 
           <h5>{data.name}</h5>  }
    </div>
    <div style={{display:"flex"}} >
       <div style={{padding:"15px", flex:'1'}}>
           <h5>Temperatures </h5>
           <p>  {parseInt(data.main.temp-273.15)} </p>
       </div>
       <div style={{padding:"15px" , flex:'1'}}>
           <h5>Weather </h5>
           <p>  {data.weather[0].description}      </p>
       </div>
       <div style={{padding:"15px", flex:'1'}}>
           <h5>Wind </h5>
           <p>  {`${data.wind.speed} KM/H`}           </p>
       </div>
    </div>
 </div>  
      
  )

  }
  
export default Weather;

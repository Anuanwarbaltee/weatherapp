import { useState } from 'react'
import { FaSistrix } from 'react-icons/fa/index.esm';
import { FaLocationCrosshairs } from "react-icons/fa6";

import axios from 'axios';
import './App.css'

function App() {
  const [location, setLocation] = useState("")
  const [data , setData] = useState("")
const apiKey = "40d543785b7ec844b2898112c06e272f";
 const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`
 const FindCity = async () => {
  if (location !== '') {
    try {
      const response = await axios.get( url);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  setLocation("");
};


console.log(data);
  return (
    <>
  <div className='Body'>
    <div className='SearchContainer'>
      <input placeholder='Enter Your Location Name' value={location} onChange={(e)=> setLocation(e.target.value)}/>
      <FaSistrix className='icon' onClick={FindCity}/>
    </div>
   
     <div>
      <h3>{data.main? `${data.main.temp}` : null}°F </h3>
     </div>
     <div className='cardContainer'>
      <div className='Cards'>
      <div>
     <div>
     <FaLocationCrosshairs />
     </div>
     <span>{data.name && data.sys ? `${data.name} (${data.sys.country})` : 'Location....'}</span>
     <div>
     <span>Sea Level </span>
        <span> {data.main? ` ${data.main.sea_level}`: null}</span>
     </div>
     </div>
      </div>
      <div className='Cards'>
      
        <div>
        <span>Humidity  </span>
        <span> {data.main? ` ${data.main.humidity}`: null}</span>
        </div>
        <div>
        <span>Weather </span>
        <span> {data.weather? ` ${data.weather[0].description}`: null}</span>
        </div>
        <div>
        <span>Visibility </span>
        <span> {data.visibility? ` ${data.visibility}`: null}</span>
        </div>
      </div>
      <div className='Cards'>
      <div>Wind</div>
      <div>
        <span>Speed </span>
        <span> {data.wind? ` ${data.wind.speed}`: null}</span>
      </div>
      <div>
        <span>Deg</span>
        <span> {data.wind?`${data.wind.deg}`: null}</span>
      </div>
      <div></div>
      </div>
     </div>
  </div>
    </>
  )
}

export default App

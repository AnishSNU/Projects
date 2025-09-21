import React,{useState} from "react";
import TemperatureDisplay from "./TemperatureDisplay";
import TemperatureInput from "./TemperatureInput";
import TemperatureControls from "./TemperatureControls";
export default function App()
{
  const [celsius,setCelsius]=useState(0);
  const farenheit=(celsius*9)/5+32;
  const handleInputChange=(value)=>
  {
    setCelsius(Number(value));
  };
  const increaseTemp=()=>setCelsius(celsius+1);
  const decreaseTemp=()=>setCelsius(celsius-1);
  return
  (
    <div style={{textAlign:"center",marginTop:"50px"}}>
      <h1>Temperature Converter</h1>
      <TemperatureDisplay celsius={celsius} farenheit={farenheit}/>
      <TemperatureInput celsius={celsius} onCelsiusChange={handleInputChange}/>
      <TemperatureControls onIncrease={increaseTemp} onDecrease={decreaseTemp}/>
    </div>
  )
}
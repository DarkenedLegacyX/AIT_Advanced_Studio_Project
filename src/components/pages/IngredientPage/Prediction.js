import React, { useState, useEffect } from 'react';
import '../../../App.css';
import NavbarLoggedIn from '../../NavbarLoggedIn';
import { LineChart, XAxis,YAxis, Tooltip, Line, CartesianGrid, ResponsiveContainer } from 'recharts'



function Prediction() {
    const [currentTime, setCurrentTime] = useState(0);
    const [predictedValue, setPredictedValue] = useState(0);
    const [prevState, setState] = useState([]);
    
  
  
    useEffect(() => {
      addMilk();
    },[]);
  
    
    
  
  async function addMilk() {
      var Day = prompt("Day of prediction");
      var weather = prompt("Weather rating 1-700");
      var pedestrian = prompt("Number of pedestrian");
      var promotion = prompt("Promotion Available(1 or 0)");
  
      let data = {
        'Day':Day,
        'weather':weather,
        'pedestrian':pedestrian,
        'promotion':promotion
      };
      var request = new Request('http://localhost:5000/logisticRegressionPrediction', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(data)
      });
      //htmlrequest
     await fetch(request).then(function (response) {
        response.json().then(function (data) {
          console.log('helo');
          console.log(data.completeAdd);
          setCurrentTime(data.predValue);
        })
      })
    };
  

 
    
   return (
   <>
  <NavbarLoggedIn />
       <h1>Prediction Page</h1>
       <h1>Will you reach your target based on parameters you entered? </h1>
       <h1>The answer is(1 for yes and 0 for no): {currentTime}  </h1>
       <h1>Change your parameters to suit your business if the answer is 0 </h1>
       
       <div className='ingredinfo'>
        <h1>Thanks</h1>
       </div>
       <div>
 
       </div>
   </>
   );
}
export default Prediction;
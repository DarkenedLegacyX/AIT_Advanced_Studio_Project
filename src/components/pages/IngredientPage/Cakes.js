import React, { useState, useEffect } from 'react';
import '../../../App.css';
import NavbarLoggedIn from '../../NavbarLoggedIn';
import { LineChart, XAxis, Tooltip, Line, CartesianGrid, ResponsiveContainer,YAxis } from 'recharts'



function Cakes() {
    //const [currentTime, setCurrentTime] = useState(0);
    const [predictedValue, setPredictedValue] = useState(0);
   const [prevState, setState] = useState([]);
   
 
 
   useEffect(() => {
     addMilk();
   },[]);
 
   
   
 
 async function addMilk() {
     var coffee = prompt("number of COFFEE sold");
     var day = prompt("Which day would you like to analyse?");
     
 
     let data = {
       'Reference': 'coffee',
       'Predict': 'cakes',
       'RefSold': coffee,
       'Day':day,
     };
     var request = new Request('http://localhost:5000/linearMonday', {
       method: 'POST',
       headers: new Headers({ 'Content-Type': 'application/json' }),
       body: JSON.stringify(data)
     });
     //htmlrequest
    await fetch(request).then(function (response) {
       response.json().then(function (data) {
         console.log('helo');
         console.log(data.completeAdd);
         setPredictedValue(data.completeAdd);
         setState(data.cookieList);
 
         console.log(data.cookieList);
         console.log(prevState);
       })
     })
   };
 
   function testFunc(){
     console.log(prevState);
 
   }

   
  return (
  <>
 <NavbarLoggedIn />
      <h1>Cake Data</h1>
      <h1>Predicted Cakes Value: {predictedValue}</h1>
      
      <ResponsiveContainer width="99%" aspect={3}>
        <LineChart
          width={400}
          height={400}
          data={prevState}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <YAxis type="number" domain={[0, 200]}/>
          <XAxis dataKey="Mondays"/>
          <Tooltip />
          <CartesianGrid stroke="#f5f5f5" />
          <Line type="monotone" dataKey="sales" stroke="#ff7300" yAxisId={0} />

        </LineChart>
      </ResponsiveContainer>
      <div className='ingredinfo'>
        <p>Amount to order next time: {predictedValue}</p>
      </div>
      <div>

      </div>
  </>
  );
}
export default Cakes;
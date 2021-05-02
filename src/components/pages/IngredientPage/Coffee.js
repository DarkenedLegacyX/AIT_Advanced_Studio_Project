import React, { useState, useEffect }  from 'react';
import '../../../App.css';
import NavbarLoggedIn from '../../NavbarLoggedIn';
import './Ingredient.css'
import { LineChart, XAxis, Tooltip,YAxis, Line, CartesianGrid, ResponsiveContainer } from 'recharts'
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
function Coffee() {
  


  //const [currentTime, setCurrentTime] = useState(0);
  const [predictedValue, setPredictedValue] = useState(0);
  const [prevState, setState] = useState([]);
  


  useEffect(() => {
    addMilk();
  },[]);

  
    
  
  

  

async function addMilk() {
    var Day = prompt("Enter your day of analysis");


    let data = {
      'Day': Day
    };
    var request = new Request('http://localhost:5000/coffeeTime', {
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
      <h1>Coffee Data</h1>
      <h1>Predicted Value: {predictedValue}</h1>

      <ResponsiveContainer width="99%" height="100%" aspect={3}>
        <LineChart
          width={400}
          height={10000}
          data={prevState}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <YAxis type="number" domain={[0, 200]}/>
          <XAxis dataKey="Mondays" />
          <Tooltip />
          <CartesianGrid stroke="#f5f5f5" />
          <Line type="monotone" dataKey="sales" stroke="#ff7300" yAxisId={0} />

        </LineChart>
      </ResponsiveContainer>
      <div className='ingredinfo'>
        <h1>In Stock</h1>
        <p>Current Amount: 30</p>
        <p>Amount to order next time: 10</p>

      </div>
      <div>

      </div>
    </>
  );
}
export default Coffee;
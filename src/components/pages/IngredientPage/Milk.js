import React from 'react';
import '../../../App.css';
import NavbarLoggedIn from '../../NavbarLoggedIn';
import './Ingredient.css'
import { LineChart, XAxis, Tooltip, Line, CartesianGrid, ResponsiveContainer } from 'recharts'

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

function Milk() {
  return (
    <>
      <NavbarLoggedIn />
      <h1>Milkity Milk Milk</h1>
      <ResponsiveContainer width="99%" aspect={3}>
        <LineChart
          width={400}
          height={400}
          data={data}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <Tooltip />
          <CartesianGrid stroke="#f5f5f5" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
          <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
        </LineChart>
      </ResponsiveContainer>
      <div className='ingredinfo'>
        <h1>In Stock</h1>
        <p>Current Amount: 30</p>
        <p>Amount to order next time: 10</p>
      </div>
    </>
  );
}
export default Milk;
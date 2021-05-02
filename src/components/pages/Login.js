import React, { useState } from 'react';
import '../../App.css';
import './Login.css'
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import LoginForm from '../LoginForm';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

function Login() {
  const adminUser = {
    email: "AitAdmin@StockBot.com",
    password: "1"
  }

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  
  // async function addMilk() {
  //   var Day = prompt("Enter your day of analysis");


  //   let data = {
  //     'Day': Day
  //   };
  //   var request = new Request('http://localhost:5000/validation', {
  //     method: 'POST',
  //     headers: new Headers({ 'Content-Type': 'application/json' }),
  //     body: JSON.stringify(data)
  //   });
  //   //htmlrequest
  //  await fetch(request).then(function (response) {
  //     response.json().then(function (data) {
  //       console.log('helo');
  //       console.log(data.completeAdd);
  //       setPredictedValue(data.completeAdd);
  //       setState(data.cookieList);

  //       console.log(data.cookieList);
  //       console.log(prevState);
  //     })
  //   })
  // };


  const Login = details =>  {
  console.log(details);

    let data = {
      'useremail': details.email,
      'password': details.password
    };
    var request = new Request('http://localhost:5000/validation', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(data)
    });

    //htmlrequest
    fetch(request).then(function (response) {
      response.json().then(function (data) {
          if(data.acc == "NULL"){
            console.log("Details do not match.");
             setError("Details do not match.");
          }else{
            setUser({
              name: details.name,
              email: details.email
            });
          }
      })
    })


    // if (details.email == adminUser.email && details.password == adminUser.password) {

    //   setUser({
    //     name: details.name,
    //     email: details.email
    //   });

    // }
    // else {
    //   console.log("Details do not match.");
    //   setError("Details do not match.");
    // }

  }

  const Logout = () => {
    console.log("Logout");
    setUser({
      name: "",
      email: ""
    });
  }



  return (
    <>
      <Navbar />
      <div className="Login">

        {(user.email != "") ? (
          <div className="welcome">
            <h2>Welcome, <span>{user.name}</span></h2>
            <Link to="/app-home"><button> Enter </button></Link>
            <button onClick={Logout}> Logout </button>
          </div>
        ) : (
          <LoginForm Login={Login} error={error} />
        )}

      </div>
      <Footer />
    </>
  );
}
export default Login;

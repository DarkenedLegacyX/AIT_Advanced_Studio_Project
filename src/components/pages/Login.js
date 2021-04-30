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
    //hi test
    //hi
  }
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password) {

      setUser({
        name: details.name,
        email: details.email
      });

    }
    else {
      console.log("Details do not match.");
      setError("Details do not match.");
    }

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

import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import NavbarLoggedIn from '../NavbarLoggedIn';


export default function Services() {

  function addProduct() {
    var coffee = prompt("enter coffee quantity");
    var day = prompt("enter day today in numbers(1-7)");
    var cakes = prompt("enter cakes quantity");
    var pies = prompt("enter pies");
    var cookies = prompt("enter cookies");
    var smoothies = prompt("enter smoothies");
    let data = {
        Coffee: coffee,
        Day: day,
        Cakes: cakes,
        Pies: pies,
        Cookies: cookies,
        Smoothies: smoothies
    };
    var request = new Request('http://localhost:3001/api/new-product', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(data)
    });
    //htmlrequest
    fetch(request).then(function (response) {
        response.json().then(function (data) {
            console.log('helo');
            console.log(data);
        })
    })
};

function logisticRegressionFunc(){


}

return (
    <div className='App'>
        <NavbarLoggedIn />
        <button class="button" onClick={addProduct.bind(this)}> Update Daily Sales </button>
    </div>
);

}

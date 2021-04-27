import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import NavbarLoggedIn from '../NavbarLoggedIn';


export default function Services() {
  function addProduct() {
    var name = prompt("enter name");
    var type = prompt("enter type");
    var price = prompt("enter price");
    var quantity = prompt("enter quantity");
    let data = {
        product_name: name,
        product_type: type,
        product_price: price,
        product_quantity: quantity
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

return (
    <div className='App'>
        <NavbarLoggedIn />
        <button onClick={addProduct.bind(this)}>Add Product</button>
        
    </div>
);

}

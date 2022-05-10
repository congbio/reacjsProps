import logo from "./logo.svg";
import React, { useEffect, useReducer } from "react";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import Card from "./Card";

function App() {
  const [listProduct,setListProduct] = useState([]);
  const getData = () => {
    axios.get("https://61bc10bcd8542f001782451a.mockapi.io/item")
      .then((res) => {
        setListProduct(res.data);
      });
  }
  useEffect(() => {
    console.info(Math.random())
    getData()
  },[])
  // study state in funtion component in reactjs
  
  return (
    <>
    {/* ?show about use state function in react */}
      <h1>Welcome... {user.firstName} {user.lastName}</h1>
      <input type="button" value="Change First Name" onClick={changeFn}></input>
      <br />
      <input type="button" value="Change Last Name" onClick={changeLn}></input>
      { <div class = "row">
        {listProduct.map(
        (product) => 
          <Card image={product.image} nameItem = {product.nameItem} price = {product.price}/>

        )}
      </div> }
    </>
  );


}

export default App;
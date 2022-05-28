import Show from "./iterm";
import { useState } from "react";
import axios from "axios";
import React, { useEffect, useReducer } from "react";

    function App() {
        const [listProduct,setListProduct] = useState([]); 
        const getData = () => {
        axios.get("https://61bc131bd8542f0017824588.mockapi.io/a/arrayproducts")
        .then((res) => {
                setListProduct(res.data);
            });
        }
        useEffect(() => {
            getData();
            console.log(getData());
        },[])
         

       
        return (
            <>
            {
            listProduct.map((product) => (
                    <Show
                    image={product.avatar}
                    nameItem={product.name}
                    price={product.price}
                    />  
                ))
            }
           
            </>
        );
    }


    export default App;




import Card from "./iterm";
import { useState } from "react";
import axios from "axios";
import React, { useEffect, useReducer } from "react";

    function App() {
        const [listProduct,setListProduct] = useState([]); 
        const [type, setType] = useState('') 

        const getData = () => {
        axios.get("https://61bc131bd8542f0017824588.mockapi.io/a/arrayproducts")
        .then((res) => {
                setListProduct(res.data);
            });
        }
        useEffect(() => {
            console.info(Math.random())
            getData()
        },[])
         

        const changeTypeProduct=(type)=>{
        
            setType(type)
        }
        return (
            <>

            <button onClick={() => {changeTypeProduct("nhan");}}>Nhẫn</button>
            <button onClick={() => {changeTypeProduct("daychuyen");}}>dây chuyền</button>
            <button onClick={() => {changeTypeProduct("dongho");}}>Đồng hồ</button>
            <button onClick={() => {changeTypeProduct("vongtay");}}>Vòng tay</button>
            <button onClick={() => {changeTypeProduct("bongtai");}}>Bông tai</button>
            <div class="row">
            {
            type == ""
                ? listProduct.map((product) => (
                    <Card
                    image={product.avatar}
                    nameItem={product.name}
                    price={product.price}
                    />
                ))
                : listProduct
                    .filter((product) => product.type == type)
                    .map((product) => (
                    <Card
                    image={product.avatar}
                    nameItem={product.name}
                    price={product.price}
                    />
                ))
            }
            </div>
            </>
        );
    }


    export default App;




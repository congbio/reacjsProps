import axios from "axios";
import React, { useEffect, useState } from "react";
import ItermLeft from "./Itemleft";

const Left = () => {
  const [listProduct, setListProduct] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  console.log("re-render");
  //   console.log(listProduct);
  useEffect(() => {
    const getData = () => {
      axios
        .get("https://629378507aa3e6af1a0be0a9.mockapi.io/ArrayNew")
        .then((res) => {
          setListProduct(res.data);
          setIsLoaded(true);
        });
    };
    // console.info(Math.random())
    if (!isLoaded) getData();
  }, [isLoaded]);
  const Last = () => {
    const result = listProduct.filter(
      (product) => product.type === "trong nuoc"
    );
    
    return (
      <div className="card mt-5" style={{ width: "100%" }}>
        <img src={result[result.length - 1].img} className="card-img-top" alt="img" />
        <div className="card-body">
          <p className="card-text">
		        {result[result.length - 1].title}
          </p>
        </div>
      </div>
    );
  };
  const Last2 = () => {
    console.log("list products", listProduct);
    const result = listProduct.filter(
      (product) => product.type === "ngoai nuoc"
    );
    return (
      <div className="card mt-5" style={{ width: "100%" }}>
        <img src={result[result.length - 1].img} className="card-img-top" alt="img" />
        <div className="card-body">
          <p className="card-text">
		        {result[result.length - 1].title}
          </p>
        </div>
      </div>
    );
  };
  
  if (isLoaded)
    return (
      <div className="col-lg-10 col-sm-10 col-md-10">
        <div className="row">
        <h2> Trong nuoc</h2>

          <div className="col col-lg-6 col-sm-6 col-md-6"> <Last/> </div>
          <div className="col col-lg-6 col-sm-6 col-md-6 mt-5 " style={{ height: "400px",overflow: "scroll"}}>
            {listProduct
              .filter((product) => product.type === "trong nuoc")
              .map((product) => {
                console.log(product.id);
                return (
                  <ItermLeft
                    image={product.img}
                    nameItem={product.content}
                    key={product.id}
                  />
                );
            })}
          </div>
        </div>
        <br />
        <div className="row">
        <h2> Ngoai nuoc</h2>
          <div className="col col-lg-6 col-sm-6 col-md-6">
            <Last2/>
          </div>
          <div className="col col-lg-6 col-sm-6 col-md-6 mt-5"   style={{ height: "400px",overflow: "scroll"}}>
            {listProduct
              .filter((product) => product.type === "ngoai nuoc")
              .map((product) => {
                console.log(product.id);
                return (
                  <ItermLeft
                    image={product.img}
                    nameItem={product.title}
                    key={product.id}
                  />
                );
              })}
          </div>
        </div>
      </div>
    );
  else {
    return <div>Loading...</div>;
  }
};
export default Left;

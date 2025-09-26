import ProductList from "../components/ProductList";
import { useState, useEffect, useRef } from "react";
const Shop = () => {
  const [url, setUrl] = useState("http://localhost:8080/api/v1/products");
  const [localdata, setLocaldata] = useState();
  const getData = async () => {
    const response = await fetch(url, {
      method: "GET",
    });
    const data = await response.json();
    setLocaldata(data);
  };
  useEffect(() => {
    getData();
  }, [url]);
  return (
    <div>
      <ProductList />
    </div>
  );
};

export default Shop;

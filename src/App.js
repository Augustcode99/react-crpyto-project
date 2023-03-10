import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import Coins from "./components/Coins";

function App() {
  const [coins, setCoins] = useState([]);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false";
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Coins coins={coins} />
    </>
  );
}

export default App;

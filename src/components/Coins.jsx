import React from "react";
import { Container } from "react-bootstrap";
import "./coins.css";
import CoinsMap from "./CoinsMap";

function Coins(coins) {
  return (
    <Container className="">
      <div>
        <div className="heading">
          <p>#</p>
          <p>Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p>Volume</p>
          <p>Mkt Cap</p>
        </div>
        {coins.coins.map((coins) => {
          return <CoinsMap coins={coins} key={coins.id} />;
        })}
      </div>
    </Container>
  );
}

export default Coins;

import React from "react";
// import "/coins.css";

function CoinsMap({ coins }) {
  return (
    <div className="map-row">
      <p>{coins.market_cap_rank}</p>
      <div className="d-flex">
        <img src={coins.image} alt={coins.symbol} width="50px" />
        <p>{coins.symbol}</p>
      </div>
      <p>${coins.current_price}</p>
      <p>{coins.price_change_percentage_24h}</p>
      <p>{coins.total_volume}</p>
      <p>{coins.market_cap}</p>
    </div>
  );
}

export default CoinsMap;

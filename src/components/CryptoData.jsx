import React, { useState, useEffect } from 'react';
import './CryptoData.css'; // For styling the component

const CryptoData = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch cryptocurrency data from an API (for example, CoinGecko or CoinMarketCap)
    const fetchCryptoData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets', {
          params: { vs_currency: 'usd', order: 'market_cap_desc', per_page: 10, page: 1 }
        });
        const data = await response.json();
        setCryptoData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cryptocurrency data:', error);
        setLoading(false);
      }
    };

    fetchCryptoData();
  }, []); // Empty dependency array to fetch data only once

  return (
    <section className="crypto-data-container">
      <h2 className="crypto-title">Top Cryptocurrencies</h2>
      {loading ? (
        <div className="loading-spinner">Loading...</div>
      ) : (
        <div className="crypto-cards">
          {cryptoData.map((coin) => (
            <div className="crypto-card" key={coin.id}>
              <img
                src={coin.image}
                alt={coin.name}
                className="crypto-image"
              />
              <h3 className="crypto-name">{coin.name}</h3>
              <p className="crypto-symbol">{coin.symbol.toUpperCase()}</p>
              <p className="crypto-price">${coin.current_price.toLocaleString()}</p>
              <p
                className={`crypto-change ${coin.price_change_percentage_24h < 0 ? 'negative' : 'positive'}`}
              >
                {coin.price_change_percentage_24h.toFixed(2)}% (24h)
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default CryptoData;

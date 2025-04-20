import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './LiveCrypto.css';

const COINS = ['bitcoin', 'ethereum', 'ripple', 'cardano', 'litecoin'];

const LiveCrypto = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        setLoading(true);
        const url = '/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';
        const response = await fetch(url);
        const { data } = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              ids: COINS.join(','),
              order: 'market_cap_desc',
              sparkline: false,
            },
          }
        );
      

        setCryptoData(data);
      } catch (err) {
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCryptoData();
    const interval = setInterval(fetchCryptoData, 60000); // update every 60 sec
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <div className="livecrypto-loader">Loading live crypto data...</div>;
  }

  return (
    <section className="livecrypto-container">
      <h2 className="livecrypto-title">Live Crypto Prices</h2>
      <div className="livecrypto-grid">
        {cryptoData.map((coin) => (
          <div key={coin.id} className="livecrypto-card">
            <div className="card-header">
              <img src={coin.image} alt={coin.name} className="coin-icon" />
              <div>
                <h3 className="coin-name">{coin.name}</h3>
                <p className="coin-symbol">{coin.symbol.toUpperCase()}</p>
              </div>
            </div>
            <div className="card-body">
              <p className="coin-price">${coin.current_price.toLocaleString()}</p>
              <p
                className={`coin-change ${
                  coin.price_change_percentage_24h >= 0 ? 'positive' : 'negative'
                }`}
              >
                {coin.price_change_percentage_24h >= 0 ? '▲' : '▼'}{' '}
                {coin.price_change_percentage_24h.toFixed(2)}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LiveCrypto;

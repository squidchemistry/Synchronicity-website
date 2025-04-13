import React, { useEffect, useState } from 'react'

const CryptoData = () => {
  const [crypto, setCrypto] = useState([])

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
      .then(res => res.json())
      .then(data => setCrypto(data.slice(0, 5))) // top 5
  }, [])

  return (
    <section>
      <h2>Live Crypto Prices</h2>
      <ul>
        {crypto.map(c => (
          <li key={c.id}>
            {c.name} ({c.symbol.toUpperCase()}): ${c.current_price}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default CryptoData

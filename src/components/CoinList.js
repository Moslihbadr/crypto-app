import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"

const CoinList = () => {

  const [ coins, setCoins ] = useState([]) 

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
    .then((response) => {
    setCoins(response.data)
  })
  }, [])

  return (
    <div className="App container-fluid">
    <header className="mt-4 mb-3">
      <h1 className="text-light text-center">Cryptocurrency  App</h1>
      <SearchBar />
    </header>
    <div className="table-responsive">
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Symbol</th>
            <th scope="col">Price</th>
            <th scope="col" title="price change percentage 24h">PCP/24h</th>
            <th scope="col">Market cap</th>
            <th scope="col">More Details</th>
          </tr>
        </thead>
        <tbody>
          {coins.map(coin => (
            <tr key={coin.id}>
              <th>{coin.market_cap_rank}</th>
              <th><img src={coin.image} alt="coin"/></th>
              <td>{coin.name}</td>
              <td>{coin.symbol.toUpperCase()}</td>
              <td>${coin.current_price.toFixed(2)}</td>
              <td className={coin.price_change_percentage_24h < 0 ? "text-danger" : "text-success"}>{coin.price_change_percentage_24h.toFixed(2)}%</td>
              <td>${coin.market_cap.toLocaleString('en-US', { style: 'decimal' })}</td>
              <td><Link to={`/coins/${coin.id}`} >View</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
} 

export default CoinList
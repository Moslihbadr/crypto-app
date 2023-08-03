import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import SearchBar from "../components/SearchBar"
import Swal from 'sweetalert2'


const CoinList = () => {

  const [ coins, setCoins ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true)
  const [ filteredCoins, setFilteredCoins ] = useState(coins)

  useEffect(() => {
    getDataCoins()
  }, []);

  const filterCoins = (searchInput) => {
    const filtered = coins.filter((coin) => coin.name.toLowerCase().includes(searchInput.toLowerCase()));

    setFilteredCoins(filtered);
  };

  const getDataCoins = () => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
    .then((response) => {
      setCoins(response.data)
      setIsLoading(false)
    })
    .catch(() => {
      Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text: 'Something went wrong.',
        showCloseButton: true,
      })
    });
  }

  return (
    <div className="App container-fluid">
    <header className="mt-4 mb-3">
      <h1 className="text-light text-center">Cryptocurrency  App</h1>
      <SearchBar getDataCoins={getDataCoins} filterCoins={filterCoins} />
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
        {isLoading && (
          <tr>
            <td colSpan={8}>
              <div className="text-center mt-4">
                <div className="spinner-border" role="status"></div>
              </div>
            </td>
          </tr>
        )}
          {(filteredCoins.length === 0 ? coins : filteredCoins).map(coin => ( // if the filteredCoins array is empty we loop through the coins array
            <tr key={coin.id}>
              <td>{coin.market_cap_rank}</td>
              <td><img src={coin.image} alt="coin"/></td>
              <td>{coin.name}</td>
              <td>{coin.symbol.toUpperCase()}</td>
              <td>${coin.current_price.toFixed(2)}</td>
              <td className={coin.price_change_percentage_24h < 0 ? "text-danger" : "text-success"}>
              {coin.price_change_percentage_24h < 0 ? (
                <svg className="me-2" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                <path
                  d="M384 352c-17.7 0-32 14.3-32 32s14.3 32 32 32H544c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32s-32 14.3-32 32v82.7L342.6 137.4c-12.5-12.5-32.8-12.5-45.3 0L192 242.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0L320 205.3 466.7 352H384z"
                  fill="#dc3545"
                />
              </svg>
              ) : (
                <svg className="me-2" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                  <path
                    d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V205.3L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160H384z"
                    fill="#1c874a"
                  />
                </svg>
                
              )}
              {coin.price_change_percentage_24h.toFixed(2)}%
            </td>
              <td>${coin.market_cap.toLocaleString('en-US', { style: 'decimal' })}</td>
              <td className="me-3"><Link className="btn btn-outline-primary ms-3" to={`/coins/${coin.id}`} >View</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
} 

export default CoinList
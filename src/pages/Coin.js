import { useLoaderData } from "react-router-dom"

const Coin = () => {
  const data = useLoaderData();

  return (
    <div className="mt-5 container">
    <div className="card text-center text-light bg-transparent border-light ">
      <div className="card-header border-light d-flex justify-content-center">
        <h1>{data.name}</h1>
        <span className="badge bg-secondary">Rank #{data.market_cap_rank}</span>
      </div>
      <div className="card-body d-flex align-items-center">
        <div className="coin-price container d-flex justify-content-between">
          <h4 className="text-light coin-name"><img src={data.image.large} alt="coin" width={50}/> {data.name} <span>({data.symbol.toUpperCase()}/USD)</span> </h4>
          <h4 className="mt-2">${data.market_data.current_price.usd.toLocaleString('en-US', { style: 'decimal' })}</h4>
        </div>
      </div>
      <div className="table-responsive ms-1 mt-3">
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">1h</th>
              <th scope="col">24h</th>
              <th scope="col">7d</th>
              <th scope="col">14d</th>
              <th scope="col">30d</th>
              <th scope="col">1y</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.market_data.price_change_percentage_1h_in_currency.usd ? data.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2) : 0}%</td>
              <td>{data.market_data.price_change_percentage_24h_in_currency.usd ? data.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2) : 0}%</td>
              <td>{data.market_data.price_change_percentage_7d_in_currency.usd ? data.market_data.price_change_percentage_7d_in_currency.usd.toFixed(2) : 0}%</td>
              <td>{data.market_data.price_change_percentage_14d_in_currency.usd ? data.market_data.price_change_percentage_14d_in_currency.usd.toFixed(2) : 0}%</td>
              <td>{data.market_data.price_change_percentage_30d_in_currency.usd ? data.market_data.price_change_percentage_30d_in_currency.usd.toFixed(2) : 0}%</td>
              <td>{data.market_data.price_change_percentage_1y_in_currency.usd ? data.market_data.price_change_percentage_1y_in_currency.usd.toFixed(2) : 0}%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="d-flex">
        <div className="container text-center">
          <div className="row row-cols-2">
            <div className="col d-flex justify-content-between">
              <div>24 Hour High</div>
              <div>${data.market_data.high_24h.usd.toLocaleString('en-US', { style: 'decimal' })}</div>
            </div>
            <div className="col d-flex justify-content-between">
              <div>24 Hour Low</div>
              <div>${data.market_data.low_24h.usd.toLocaleString('en-US', { style: 'decimal' })}</div>
            </div>
            <div className="col d-flex justify-content-between">
              <div>Market Cap</div>
              <div>${data.market_data.market_cap.usd.toLocaleString('en-US', { style: 'decimal' })}</div>
            </div>
            <div className="col d-flex justify-content-between">
              <div>circulating supply</div>
              <div>{data.market_data.circulating_supply}</div>
            </div>
          </div>
        </div>
      </div>
      {data.description.en && (
      <div className="card-footer border-light text-body-light">
          <h4 className="my-3">Description</h4>
          <div dangerouslySetInnerHTML={{__html: data.description.en}} />
      </div>
      )}
    </div>
    </div>
  );
};

export const coinLoader = async ({ params }) => {
  const { id } = params

  const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);

  if (!response.ok) {
    throw Error('Coin Not Found!');
  }

  return response.json()
}

export default Coin
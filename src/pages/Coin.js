import { useLoaderData, useParams } from "react-router-dom"

const Coin = () => {
  const data = useLoaderData();

  if (!data) {
    return <div className="text-light text-center">Loading...</div>;
  }

  return (
    <div className="mt-5">
      <h4 className="text-light">{data.name}</h4>
      <img src={data.image.large} alt="coin"/>
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
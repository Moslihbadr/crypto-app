import { useRouteError } from "react-router-dom"


const CoinError = () => {
  const error = useRouteError()

  return (
    <div className="text-center text-light mt-5">
      <h1>Error</h1>
      <h3>{error.message}</h3>
    </div>
  )
}

export default CoinError
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="container text-center mt-5">
      <div className="text-light p-3">
        <div>
          <h1 className="display-1">404</h1>
          <p className="lead">Oops! The page you requested cannot be found.</p>
          <hr className="my-4" />
          <Link to="/" className="btn btn-outline-success btn-lg mt-3">Go back to home</Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
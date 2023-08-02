import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import CoinList from "./components/CoinList";
import Coin, { coinLoader } from "./pages/Coin";
import CoinError from "./pages/CoinError";


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route >
        
          <Route path="/" element={<CoinList />} />
        
          <Route path="coins">
            <Route path=":id" element={<Coin />} loader={coinLoader}  errorElement={CoinError} />
          </Route>
        
        </Route>
        
    )
  )

  return (
    <RouterProvider router={router} />
  );
}

export default App;

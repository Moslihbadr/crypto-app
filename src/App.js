import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import CoinList from "./components/CoinList";
import CoinLayout from "./layouts/CoinLayout";
import Coin, { coinLoader } from "./pages/Coin";
import CoinError from "./pages/CoinError";


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route >
        
          <Route path="/" element={<CoinList />} />
        
          <Route path="coins" element={<CoinLayout/>}>
            <Route path=":id" element={<Coin />} loader={coinLoader} />
          </Route>
        
        </Route>
        
    )
  )

  return (
    <RouterProvider router={router} />
  );
}

export default App;

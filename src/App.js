import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// components
import CoinList from "./pages/CoinList";

// pages
import Coin, { coinLoader } from "./pages/Coin";
import CoinError from "./pages/CoinError";
import NotFound from "./pages/NotFound";


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route >
        
          <Route path="/" element={<CoinList />} />
        
          <Route path="coins">
            <Route path=":id" element={<Coin />} loader={coinLoader}  errorElement={ <CoinError />} />
          </Route>

          <Route path='*' element={<NotFound />} />
        
        </Route>
        
    )
  )

  return (
    <RouterProvider router={router} />
  );
}

export default App;

import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App container">
      <header className="mt-4 mb-3">
        <h1 className="text-light text-center">React Crypto App</h1>
        <SearchBar />
      </header>
    </div>
  );
}

export default App;

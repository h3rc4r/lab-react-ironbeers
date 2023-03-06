import { Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from "./components/HomePage.jsx"
import AllBeers from "./components/AllBeers.jsx";
import RandomBeer from "./components/RandomBeer.jsx";
import NewBeer from "./components/NewBeer.jsx";
import SingleBeer from "./components/SingleBeer.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AllBeers" element={<AllBeers />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/NewBeer" element={<NewBeer />} />
        <Route path="/beers/:beerId" element={<SingleBeer />} />
      </Routes>
    </div>
  );
}

export default App;

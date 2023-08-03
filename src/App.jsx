import "./App.css";
import { Routes } from "react-router-dom";
import HomePage from "./pages/HomePage"
import AllBeersPage from "./pages/AllBeersPage"
import RandomBeerPage from "./pages/RandomBeerPage"
import AddBeerPage from "./pages/AddBeerPage"
import BeerDetailsPage from "./pages/BeerDetailsPage"

function App() {
  return (
    <div className="App">
      <Routes path="/" element={<HomePage/>} />
      <Routes path="/beers" element={<AllBeersPage/>} />
      <Routes path="/random-beer" element={<RandomBeerPage/>} />
      <Routes path="/new-beer" element={<AddBeerPage/>} />
      <Routes path="/beers/:beerId" element={<BeerDetailsPage/>} />
    </div>
  );
}

export default App;

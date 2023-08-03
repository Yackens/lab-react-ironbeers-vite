import { Link } from "react-router-dom";
import allBeersImg from "../assets/beers.png";
import randomBeerImg from "../assets/random-beer.png";
import newBeerImg from "../assets/new-beer.png";

function HomePage() {
  return (
    <>
      <img src={allBeersImg} alt="all beers" />
      <h3>
        <Link to="/beers">All the Beers</Link>
      </h3>
      <img src={randomBeerImg} alt="all beers" />
      <h3>
        <Link to="/random-beer">Random Beer</Link>
      </h3>
      <img src={newBeerImg} alt="all beers" />
      <h3>
        <Link to="/new-beer">New Beer</Link>
      </h3>
    </>
  );
}

export default HomePage;
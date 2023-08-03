import axios from "axios";
import { useEffect, useState } from "react";
function RandomBeersPage() {
  const [randomBeer, setRandomBeer] = useState({});

  const getRandomBeer = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );
      if (response.status === 200) {
        setRandomBeer(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getRandomBeer();
  }, []);

  return randomBeer ? (
    <div>
      <img src={randomBeer.image_url} alt="random beer" />
      <h3>{randomBeer.name}</h3>
    </div>
  ) : (
    <p>loading...</p>
  );
}

export default RandomBeersPage;
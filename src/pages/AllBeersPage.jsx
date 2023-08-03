import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function AllBeersPage() {
  const [beersState, setBeersState] = useState([]);
  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const { data } = await axios(
          "https://ih-beers-api2.herokuapp.com/beers"
        );
        console.log("here are the beers", data);
        setBeersState(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBeers();
  }, []);

  return (
    <div>
      {beersState.map((beer) => {
        return (
          <Link key={beer._id} to={`/beers/${beer._id}`}>
            <div>
              <img
                src={beer.image_url}
                alt={beer.name}
                style={{ height: "100px" }}
              />
              <h4>{beer.name}</h4>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default AllBeersPage;
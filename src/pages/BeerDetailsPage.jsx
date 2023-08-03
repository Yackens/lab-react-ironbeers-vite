import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {
  const [singleBeer, setSingleBeer] = useState(null);
  const { beerId } = useParams();
  console.log("here is the params", beerId);

  useEffect(() => {
    const fetchBeer = async () => {
      const response = await fetch(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );
      if (response.status === 200) {
        const parsed = await response.json();
        setSingleBeer(parsed);
      }
    };
    fetchBeer();
  }, [beerId]);
  if (!singleBeer) {
    return <p>Loading....</p>;
  }
  return (
    <>
      <img src={singleBeer.image_url} alt="beer name" />
      <h3>{singleBeer.name}</h3>
    </>
  );
}

export default BeerDetailsPage;
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_brewed] = useState("");
  const [brewers_tips, setBrewers_tips] = useState("");
  const [attenuation_level, setAttenuation_level] = useState(1);
  const [contributed_by, setContributed_by] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const newBeer = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    };
    await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer);
    setName("");
    setDescription("");
    setAttenuation_level(0);
    setBrewers_tips("");
    setTagline("");
    setContributed_by("");
    setFirst_brewed("");
    navigate("/beers");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      <input
        type="text"
        placeholder="tagline"
        onChange={(e) => {
          setTagline(e.target.value);
        }}
        value={tagline}
      />
      <input
        type="text"
        placeholder="desc"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        value={description}
      />
      <input
        type="text"
        placeholder="first brewed"
        onChange={(e) => {
          setFirst_brewed(e.target.value);
        }}
        value={first_brewed}
      />
      <input
        type="text"
        placeholder="Brewer's Tips"
        onChange={(e) => {
          setBrewers_tips(e.target.value);
        }}
        value={brewers_tips}
      />
      <input
        type="number"
        placeholder="Attenuation Level"
        onChange={(e) => {
          setAttenuation_level(e.target.value);
        }}
        value={attenuation_level}
      />
      <input
        type="text"
        placeholder="Contributed By"
        onChange={(e) => {
          setContributed_by(e.target.value);
        }}
        value={contributed_by}
      />
      <button type="submit">Create Beer</button>
    </form>
  );
}

export default AddBeerPage;
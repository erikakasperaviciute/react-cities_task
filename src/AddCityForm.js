import { useState } from "react";

function AddCityForm({ addCity }) {
  const [cityName, setCityName] = useState("");
  const [cityPopulation, setCityPopulation] = useState("");
  const [cityContinent, setcityContinent] = useState("");
  const [cityCountry, setcityCountry] = useState("");
  const [cityAttractions, setcityAttractions] = useState("");
  const [isCapital, setIsCapital] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addCity({
      name: cityName,
      population: cityPopulation,
      location: {
        country: cityCountry,
        continent: cityContinent,
      },
      touristAttractions: cityAttractions
        .split(",")
        .map((attraction) => attraction.trim()),
      isCapital,
    });
    setCityName("");
    setCityPopulation("");
    setcityContinent("");
    setcityCountry("");
    setcityAttractions("");
    setIsCapital(false);
  };

  return (
    <div>
      <h3>Add new city</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>City name:</label>
          <input
            type="text"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Population:</label>
          <input
            type="number"
            value={cityPopulation}
            onChange={(e) => setCityPopulation(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Continent:</label>
          <input
            type="text"
            value={cityContinent}
            onChange={(e) => setcityContinent(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Country:</label>
          <input
            type="text"
            value={cityCountry}
            onChange={(e) => setcityCountry(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Attractions:</label>
          <textarea
            value={cityAttractions}
            onChange={(e) => setcityAttractions(e.target.value)}
          />
        </div>
        <div className="form-control">
          <input
            id="capital"
            type="checkbox"
            checked={isCapital}
            onChange={() => setIsCapital(!isCapital)}
          />
          <label htmlFor="capital">Capital</label>
        </div>
        <button type="submit">Add city</button>
      </form>
    </div>
  );
}

export default AddCityForm;

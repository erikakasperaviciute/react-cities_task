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
          <label htmlFor="name">City name:</label>
          <input
            id="name"
            name="name"
            type="text"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="population">Population:</label>
          <input
            id="population"
            name="population"
            type="number"
            min={0}
            step={1000}
            value={cityPopulation}
            onChange={(e) => setCityPopulation(e.target.valueAsNumber)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="continent">Continent:</label>
          <input
            id="continent"
            name="continent"
            type="text"
            value={cityContinent}
            onChange={(e) => setcityContinent(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="country">Country:</label>
          <input
            id="country"
            type="text"
            value={cityCountry}
            onChange={(e) => setcityCountry(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="attractions">Attractions:</label>
          <textarea
            id="attractions"
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

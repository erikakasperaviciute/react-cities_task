import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "./config";

function AddCityForm({ addCity, editCity }) {
  const [cityName, setCityName] = useState("");
  const [cityPopulation, setCityPopulation] = useState("");
  const [continent, setContinent] = useState("");
  const [cityCountry, setcityCountry] = useState("");
  const [cityAttractions, setCityAttractions] = useState([]);
  const [isCapital, setIsCapital] = useState(false);
  const [continentOptions, setContinentOptions] = useState([]);

  useEffect(() => {
    const getContinents = async () => {
      const { data } = await axios(`${API_URL}/continents`);
      setContinentOptions(data);
      setContinent(data[0].id);
    };

    getContinents();
  }, []);

  useEffect(() => {
    if (editCity) {
      setCityName(editCity.name);
      setCityPopulation(editCity.population);
      setContinent(editCity.continentId);
      setcityCountry(editCity.country);
      setCityAttractions(editCity.touristAttractions);
      setIsCapital(editCity.isCapital);
    }
  }, [editCity]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addCity({
      name: cityName,
      population: cityPopulation,
      country: cityCountry,
      continentId: Number(continent),
      touristAttractions: cityAttractions,
      isCapital,
    });

    setCityName("");
    setCityPopulation("");
    setContinent(continentOptions[0].id);
    setcityCountry("");
    setCityAttractions([]);
    setIsCapital(false);
  };

  const touristAttractionsInputHandler = (event) => {
    const enteredValue = event.target.value;
    if (!enteredValue) {
      setCityAttractions([]);
      return;
    }
    const touristAttractionsArr = enteredValue.split(",");
    const updatedTouristAttractionsArr = touristAttractionsArr.map(
      (location) => {
        const trimmedLocation = location.trim();
        const updatedLocation =
          trimmedLocation.length > 0
            ? trimmedLocation.charAt(0).toUpperCase() + trimmedLocation.slice(1)
            : "";
        return updatedLocation;
      }
    );
    setCityAttractions(updatedTouristAttractionsArr);
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
            // step={1000}
            value={cityPopulation}
            onChange={(e) => setCityPopulation(e.target.valueAsNumber)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="continent">Continent:</label>
          <select
            id="continent"
            name="continent"
            value={continent}
            onChange={(e) => setContinent(e.target.value)}
          >
            {continentOptions.map((continent) => (
              <option value={continent.id} key={continent.id}>
                {continent.title}
              </option>
            ))}
          </select>
        </div>
        {/* <div className="form-control">
          <label htmlFor="continent">Continent:</label>
          <input
            id="continent"
            name="continent"
            type="text"
            value={cityContinents}
            onChange={(e) => setcityContinents(e.target.value)}
          />
        </div> */}
        <div className="form-control">
          <label htmlFor="country">Country:</label>
          <input
            id="country"
            name="country"
            type="text"
            value={cityCountry}
            onChange={(e) => setcityCountry(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="attractions">Attractions:</label>
          <textarea
            id="attractions"
            name="attractions"
            value={cityAttractions.join(", ")}
            onChange={touristAttractionsInputHandler}
          />
        </div>
        <div className="form-control">
          <input
            id="capital"
            type="checkbox"
            checked={isCapital}
            onChange={() => setIsCapital((prevState) => !prevState)}
          />
          <label htmlFor="capital">Capital</label>
        </div>

        <button type="submit">
          {editCity ? "Save edited city" : "Add new city"}
        </button>
      </form>
    </div>
  );
}

export default AddCityForm;

import { v4 as uuid } from "uuid";
import { useState, useEffect } from "react";

function AddCityForm({ addCity, editCity }) {
  const [cityName, setCityName] = useState("");
  const [cityPopulation, setCityPopulation] = useState("");
  const [cityContinent, setcityContinent] = useState("");
  const [cityCountry, setcityCountry] = useState("");
  const [cityAttractions, setcityAttractions] = useState([]);
  const [isCapital, setIsCapital] = useState(false);
  // const [isBeach, setIsBeach] = useState(false);
  // const [isculturalAttractions, setIsculturalAttractions] = useState(false);

  useEffect(() => {
    if (editCity) {
      setCityName(editCity.name);
      setCityPopulation(editCity.population);
      setcityContinent(editCity.location.continent);
      setcityCountry(editCity.location.country);
      setcityAttractions(editCity.touristAttractions);
      setIsCapital(editCity.isCapital);
    }
  }, [editCity]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addCity({
      id: editCity ? editCity.id : uuid(),
      name: cityName,
      population: cityPopulation,
      location: {
        country: cityCountry,
        continent: cityContinent,
      },
      touristAttractions: cityAttractions,
      isCapital,
      // isBeach,
    });
    // console.log(cityContinent);
    // console.log(cityAttractions.length);
    // console.log(isBeach);

    setCityName("");
    setCityPopulation("");
    setcityContinent("");
    setcityCountry("");
    setcityAttractions("");
    setIsCapital(false);
    // setIsBeach(false);
    // setIsculturalAttractions(false);
  };

  const touristAttractionsInputHandler = (e) => {
    const enteredValue = e.target.value;
    const updatedTouristAttractionsArr = enteredValue
      ? enteredValue.split(",").map((location) => {
          const trimmedLocation = location.trim();
          const updatedLocation =
            trimmedLocation.length > 0
              ? trimmedLocation.at(0).toUpperCase() + trimmedLocation.slice(1)
              : "";
          return updatedLocation;
        })
      : [];

    setcityAttractions(updatedTouristAttractionsArr);
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
            value={cityAttractions}
            onChange={touristAttractionsInputHandler}
          />
        </div>
        <div className="form-control">
          <input
            id="capital"
            type="checkbox"
            checked={isCapital}
            //Šitaip negalima
            // onChange={() => setIsCapital(!isCapital)}
            onChange={() => setIsCapital((prevState) => !prevState)}
          />
          <label htmlFor="capital">Capital</label>
        </div>
        {/* <fieldset>
          <legend>City advantages</legend>
          <label>
            <input
              type="checkbox"
              name="features"
              value="beach"
              checked={isBeach}
              onChange={() => setIsBeach(!isBeach)}
            />
            Beach
          </label>
          <label>
            <input type="checkbox" name="features" value="metro" /> Metro
          </label>
          <label>
            <input
              type="checkbox"
              name="features"
              value="cultural-attractions"
              checked={isculturalAttractions}
              onChange={() => setIsculturalAttractions(!isculturalAttractions)}
            />
            Cultural Attractions
          </label>
          <label>
            <input type="checkbox" name="features" value="hiking" />
            Hiking trails
          </label>
          <label>
            <input type="checkbox" name="features" value="parks" />
            Parks
          </label>
        </fieldset> */}
        <button type="submit">
          {editCity ? "Save edited city" : "Add new city"}
        </button>
      </form>
    </div>
  );
}

export default AddCityForm;

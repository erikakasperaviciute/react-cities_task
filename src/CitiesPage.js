import { v4 as uuid } from "uuid";
import { useState } from "react";
import CityItem from "./CityItem";
import "./CitiesStyle.css";
import AddCityForm from "./AddCityForm";
function CitiesPage() {
  const citiesArr = [
    {
      id: uuid(),
      name: "Klaipėda",
      population: 162292,
      location: {
        continent: "Europe",
        country: "Lithuania",
      },
      touristAttractions: ["The Magic Mouse sculpture", "Theatre Square"],
      isCapital: false,
    },
    {
      id: uuid(),
      name: "Vilnius",
      population: 593436,
      location: {
        continent: "Europe",
        country: "Lithuania",
      },
      touristAttractions: [
        "Gediminas Castle Tower",
        "The Cathedral Basilica of St. Stanislaus and St. Ladislaus",
        "The Hill of Three Crosses",
        "MO Museum",
      ],
      isCapital: true,
    },
    {
      id: uuid(),
      name: "Valencia",
      population: 792492,
      location: {
        continent: "Europe",
        country: "Spain",
      },
      touristAttractions: [
        "City of Arts and Sciences",
        "Cathedral of Valencia",
      ],
      isCapital: false,
    },
    {
      id: uuid(),
      name: "Barcelona",
      population: 1620343,
      location: {
        continent: "Europe",
        country: "Spain",
      },
      touristAttractions: [
        "Sagrada Familia",
        "Arc de Triomf",
        "Park Güell",
        "Parc de la Ciutadella",
      ],
      isCapital: false,
    },
    {
      id: uuid(),
      name: "Kanbera",
      population: 456692,
      location: {
        continent: "Australia and Oceania",
        country: "Australia",
      },
      touristAttractions: [],
      isCapital: true,
    },
    {
      id: uuid(),
      name: "Sydney",
      population: 5297089,
      location: {
        continent: "Australia and Oceania",
        country: "Australia",
      },
      touristAttractions: ["Sydney Opera House"],
      isCapital: false,
    },
    {
      id: uuid(),
      name: "Berlin",
      population: 3850809,
      location: {
        continent: "Europe",
        country: "Germany",
      },
      touristAttractions: ["The Brandenburg Gate"],
      isCapital: true,
    },
    {
      id: uuid(),
      name: "Dallas",
      population: 1304379,
      location: {
        continent: "North America",
        country: "United States",
      },
      touristAttractions: [],
      isCapital: false,
    },
    {
      id: uuid(),
      name: "San Francisco",
      population: 815201,
      location: {
        continent: "North America",
        country: "United States",
      },
      touristAttractions: [
        "The Palace of Fine Arts",
        "Golden Gate Bridge",
        "Golden Gate Park",
      ],
      isCapital: false,
    },
    {
      id: uuid(),
      name: "Tokyo",
      population: 14094034,
      location: {
        continent: "Asia",
        country: "Japan",
      },
      touristAttractions: ["Shinjuku Gyoen National Garden"],
      isCapital: true,
    },
  ];

  const [cities, setCities] = useState(citiesArr);
  const [editCity, setEditCity] = useState(null);

  const removeCityHandler = (cityId) => {
    setCities((prevCities) => prevCities.filter((city) => city.id !== cityId));
  };

  const editCityHandler = (cityId) => {
    const cityToEdit = cities.find((city) => city.id === cityId);
    setEditCity(cityToEdit);
  };
  const citiesListElement = cities.map((city, index) => (
    <CityItem
      key={index}
      data={city}
      onRemoveCity={removeCityHandler}
      onEditCity={editCityHandler}
    />
  ));

  const addCity = (newCity) => {
    if (editCity) {
      setCities((prevCities) => {
        const editId = newCity.id;
        const editIndex = cities.findIndex((city) => city.id === editId);
        const newState = [...prevCities];
        newState[editIndex] = newCity;
        return newState;
      });
      setEditCity(null);
    } else {
      setCities((prevCities) => [newCity, ...prevCities]);
    }
  };

  // const addCity = (newCity) => {
  //   setCities((prevCities) => {
  //     //   const newCities = [...prevCities];
  //     //   newCities.unshift(newCity);
  //     //   return newCities;
  //     // arba
  //     // const newCities = [newCity, ...prevCities]
  //     // return newCities
  //     //arba. return čia nebūtinas
  //     return [newCity, ...prevCities];
  //   });
  // };

  return (
    <>
      <AddCityForm addCity={addCity} editCity={editCity} />
      <div className="cities-wrap">{citiesListElement}</div>
    </>
  );
}

export default CitiesPage;

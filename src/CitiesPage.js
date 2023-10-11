import { useState } from "react";
import CityItem from "./CityItem";
import "./CitiesStyle.css";
import AddCityForm from "./AddCityForm";
function CitiesPage() {
  const citiesArr = [
    {
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

  const citiesListElement = cities.map((city, index) => (
    <CityItem key={index} data={city} />
  ));

  const addCity = (newCity) => {
    setCities((prevCities) => {
      const newCities = [...prevCities];
      newCities.unshift(newCity);
      return newCities;
    });
  };

  return (
    <>
      <AddCityForm addCity={addCity} />
      <div className="cities-wrap">{citiesListElement}</div>
    </>
  );
}

export default CitiesPage;

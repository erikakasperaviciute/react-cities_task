function CityItem(props) {
  const {
    name,
    population,
    continent,
    country,
    touristAttractions,
    isCapital,
    id,
  } = props.data;
  // const { cityContinent, country } = location
  const { onRemoveCity, onEditCity } = props;

  const cityNameTitle = isCapital ? `${name}(capital)` : name;
  console.log(continent.title);
  const cityDescription = `${name} city is located in ${continent.title}, ${country} and has population of ${population} people.`;

  const capitalAdditionalText = isCapital
    ? `${name} is the capital of ${country}`
    : "";

  let touristAttractionsElement = "";

  if (touristAttractions.length > 0) {
    const touristAttractionsTitle =
      touristAttractions.length === 1
        ? `Main Tourist attraction of ${name} is:`
        : `Main Tourist attractions of ${name} are:`;

    touristAttractionsElement = (
      <div className="tourist-attractions-wrapper">
        <h3>{touristAttractionsTitle}</h3>
        <ul>
          {touristAttractions.map((location, index) => (
            <li key={index}>{location}</li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className={`city-card ${isCapital ? "capital" : ""}`}>
      <h2>{cityNameTitle}</h2>

      <p>{`${cityDescription} ${capitalAdditionalText}`}</p>

      {touristAttractionsElement}
      <button onClick={() => onRemoveCity(id)}>Delete</button>
      <button onClick={() => onEditCity(id)}>Edit</button>
    </div>
  );
}

export default CityItem;

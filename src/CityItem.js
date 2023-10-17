function CityItem(props) {
  const { name, population, location, touristAttractions, isCapital, id } =
    props.data;
  const { continent, country } = location;
  const { onRemoveCity, onEditCity } = props;

  const cityNameTitle = isCapital ? `${name}(capital)` : name;

  const cityDescription = `${name} city is located in ${continent}, ${country} and has population of ${population} people.`;

  const capitalAdditionalText = isCapital
    ? `${name} is the capital of ${country}`
    : "";

  const attractionSectionTitle =
    touristAttractions.length > 1 ? (
      <h3>Main Tourist attractions of {name} are:</h3>
    ) : (
      <h3>Main Tourist attraction of {name} is:</h3>
    );

  const atractionElement = touristAttractions.map((attraction, index) => (
    <li key={index}>{attraction}</li>
  ));

  const touristAttractionsElement = touristAttractions.length > 0 && (
    <div className="attraction-wrapper">
      {attractionSectionTitle}
      <ul>{atractionElement}</ul>
    </div>
  );

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

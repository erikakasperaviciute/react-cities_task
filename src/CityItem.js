function CityItem(props) {
  const { name, population, location, touristAttractions, isCapital } =
    props.data;
  const { continent, country } = location;

  const cityNameTitle = `${name} ${isCapital ? "(capital)" : ""}`;

  const cityDescription = `${name} city is located in ${continent}, ${country} and has population of
        ${population} people.`;

  const capitalAdditionalText = `${
    isCapital ? `${name} is the capital of ${country}` : ""
  }`;

  const attractionSectionTitle =
    touristAttractions.length > 1 ? (
      <h3>Main Tourist attractions of {name} are:</h3>
    ) : (
      <h3>Main Tourist attraction of {name} is:</h3>
    );

  const atractionElement = touristAttractions.map((attraction, index) => (
    <li key={index}>{attraction}</li>
  ));

  return (
    <div className={`city-card ${isCapital ? "capital" : ""}`}>
      <h2>{cityNameTitle}</h2>

      <p>{`${cityDescription} ${capitalAdditionalText}`}</p>

      {touristAttractions.length > 0 && (
        <div className="attraction-wrapper">
          {attractionSectionTitle}
          <ul>{atractionElement}</ul>
        </div>
      )}
    </div>
  );
}

export default CityItem;

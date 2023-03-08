const Persons = ({ personsToShow }) => {
    return (
      <div>
        {personsToShow.map(({ name, number }) => (
            <div key={name}>
                {name} {number}
            </div>
        ))}
      </div>
    );
};



export default Persons;
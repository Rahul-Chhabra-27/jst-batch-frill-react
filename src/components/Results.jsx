import Pet from "./Pet";

const Result = (props) => {
  // pets array.
  const { pets, removePet } = props;

  // conditional rendering.
  return (
    <div className="search">
      {!pets.length ? (
        <div>No Pets Found</div>
      ) : (
        pets.map((pet) => {
          return (
            <Pet
              key={pet.id}
              id={pet.id}
              name={pet.name}
              animal={pet.animal}
              breed={pet.breed}
              images={pet.images}
              removePet={removePet}
              location={`${pet.city}, ${pet.state}`}
            ></Pet>
          );
        })
      )}
    </div>
  );
  // pets array could be empty and pets can contain multiple pets.
};

export default Result;

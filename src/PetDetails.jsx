import { useLocation, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchPets } from "./fetchPet";

/*

http://localhost/pets/petId
http://localhost/pets/5

*/
const PetDetails = () => {
  const { id } = useParams();

  // Creating the react-query
/*   This query function will make an API to the pets server and fecth the specific pet using the pet id. */
  const petQuery = useQuery({
    queryKey: ["pets", id],
    queryFn: fetchPets,
  });

  if(petQuery.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    )
  }
  const pet = petQuery.data.pets[0];
  return (
    <div className="details">
      <div>
        <img src={pet.images[0]} alt={pet.name} />
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} - ${pet.breed} - ${pet.city}, ${pet.state}`}</h2>
        <button>Adopt {pet.name}</button>
        <p>{pet.description}</p>
      </div>
    </div>
  );
};

export default PetDetails;

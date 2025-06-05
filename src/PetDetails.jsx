import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Pet from "./Pet";

const PetDetails = () => {
    
  const [pets, setPets] = useState([]);
  let animal = "";
  let location = "";
  let breed = "";

  const { id } = useParams();


  async function fetchPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    setPets(json.pets);
  }
  useEffect(() => {
    // we can make a request to get all the available pets and ftech the current with using the pet id coming from useParam
    fetchPets();
  }, [id]);


  let currentPet = {};
  if(pets.length > 0) {
    currentPet = pets.filter((pet) => pet.id == id)[0];
  }
  

  return (
    <div>
      Hello from pet page , you have clicked the pet with pet id{" "}
      <strong>{id}</strong>
      {pets.length > 0 ? (<Pet
        name={currentPet.name}
        images={currentPet.images}
        breed={currentPet.breed}
        id = {currentPet.id}
        animal = {currentPet.animal}
      ></Pet>) : (<h1>Rendering</h1>)}
      
    </div>
  );
};

export default PetDetails;

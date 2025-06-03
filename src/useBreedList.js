// ! This is a custom hook to fetch the list of breeds from the Dog API
// ! This is reusable hook similar to useState, useEffect, etc.

import { useState, useEffect } from "react";

const useBreedList = (animal) => {
    const [breedList, setBreedList] = useState([]);
    const [status,setStatus] = useState("unloaded");
    
    useEffect(() => {
        // if there is no animal selected, return early
        if(!animal) {
            setBreedList([]);
        }
        else {
            // if there is an animal selected, fetch the breeds based on the animal
            fetchBreedsBasedOnAnimal();
        }
    },[animal])
    async function fetchBreedsBasedOnAnimal() {
     // fetching the breeds based on the animal

     setBreedList([]);
     setStatus("loading");

    const res = await fetch(
      `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
    );
    const json = await res.json();
    console.log(json);
    setBreedList(json.breeds || [])
    setStatus("loaded");
    }

    // state for tracking the status
    // loading the breed, completed the fetching, or error occurred

    return [breedList, status];
}

export default useBreedList;

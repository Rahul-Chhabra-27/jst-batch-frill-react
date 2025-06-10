import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";

/*
for animal dog ====> inside the cache {  [breeds,dog]:"List of all dog breeds",   }
for animal cat ====> inside the cache {  [breeds,dog]:"List of all dog breeds",  [breeds,cat]:List<Cat Breeds> }
*/
export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useQuery({
    queryKey:["breeds",animal]
  })

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading");
      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await res.json();
      setBreedList(json.breeds || []);
      setStatus("loaded");
    }
  }, [animal]);

  return [breedList, status];
}


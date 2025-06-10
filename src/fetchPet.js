const wait = (duration) => {
    return new Promise((resolve,reject) => {
        setTimeout(resolve,duration);
    })
}

export const fetchPets = async (obj) => {
  console.log(obj)
  const { queryKey } = obj;

  const petId = queryKey[1];
  
  await wait(5000);
  const apiRes = await fetch(`https://pets-v2.dev-apis.com/pets?id=${petId}`);

  if (!apiRes.ok) {
    throw new Error(`/pets/${petId} fetch not ok`);
  }
  return apiRes.json();
};


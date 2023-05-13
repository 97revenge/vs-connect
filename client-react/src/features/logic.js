function logic(name, lastName, id) {
  const state = { name, lastName, id };

  return state;
}

async function apiLogic() {
  const response = await fetch("https://restcountries.com/v3.1/name/");
  const data = response.json();
  return data;
}

const data = apiLogic();

const dataBrazil = JSON.stringify(data.cidade);

console.log(data);

export default { logic, apiLogic };

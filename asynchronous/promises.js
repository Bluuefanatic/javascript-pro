const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
const url = `${BASE_URL}/1`;

fetch(url).then(function (data) {
    console.log(data);
})
const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
const url = `${BASE_URL}/1`;

//****using promises****\\
//fetch(url)
//  .then(function (data) {
//    console.log(data);
//})
//.catch(function (err) {
//  console.log("ERR!!", err);
//})

// same as above but using arrow functions
fetch(url)
    .then((res) => console.log(res))
    .catch((err) => console.log("ERR!!", err));
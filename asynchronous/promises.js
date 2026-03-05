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
//fetch(url)
//  .then((res) => console.log(res))
//.catch((err) => console.log("ERR!!", err));

//***call back hell *****

fetch(`${BASE_URL}/1`)
    .then((res1) => {
        console.log("RESPONSE 1", res1)
        fetch(`${BASE_URL}/2`)
            .then((res2) => {
                console.log("RESPONSE 2", res2)
                fetch(`${BASE_URL}/3`)
                    .then((res3) => {
                        console.log("RESPONSE 3", res3)
                        fetch(`${BASE_URL}/4`)
                            .then((res4) => {
                                console.log("RESPONSE 4", res4)
                            })
                            .catch((err) => console.log("ERR!!", err))
                    })
                    .catch((err) => console.log("ERR!!", err))
            })
            .catch((err) => console.log("ERR!!", err))
    })
    .catch((err) => console.log("ERR!!", err))

//*****promise chaining******/

fetch(`${BASE_URL}/1`)
    .then((res1) => {
        console.log("RESPONSE 1", res1)
        return fetch(`${BASE_URL}/2`)
    })
    .then((res2) => {
        console.log("RESPONSE 2", res2)
        return fetch(`${BASE_URL}/3`)
    })
    .then((res3) => {
        console.log("RESPONSE 3", res3)
        return fetch(`${BASE_URL}/4`)
    })
    .then((res4) => {
        console.log("RESPONSE 4", res4)
    })
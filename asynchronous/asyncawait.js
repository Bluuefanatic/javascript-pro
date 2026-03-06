async function hello() {
    const result = await fetch(`${BASE_URL}/1`)
    console.log(result)
}
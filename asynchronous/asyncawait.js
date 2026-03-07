async function hello() {
    const result = await fetch(`${BASE_URL}/1`)
    console.log(result)
}

async function getFakeWeb() {
    try {
        const res = await fetch('https://fakeweb.com')
        console.log(res)
    } catch (e) {
        console.log('SOMETHING WENT WRONG!!')
    }
}
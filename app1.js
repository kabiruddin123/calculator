const test = async () => {
    let p = await fetch('https://rickandmortyapi.com/api/character')
    let response = await p.json() 
    console.log(response)
}

export default test
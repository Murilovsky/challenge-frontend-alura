async function ListaPets(){
    const res = await fetch("http://localhost:3000/pets")
    return res.json()
}

export{ListaPets}
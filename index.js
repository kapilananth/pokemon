
document.querySelector('#search').addEventListener("click", getPokemon);

function toLowerCase(string){
return string.replace(/\s/g, '').toLowerCase();
}

function toCapitalize(string){
    return string.chatAt(0).toUpperCase() + string.slice(1);
}

document.querySelector('#pokemonName').addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        event.preventDefault();        
        document.getElementById("search").click();
    }
})



function updatePokemon(data){

    console.log(data.status);
    let abilities = data.abilities;
    //console.log(abilities);

    let powers = '';
    for (var i = 0; i < abilities.length; i++)
        powers += data.abilities[i].ability.name + ", "
    
    powers = powers.slice(0,-2);
    
    
    document.querySelector(".pokemonBox").innerHTML = `
        <div>
        <img src="${data.sprites.other.dream_world.front_default}" alt="${data.name}">
    </div>
    <div class="pokemonInfo">
        <h1>
        ${data.name.toUpperCase()   }
        </h1>
        <p>
        Weight = ${data.weight}
        </p>
        <p>
        Powers = ${powers}
        </p>
    </div>
        `
    
}


async function getPokemon(e){

    const name = document.querySelector('#pokemonName').value
    const properName = toLowerCase(name);

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${properName}`)

    if(response.status==200)
    {
    var data = await response.json();
    //console.log(data)
    updatePokemon(data);
    }
    else{
        document.querySelector(".pokemonBox").innerHTML = `
        <img src="images/notFound.png" alt="Pokemon not found">
    </div>
    <div class="pokemonInfo">
        <h1>
        No Pokemon Found!
        </h1>
        `
    }


    tryMe();
    e.preventDefault();
   
}



tryMe();

function tryMe(){
    const max = 150; const min = 1;
    const R1 = Math.floor(Math.random() * (max - min) + min);
    const R2 = Math.floor(Math.random() * (max - min) + min);
    const R3 = Math.floor(Math.random() * (max - min) + min);

    fetch(`https://pokeapi.co/api/v2/pokemon/${R1}`).then((response) => response.json()).then((data) =>{
    document.querySelector('#r1').innerHTML = `    
    ${data.name }
    `})

    fetch(`https://pokeapi.co/api/v2/pokemon/${R2}`).then((response) => response.json()).then((data) =>{
    document.querySelector('#r2').innerHTML = `    
    ${data.name }
    `})

    fetch(`https://pokeapi.co/api/v2/pokemon/${R3}`).then((response) => response.json()).then((data) =>{
    document.querySelector('#r3').innerHTML = `    
    ${data.name }
    `})
}





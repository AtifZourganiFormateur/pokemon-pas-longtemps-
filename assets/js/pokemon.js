const pokemonId = localStorage.getItem('pokemon')

async function getPokemonById(){
    //co qui attend une promise
    let promise = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/${pokemonId}`);
    //verif si co est ok
    if(promise.ok == true){
        //transformation en tableau json
        let pokemon = await promise.json();
        //je return mon tableau json pokemons
        return pokemon;
    }else{
        // si error
    }
}
async function showPokemon(pokemon){
    //tout l'affichage du pokemon
    console.log(pokemon)
}


getPokemonById().then(pokemon => showPokemon(pokemon))

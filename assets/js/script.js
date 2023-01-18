async function getPokemon(){
    //co qui attend une promise
    let promise = await fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/151");
    //verif si co est ok
    if(promise.ok == true){
        //transformation en tableau json
        let pokemons = await promise.json();
        //je return mon tableau json pokemons
        return pokemons;
    }else{
        // si error
    }
}
async function showPokemons(pokemons){
   const showPokemonsContainer = document.querySelector('.showPokemons');
   for(const pokemon of pokemons){
        //creation des elements
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        const img = document.createElement('img');
        //creation des attributs
        article.setAttribute('class', 'articlePokemon')
        img.setAttribute('src', pokemon.image)
        img.setAttribute('alt', 'Illustration du pokemon ' + pokemon.name);
        //creatoin des contenus
        const name = document.createTextNode(pokemon.name);
        //creatons des noeuds
        h3.appendChild(name);
        article.append(h3, img);
       showPokemonsContainer.appendChild(article);
       article.addEventListener('click', ()=>{
            //recuperer des infos a réutiliser
            localStorage.setItem('pokemon', pokemon.id);
            document.location.href="pokemon.html"; 
       })
   }
}
getPokemon().then(pokemons => showPokemons(pokemons));


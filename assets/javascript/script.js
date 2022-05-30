

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')

const pokemonsCard = document.querySelectorAll('.pokemon-card')

listaSelecaoPokemons.forEach(pokemon => {
    
    pokemon.addEventListener('click', () => {
        const cartaoPokemonAberto = document.querySelector('.open')  

        cartaoPokemonAberto.classList.remove('open')

        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = idPokemonSelecionado  + '-card'

        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)

        cartaoPokemonParaAbrir.classList.add('open')

        const pokemonAtivoNaListagem = document.querySelector('.ativo')

        pokemonAtivoNaListagem.classList.remove('ativo')

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)

        pokemonSelecionadoNaListagem.classList.add('ativo')

    })
})

/*
MEU COD

const listaSelecaoPokemons = document.querySelectorAll('.pokemon');

const pokemonscard = document.querySelectorAll('.pokemon-card')


function AbrirCard(){

    listaSelecaoPokemons.forEach(pokemon => {
        pokemon.AddEventListener('click',() =>{
            const cartaoPokemonAberto = document.querySelector('.open');
            cartaoPokemonAberto.classList.remove('open');

            const idPokemonSelecionado = pokemon.attributes.id.value;
            const idDoCartaoPokemonParaAbrir = idPokemonSelecionado + '-card';
            const pokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir);
            idDoCartaoPokemonParaAbrir.classList.add('open');

            // para pegar uma class com o queryselector( ou queryselectorall) utilizados . antes da classe selecionada.
            

            //remover a classe ativo que marca o pokemon selecionado

            const pokemonAtivoNaListagem = document.querySelector('.ativo');
            pokemonAtivoNaListagem.classList.remove('ativo');

            const PokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
            pokemonAtivoNaListagem.classList.add('ativo');
            

        })
    });

}
*/
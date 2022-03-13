const listaPokemons = document.querySelectorAll('.pokemon')
const pokemonCard = document.querySelectorAll('.cartao-pokemon')

listaPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
        const listaPokemonAtiva = document.querySelector('.ativo')
        listaPokemonAtiva.classList.remove('ativo')

        const idPokemonSelecionado = pokemon.attributes.id.value

        const cartaoPokemonParaAbrir = document.getElementById('cartao-' + idPokemonSelecionado)
        cartaoPokemonParaAbrir.classList.add('aberto')

        const listaPokemonParaAtivar = document.getElementById(idPokemonSelecionado)
        listaPokemonParaAtivar.classList.add('ativo')
    })
})
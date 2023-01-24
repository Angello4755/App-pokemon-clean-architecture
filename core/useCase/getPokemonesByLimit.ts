import { Pokemon } from "../entity/interfaces";
import { PokemonRepository } from "../repository";

export default class GetPokemonesByLimit {

    private pokemonRepository: PokemonRepository;

    constructor(pokemonRepository: PokemonRepository) {
        this.pokemonRepository =  pokemonRepository;
    }

    execute(id: number): Promise<Pokemon[]> {
        return this.pokemonRepository.getPokemons(id);
    }
}
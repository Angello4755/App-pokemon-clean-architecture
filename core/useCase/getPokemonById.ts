import { PokemonApi } from "../entity/interfaces";
import { PokemonRepository } from "../repository";

export default class GetPokemonById {

    private pokemonRepository: PokemonRepository;

    constructor(pokemonRepository: PokemonRepository) {
        this.pokemonRepository =  pokemonRepository;
    }

    execute(id: number): Promise<PokemonApi> {
        return Promise.resolve(this.pokemonRepository.getPokemon(id));
    }
}
import { PokemonRepository } from "../repository";
import { PokemonApi, PokemonFull } from '../entity/interfaces/pokemon-full';

export default class GetPokemonByName {

    private pokemonRepository: PokemonRepository;

    constructor(pokemonRepository: PokemonRepository) {
        this.pokemonRepository =  pokemonRepository;
    }

    execute(name: string): Promise<PokemonApi> {
        return Promise.resolve(this.pokemonRepository.getPokemonByName(name));
    }
}
import { Pokemon, PokemonList } from "../entity/interfaces";
import { PokemonApi } from '../entity/interfaces/pokemon-full';

export default interface PokemonRepository {
    getPokemonByName(name: string): Promise<PokemonApi>;
    getPokemons(limit: number): Promise<Pokemon[]>;
    getPokemon(id: number): Promise<PokemonApi>;
}
import { Pokemon, PokemonApi, PokemonFull, PokemonList } from "../../core/entity/interfaces";
import PokemonRepository from "../../core/repository/PokemonRepository";
import { pokeApi } from "../api";

export default class PokemonRepositoryInPokeApi implements PokemonRepository {
    async getPokemonByName(name: string): Promise<PokemonApi> {
        try {
            const { data } = await pokeApi.get<PokemonFull>(`/pokemon/${name}`);

            const pokemon: PokemonApi = {
                id: data.id,
                name: data.name,
                sprites: data.sprites
            }
            return Promise.resolve(pokemon);
    } catch {
            const pokemon: PokemonApi = {id:0, name: ''}
            return pokemon
    }

        
    }
    async getPokemon(id: number): Promise<PokemonApi> {
        try {
            const { data } = await pokeApi.get<PokemonFull>(`/pokemon/${id}`);
            const pokemon: PokemonApi = {
                id: data.id,
                name: data.name,
                sprites: data.sprites
            }
            return Promise.resolve(pokemon);
       } catch {
             const pokemon: PokemonApi = {id:0, name: ''}
            return pokemon
       }
        
    }
    async getPokemons(limit: number): Promise<Pokemon[]> {   
        const { data } =  await pokeApi.get<PokemonList>(`/pokemon?limit=${limit}`);
        const pokemones: Pokemon[] = data.results || [];
        return Promise.resolve(pokemones);
    }

}
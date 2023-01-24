export interface Pokemon {
    name: string;
    url: string;
    id: string;
    img: string;
  }

  export interface PokemonList {
    count?:    number;
    next?:     string;
    results?:  Pokemon[];
}
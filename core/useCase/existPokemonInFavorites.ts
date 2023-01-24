import { FavoriteRepository } from "../repository";

export default class ExistPokemonInFavorites {

    private favoriteRepository: FavoriteRepository;

    constructor(favoriteRepository: FavoriteRepository) {
        this.favoriteRepository =  favoriteRepository;
    }

    execute(id: number): boolean {
        return this.favoriteRepository.isPokemonFavorite(id);
    }
}
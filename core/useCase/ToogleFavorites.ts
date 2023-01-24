import { FavoriteRepository } from "../repository";

export default class ToogleFavorites {

    private favoriteRepository: FavoriteRepository;

    constructor(favoriteRepository: FavoriteRepository) {
        this.favoriteRepository =  favoriteRepository;
    }

    execute(id: number) {
        this.favoriteRepository.toggleFavorite(id);
    }
}
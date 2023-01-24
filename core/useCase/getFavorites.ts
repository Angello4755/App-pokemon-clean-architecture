import { FavoriteRepository } from "../repository";

export default class GetFavorites {

    private favoriteRepository: FavoriteRepository;

    constructor(favoriteRepository: FavoriteRepository) {
        this.favoriteRepository =  favoriteRepository;
    }

    execute(): [] {
       return this.favoriteRepository.get();
    }
}
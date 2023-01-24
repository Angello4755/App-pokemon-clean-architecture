import { FavoriteRepository } from "../repository";

export default class DeleteFavoriteById {

    private favoriteRepository: FavoriteRepository;

    constructor(favoriteRepository: FavoriteRepository) {
        this.favoriteRepository =  favoriteRepository;
    }

    execute(id:number): boolean {
       return this.favoriteRepository.delete(id);
    }
}
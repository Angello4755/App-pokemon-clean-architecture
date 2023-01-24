import { FavoriteRepository } from "../../core/repository";

export default class FavoriteRepositoryInLocaStorage implements FavoriteRepository {
    delete(id: number): boolean {
        const stringItem = localStorage.getItem('favorites') || '[]';
        let favorites = JSON.parse(stringItem);
        favorites = favorites.filter((pokeId: number) => pokeId !== id);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        return true
    }
    get(): [] {
        const stringItem = localStorage.getItem('favorites') || '[]';
        let favorites = JSON.parse(stringItem);
        return favorites;
    }
    
    toggleFavorite(id: number): void {
        const stringItem = localStorage.getItem('favorites') || '[]';
        let favorites = JSON.parse(stringItem);
    
        if(favorites.includes(id)) {
            favorites = favorites.filter((pokeId: number) => pokeId !== id);
        } else {
            favorites.push(id);
        }
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }

    isPokemonFavorite(id: number): boolean {
        const stringItem = localStorage.getItem('favorites') || '[]';
        let favorites = JSON.parse(stringItem);
    
        if(favorites.includes(id)) {
            return true;
        }
        return false;  
    }

}
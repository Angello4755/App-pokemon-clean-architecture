export default interface FavoriteRepository {
    toggleFavorite(id: number): void;
    isPokemonFavorite(id: number): boolean;
    get(): [];
    delete(id:number): boolean;
}
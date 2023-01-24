import ToogleFavorites from "../../useCase/ToogleFavorites";
import ExistPokemonInFavorites from '../../useCase/existPokemonInFavorites';
import GetPokemonById from "../../useCase/getPokemonById";
import GetFavorites from "../../useCase/getFavorites";
import DeleteFavoriteById from "../../useCase/deleteFavoriteById";
export interface Provider {
    toogleFavorites: ToogleFavorites;
    existPokemonInFavorites: ExistPokemonInFavorites;
  }

  export interface ProviderDetail {
    getPokemonById: GetPokemonById;
  }

  export interface ProviderFavoritePokemon {
    getFavorites: GetFavorites;
    deleteFavoriteById: DeleteFavoriteById;
  }
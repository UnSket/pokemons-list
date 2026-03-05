/** Типы по структуре PokeAPI (pokemon endpoint) */
export interface PokemonApi {
  id: number;
  name: string;
  types: {
    slot: number;
    type: { name: string; url: string };
  }[];
  abilities: {
    ability: { name: string; url: string };
    is_hidden: boolean;
    slot: number;
  }[];
  stats: {
    base_stat: number;
    effort: number;
    stat: { name: string; url: string };
  }[];
  sprites: {
    front_default: string | null;
    back_default: string | null;
    front_shiny: string | null;
    back_shiny: string | null;
  };
}

export async function fetchPokemon(pokemonID: string): Promise<PokemonApi> {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`);
	const data: PokemonApi = await response.json();
	return data;
}
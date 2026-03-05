export interface Pokemon {
    id: number;
    name: string;
    types: {
        slot: number;
        type: { name: string; url: string };
    }[];
    sprites: {
        front_default: string | null;
        back_default: string | null;
        front_shiny: string | null;
        back_shiny: string | null;
    };
}

export interface PokemonListApi {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

export async function fetchPokemonList(): Promise<PokemonListApi> {
	const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100", { cache: 'force-cache' });
	const data = await response.json();
	const results = await Promise.all(
		data.results.map((item: { name: string; url: string }) =>
			fetch(item.url, { cache: 'force-cache' }).then((res) => res.json())
		)
	);

	return { ...data, results };
}
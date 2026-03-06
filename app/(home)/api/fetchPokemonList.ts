import createApolloClient from "@/appolo-client";
import {
	GetPokemonListDocument,
	type GetPokemonListQuery,
} from "./GetPokemonList.generated";

export type PokemonListItem = GetPokemonListQuery["pokemons"][number] & {
  // TODO: create normalizer for sprites
  sprites: Array<{
    sprites: {
      front_default: string | null;
      back_default: string | null;
      front_shiny: string | null;
      back_shiny: string | null;
    }
  }>;
};

export async function fetchPokemonList(): Promise<GetPokemonListQuery["pokemons"]> {
	const client = createApolloClient();
	const { data } = await client.query<GetPokemonListQuery>({
		query: GetPokemonListDocument,
	});
	if (!data?.pokemons) throw new Error("Pokemon list not found");

	return data.pokemons;
}
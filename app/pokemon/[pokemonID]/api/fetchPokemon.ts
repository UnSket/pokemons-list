import createApolloClient from "@/appolo-client";
import {
	GetPokemonDocument,
	type GetPokemonQuery,
} from "./GetPokemon.generated";

export type PokemonApi = GetPokemonQuery["pokemon"][number] & {
  // TODO: create normalizer for sprites
  sprites: Array<{
    sprites: {
      front_default: string | null;
      back_default: string | null;
      front_shiny: string | null;
      back_shiny: string | null;
    }
  }>
};

export async function fetchPokemon(pokemonID: string): Promise<PokemonApi> {
	const client = createApolloClient();
	const id = parseInt(pokemonID, 10);
	if (Number.isNaN(id)) throw new Error("Invalid pokemon ID");
	const { data } = await client.query<GetPokemonQuery>({
		query: GetPokemonDocument,
		variables: { id },
	});
	const pokemon = data?.pokemon?.[0];
	if (!pokemon) throw new Error("Pokemon not found");

	return pokemon as PokemonApi;
}
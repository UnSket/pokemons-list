import createApolloClient from "@/apollo/appolo-client";
import {
	GetPokemonListDocument,
	getPokemonListNormalizer,
	GetPokemonListNormalized,
	GetPokemonListQuery
} from "./gql/pokemonList";

export async function fetchPokemonList(): Promise<GetPokemonListNormalized> {
	const client = createApolloClient();
	const { data } = await client.query<GetPokemonListQuery>({
		query: GetPokemonListDocument,
	});
	if (!data?.pokemons) throw new Error("Pokemon list not found");

	return getPokemonListNormalizer(data);
}
import createApolloClient from "@/apollo/appolo-client";
import {
	GetPokemonDocument,
	type GetPokemonQuery,
	getPokemonNormalizer,
	PokemonNormalized
} from "./gql/getPokemon";

export async function fetchPokemon(pokemonID: string): Promise<PokemonNormalized> {
	const client = createApolloClient();
	const id = parseInt(pokemonID, 10);
	if (Number.isNaN(id)) throw new Error("Invalid pokemon ID");
	const { data } = await client.query<GetPokemonQuery>({
		query: GetPokemonDocument,
		variables: { id },
	});

	if (!data) throw new Error("Pokemon not found");

	return getPokemonNormalizer(data);
}
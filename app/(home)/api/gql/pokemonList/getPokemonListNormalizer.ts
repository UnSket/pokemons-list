import { BasePokemonNormalized, basePokemonNormalizer } from "@/app/(common)";
import { GetPokemonListQuery } from "./GetPokemonList.generated";

export interface GetPokemonListNormalized {
    pokemons: BasePokemonNormalized[];
}

export const getPokemonListNormalizer = (result: GetPokemonListQuery): GetPokemonListNormalized => {
	const pokemons = result.pokemons.map(basePokemonNormalizer);

	return {
		pokemons
	};
};
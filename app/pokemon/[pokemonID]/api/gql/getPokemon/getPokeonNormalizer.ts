import { BasePokemonNormalized, basePokemonNormalizer } from "@/app/(common)/api/gql/basePokemon/basePokemonNormalizer";
import { GetPokemonQuery } from "./GetPokemon.generated";

export interface PokemonNormalized extends BasePokemonNormalized {
	stats: Array<{
		base_stat: number;
		stat: {
			name: string;
		};
	}>;
	abilities: Array<{
		ability: {
			name: string;
		};
	}>;
}

export const getPokemonNormalizer = (pokemon: GetPokemonQuery["pokemon"][number]): PokemonNormalized => {
	const basePokemon = basePokemonNormalizer(pokemon);
    
	return {
		...basePokemon,
		stats: pokemon.stats.filter(stat => stat.stat !== null) as PokemonNormalized["stats"],
		abilities: pokemon.abilities.filter(ability => ability.ability !== null) as PokemonNormalized["abilities"],
	};
};
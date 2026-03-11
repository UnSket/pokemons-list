import { BasePokemonNormalized, basePokemonNormalizer } from "@/app/(common)";
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

export const getPokemonNormalizer = (data: GetPokemonQuery): PokemonNormalized => {
	const pokemon = data.pokemon[0];
	if (!pokemon) throw new Error("Pokemon not found");
	
	const basePokemon = basePokemonNormalizer(pokemon);
    
	return {
		...basePokemon,
		stats: pokemon.stats.filter(stat => stat.stat !== null) as PokemonNormalized["stats"],
		abilities: pokemon.abilities.filter(ability => ability.ability !== null) as PokemonNormalized["abilities"],
	};
};
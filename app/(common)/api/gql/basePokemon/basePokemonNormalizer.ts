import { BasePokemonFragment } from "./BasePokemon.generated";

export interface SpritesNormalized {
  front_default: string | null;
  back_default: string | null;
  front_shiny: string | null;
  back_shiny: string | null;
}

export interface BasePokemonNormalized {
  name: string;
  id: number;
  sprites: SpritesNormalized | null;
  types: Array<{
    slot: number;
    type: {
      name: string;
      id: number;
    };
  }>;
}

export const basePokemonNormalizer = (pokemon: BasePokemonFragment): BasePokemonNormalized => {
	return {
		...pokemon,
		sprites: spritesNormalizer(pokemon.sprites[0].sprites),
		types: pokemon.types.filter(type => type.type !== null) as BasePokemonNormalized["types"],
	};
};

const spritesNormalizer = (sprites: unknown): SpritesNormalized | null => {
	if (typeof sprites !== 'object' || sprites === null) {
		return null;
	}

	return {
		front_default: getString(sprites as Record<string, unknown>, 'front_default'),
		back_default: getString(sprites as Record<string, unknown>, 'back_default'),
		front_shiny: getString(sprites as Record<string, unknown>, 'front_shiny'),
		back_shiny: getString(sprites as Record<string, unknown>, 'back_shiny'),
	};
};

function getString(value: Record<string, unknown>, fieldName: string): string | null {
	return fieldName in value && typeof value[fieldName] === 'string' ? value[fieldName] : null;
}
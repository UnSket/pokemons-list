import { TypePolicy } from "@apollo/client";

export interface SpritesNormalized {
    front_default: string | null;
    back_default: string | null;
    front_shiny: string | null;
    back_shiny: string | null;
  }

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

export const pokemonPolicy: TypePolicy = {
	fields: {
		sprites: {
			read(existing) {
				console.log("sprites existing", existing);
				return {
					existing,
					isNormalized: true,
				};
			},
		},
		pokemonsprites: {
			read(existing) {
				console.log("pokemonsprites existing", existing);

				return {
					existing,
					isNormalized: true,
				};
			},
		},
		myNewField: {
			read(_) {
				console.log("myNewField existing");
				return "myNewFieldValue";
			},
		},
	},
};
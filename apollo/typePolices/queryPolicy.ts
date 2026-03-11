import { TypePolicy } from "@apollo/client";

export const queryPolicy: TypePolicy = {
	fields: {
		pokemons: {
			keyArgs: false,
			merge(existing = [], incoming) {
				return [...existing, ...incoming];
			}
		},
	},
};
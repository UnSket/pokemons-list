'use client';

import { useQuery } from "@apollo/client/react";
import { PokemonListCard } from "./PokemonListCard";
import { GetPokemonListDocument } from "../api/gql/pokemonList";

export default function PokemonList() {
	// const { loading, data, fetchMore } = useQuery(GetPokemonListDocument, );

	return (
		<div className="min-h-screen bg-zinc-50 font-sans dark:bg-zinc-950">
			<main className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
				<h1 className="mb-8 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
					Покемоны
				</h1>
				<ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{list.pokemons.map((pokemon) => (
						<li key={pokemon.id}>
							<PokemonListCard pokemon={pokemon} />
						</li>
					))}
				</ul>
			</main>
		</div>
	);
}
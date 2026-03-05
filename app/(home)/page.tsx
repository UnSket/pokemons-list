import { fetchPokemonList } from "./api/fetchPokemonList";
import { PokemonListCard } from "./components/PokemonListCard";

export default async function Home() {
	const { results } = await fetchPokemonList();

	return (
		<div className="min-h-screen bg-zinc-50 font-sans dark:bg-zinc-950">
			<main className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
				<h1 className="mb-8 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
					Покемоны
				</h1>
				<ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{results.map((pokemon) => (
						<li key={pokemon.id}>
							<PokemonListCard pokemon={pokemon} />
						</li>
					))}
				</ul>
			</main>
		</div>
	);
}

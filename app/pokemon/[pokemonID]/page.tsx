import Link from "next/link";
import { fetchPokemon } from "./api/fetchPokemon";
import { PokemonCard } from "./components/PokemonCard";

function generateStaticParams() {}

export default async function PokemonPage(props: PageProps<'/pokemon/[pokemonID]'>) {
	const { pokemonID } = await props.params;
	const pokemon = await fetchPokemon(pokemonID);

	return (
		<div className="min-h-screen bg-zinc-100 dark:bg-zinc-900 py-8 px-4">
			<div className="mx-auto max-w-md">
				<Link
					href="/"
					className="inline-flex items-center gap-1 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 mb-6"
				>
          ← Назад к списку
				</Link>

				<PokemonCard pokemon={pokemon} />
			</div>
		</div>
	);
}

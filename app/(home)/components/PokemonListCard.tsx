import type { Pokemon } from "../api/fetchPokemonList";
import Image from "next/image";
import Link from "next/link";

interface PokemonListCardProps {
	pokemon: Pokemon;
}

export function PokemonListCard({ pokemon }: PokemonListCardProps) {
	const imageUrl =
		pokemon.sprites.front_default ??
		pokemon.sprites.front_shiny ??
		null;

	return (
		<Link href={`/pokemon/${pokemon.id}`}>
			<article className="rounded-xl bg-white dark:bg-zinc-800 shadow-md overflow-hidden border border-zinc-200 dark:border-zinc-700 transition-shadow transition-transform hover:shadow-lg hover:scale-105">
				{/* Номер */}
				<div className="bg-gradient-to-r from-amber-400 to-orange-500 px-3 py-1.5 text-right">
					<span className="text-xs font-semibold text-white/90">
						#{String(pokemon.id).padStart(3, "0")}
					</span>
				</div>

				{/* Изображение и контент */}
				<div className="flex flex-col items-center p-4 gap-2">
					{imageUrl ? (
						<Image
							src={imageUrl}
							alt={pokemon.name}
							width={96}
							height={96}
							className="drop-shadow"
						/>
					) : (
						<div className="w-24 h-24 bg-zinc-200 dark:bg-zinc-700 rounded-full flex items-center justify-center text-zinc-500 text-xs">
							No image
						</div>
					)}

					<h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100 capitalize text-center">
						{pokemon.name}
					</h2>

					{pokemon.types.length > 0 && (
						<div className="flex flex-wrap justify-center gap-1.5">
							{pokemon.types.map((t) => (
								<span
									key={t.type.name}
									className="px-2 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200"
								>
									{t.type.name}
								</span>
							))}
						</div>
					)}
				</div>
			</article>
		</Link>
	);
}

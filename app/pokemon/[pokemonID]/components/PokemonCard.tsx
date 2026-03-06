import { PokemonApi } from "../api/fetchPokemon";
import Image from "next/image";

const statLabel: Record<string, string> = {
	hp: "HP",
	attack: "Атака",
	defense: "Защита",
	"special-attack": "Спец. атака",
	"special-defense": "Спец. защита",
	speed: "Скорость",
};

export function PokemonCard({ pokemon }: { pokemon: PokemonApi }) {
	const imageUrl = 
		pokemon.sprites[0].sprites.front_default ?? 
		pokemon.sprites[0].sprites.front_shiny ?? 
		null;

	console.log(pokemon);

	return (
		<article className="rounded-2xl bg-white dark:bg-zinc-800 shadow-xl overflow-hidden border border-zinc-200 dark:border-zinc-700">
			{/* Верхняя полоса с номером */}
			<div className="bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3 text-right">
				<span className="text-sm font-semibold text-white/90">
              #{String(pokemon.id).padStart(3, "0")}
				</span>
			</div>

			{/* Изображение */}
			<div className="flex justify-center bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-800 dark:to-zinc-800 p-8">
				{imageUrl ? (
					<Image
						src={imageUrl}
						alt={pokemon.name}
						width={200}
						height={200}
						className="drop-shadow-lg"
					/>
				) : (
					<div className="w-[200px] h-[200px] bg-zinc-200 dark:bg-zinc-700 rounded-full flex items-center justify-center text-zinc-500">
                No image
					</div>
				)}
			</div>

			<div className="px-6 pb-6">
				{/* Имя */}
				<h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 capitalize text-center mt-2">
					{pokemon.name}
				</h1>

				{/* Типы */}
				{pokemon.types.length > 0 && (
					<div className="flex flex-wrap justify-center gap-2 mt-3">
						{pokemon.types.map((t) => (
							<span
								key={t.type?.name}
								className="px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200"
							>
								{t.type?.name}
							</span>
						))}
					</div>
				)}

				{/* Статы */}
				<section className="mt-6">
					<h2 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mb-3">
                Характеристики
					</h2>
					<ul className="space-y-2">
						{pokemon.stats.map((s) => (
							<li key={s.stat?.name} className="flex items-center gap-3">
								<span className="w-28 text-sm text-zinc-600 dark:text-zinc-400 shrink-0">
									{statLabel[s.stat?.name ?? ""] ?? s.stat?.name ?? ""}
								</span>
								<div className="flex-1 h-2 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
									<div
										className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
										style={{ width: `${Math.min(100, (s.base_stat / 255) * 100)}%` }}
									/>
								</div>
								<span className="w-8 text-sm font-medium text-zinc-900 dark:text-zinc-100 text-right">
									{s.base_stat}
								</span>
							</li>
						))}
					</ul>
				</section>

				{/* Способности */}
				{pokemon.abilities.length > 0 && (
					<section className="mt-6">
						<h2 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mb-3">
                  Способности
						</h2>
						<div className="flex flex-wrap gap-2">
							{pokemon.abilities.map((a) => (
								<span
									key={a.ability?.name}
									className="px-3 py-1.5 rounded-lg text-sm bg-zinc-100 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 capitalize"
								>
									{a.ability?.name.replace(/-/g, " ")}
								</span>
							))}
						</div>
					</section>
				)}
			</div>
		</article>
	);
}
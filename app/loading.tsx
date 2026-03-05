import Image from "next/image";

const PIKACHU_SPRITE =
	"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png";

export default function PokemonLoading() {
	return (
		<div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4">
			<div
				className="relative flex items-center justify-center"
				style={{ minHeight: 120 }}
			>
				{/* Glow ring */}
				<div
					className="absolute size-24 animate-pulse rounded-full opacity-60"
					style={{
						background:
							"radial-gradient(circle, rgba(255,213,0,0.4) 0%, transparent 70%)",
						animationDuration: "1.5s",
					}}
				/>
				{/* Spinning sprite container */}
				<div className="relative flex size-28 items-center justify-center rounded-full bg-amber-100/80 shadow-inner dark:bg-amber-900/20">
					<div className="absolute inset-0 animate-spin rounded-full border-4 border-amber-400/50 border-t-amber-500 dark:border-amber-500/50 dark:border-t-amber-400" />
					<Image
						src={PIKACHU_SPRITE}
						alt="Loading..."
						width={96}
						height={96}
						className="relative z-10 drop-shadow-md"
						unoptimized
					/>
				</div>
			</div>
			<p className="text-sm font-medium text-amber-700/90 dark:text-amber-300/90">
				Загружаем...
			</p>
		</div>
	);
}

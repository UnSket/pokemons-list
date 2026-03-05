function generateStaticParams() {}

export default async function PokemonPage(props: PageProps<'/pokemon/[pokemonID]'>) {
  const { pokemonID } = await props.params;
  return <div>PokemonPage {pokemonID}</div>;
}

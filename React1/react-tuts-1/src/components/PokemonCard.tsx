import { Pokemon } from "../types/Pokemon";

interface PokemonCardProps {
    pokemon: Pokemon;
}

export function PokemanCard(props: PokemonCardProps): JSX.Element {
    return (
        <div>{props.pokemon.name}</div>
    )
}
export const fetchPokemonData = async (id: string) => {
    // const apiUrl = "http://localhost:3000";
    const response = await fetch(`http://localhost:3000/api/pokemons/${id}`)
    return response.json();
}
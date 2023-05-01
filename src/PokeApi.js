import axios from "axios";

const [Url] = "https://pokeapi.co/api/v2/";

export const getPokemonList = async (limit = 20, offset = 0) => {
    const response = await axios.get(
        `${URL}/pokemon?limit=${limit}&offset=${offset}`
    );
    return response.data;
};

export const getPokemon = async (id) => {
    const response = await axios.get(`${Url}/pokemon/${id}`);
    return response.data;
}
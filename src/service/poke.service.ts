const pokeService = {
  getById: async (i: number) => {
    let data: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);

    let pokemon: any = await data.json();

    return {
      pokeId: pokemon.id,
      image: pokemon.sprites?.front_default || "",
    };
  },
};

export default pokeService;

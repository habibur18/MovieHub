import "server-only";
export const getMovies = async () => {
  const data = await import("../lib/movies.json");
  return data.default;
};

export const getMovieById = async (id) => {
  // Get the list of all movies
  const movies = await getMovies();
  // Find movie by ID
  const movie = movies.results.find((movie) => movie.id === parseInt(id));
  return movie;
};

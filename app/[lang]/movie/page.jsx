import { getMovies } from "@/utils/getMovies";
import MovieCard from "../components/MovieCard";
import { getDictionary } from "../dictionaries/dictionaries";

export default async function MoviePage({ params: { lang } }) {
  const dictionary = await getDictionary(lang);
  const movies = await getMovies();
  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
      {/* <!-- Begin Card --> */}
      {movies?.results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} dictionary={dictionary} />
      ))}
      {/* <!-- End Card --> */}
    </div>
  );
}

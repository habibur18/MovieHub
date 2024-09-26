import { getMovieById } from "@/utils/getMovies";
import MovieDetails from "../../components/MovieDetails";
import { getDictionary } from "../../dictionaries/dictionaries";

export default async function SingleMoviePage({ params: { lang, id } }) {
  const dictionary = await getDictionary(lang);
  const movie = await getMovieById(id);
  return (
    <main>
      <MovieDetails movie={movie} dictionary={dictionary} />
    </main>
  );
}

import MovieDetails from "@/app/[lang]/components/MovieDetails";
import { getDictionary } from "@/app/[lang]/dictionaries/dictionaries";
import { getMovieById } from "@/utils/getMovies";
import { notFound } from "next/navigation";
import Modal from "../../components/Modal";

export default async function SingleMoviePage({ params: { lang, id } }) {
  const dictionary = await getDictionary(lang);
  const movie = await getMovieById(id);
  if (!movie) {
    notFound();
  }
  return (
    <Modal>
      <MovieDetails movie={movie} dictionary={dictionary} />
    </Modal>
  );
}

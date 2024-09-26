import Modal from "@/app/[lang]/components/Modal";
import { getDictionary } from "@/app/[lang]/dictionaries/dictionaries";
import { getMovieById } from "@/utils/getMovies";
import Image from "next/image";

export default async function SingleMoviePage({ params: { lang, id } }) {
  const dictionary = await getDictionary(lang);
  const movie = await getMovieById(id);
  console.log("from Intercepted route", movie);
  return (
    <Modal>
      {/* <MovieDetails movie={movie} dictionary={dictionary} /> */}
      <section>
        <div>
          <Image
            className="w-full object-cover max-h-[300px] lg:max-h-[500px]"
            width={500}
            height={300}
            src={`${movie.backdrop_path}`}
            alt={movie.title}
          />
        </div>

        <div className="grid grid-cols-12 py-12 gap-8">
          <div className="col-span-2">
            <Image
              src={`${movie.poster_path}`}
              width={500}
              height={300}
              alt={movie.title}
            />
          </div>
          <div className="col-span-8">
            <h2 className="font-bold text-slate-300 text-2xl">{movie.title}</h2>
            <p className="my-2 text-slate-400 italic">{movie.overview}</p>
            <ul className="text-slate-300 space-y-2 my-8">
              <li>
                {dictionary.releaseDate}: {movie.release_date}
              </li>
              <li>
                {dictionary.averageVote}: {movie.vote_average}
              </li>
              <li>
                {dictionary.voteCount}: {movie.vote_count}
              </li>
              <li>
                {dictionary.popularity}: {movie.popularity}
              </li>
            </ul>
          </div>
          <div className="col-span-2 space-y-4">
            <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
              {dictionary.streamInHD}
            </button>
            <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
              {dictionary.downloadInHD}
            </button>
          </div>
        </div>
      </section>
    </Modal>
  );
}

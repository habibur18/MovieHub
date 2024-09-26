import Image from "next/image";
import Link from "next/link";

export default function MovieCard({ movie, dictionary }) {
  return (
    <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
      <Image
        src={movie.poster_path}
        width="354"
        height="300"
        alt={movie.title}
      />
      <figcaption className="pt-4">
        <h3 className="text-xl mb-1">{movie.title}</h3>
        <p className="text-[#575A6E] text-sm mb-2">
          {movie.genre_ids.join("/")}
        </p>
        <div className="flex items-center space-x-1 mb-5">
          {[...Array(Math.round(movie.vote_average / 2))].map((_, i) => (
            <Image key={i} src="/star.svg" width="14" height="14" alt="star" />
          ))}
        </div>
        <Link
          className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
          href={`/movie/${movie.id}`}
        >
          <Image src="/tag.svg" alt="tag" width="16" height="16" />
          <span>{dictionary.details}</span>
        </Link>
      </figcaption>
    </figure>
  );
}

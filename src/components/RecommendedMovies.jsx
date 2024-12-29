import React from "react";
import { Link } from "react-router-dom";
import pushpa from "../assets/movie/pushpa2.avif";
import john from "../assets/movie/john.avif";
import mufasa from "../assets/movie/mufasa.avif";

const movies = [
  {
    id: "pushpa",
    title: "Pushpa: The Rule",
    image: pushpa,
  },
  {
    id: "john",
    title: "Baby John",
    image: john,
  },
  {
    id: "mufasa",
    title: "Mufasa : The Lion King",
    image: mufasa,
  },
];

const RecommendedMovies = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-xl font-semibold mb-4">Recommended Movies</h2>
      <div className="w-2/3 grid grid-cols-3 gap-4">
        {movies.map((movie) => (
          <div key={movie.id} className="text-center">
            <Link to={`/movies/${movie.id}`} className="ext-black font-bold">
              <img
                src={movie.image}
                alt={movie.title}
                className="rounded-lg shadow-md w-full"
              />
              <h3 className="text-md mt-2">{movie.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedMovies;

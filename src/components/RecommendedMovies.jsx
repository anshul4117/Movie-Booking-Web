import React from "react";
import pushpa from "../assets/movie/pushpa2.avif"
import john from "../assets/movie/john.avif"
import mufasa from "../assets/movie/mufasa.avif"

const movies = [
  { title: "Pushpa", image: pushpa },
  { title: "Baby Jawan", image: john },
  { title: "The Lion King", image: mufasa },
];

const RecommendedMovies = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-xl font-semibold mb-4">Recommended Movies</h2>
      <div className=" w-2/3 grid grid-cols-3 gap-4">
        {movies.map((movie, index) => (
          <div key={index} className="text-center">
            <img
              src={movie.image}
              alt={movie.title}
              className="rounded-lg shadow-md w-full"
            />
            <h3 className="text-md mt-2">{movie.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedMovies;
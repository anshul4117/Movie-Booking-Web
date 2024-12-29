import React from "react";
import Header from "../components/Header";
import BannerCarousel from "../components/BannerCarousel";
import RecommendedMovies from "../components/RecommendedMovies";
import LiveEvents from "../components/LiveEvents";

const HomePage = () => {
  return (
    <div>
      <BannerCarousel />
      <RecommendedMovies />
      <LiveEvents />
    </div>
  );
};

export default HomePage;


// import React from "react";
// import { Link } from "react-router-dom";

// const HomePage = () => {
//   // Mock data for movies
//   const movies = [
//     { id: "pushpa-2", title: "Pushpa 2: The Rule" },
//     { id: "jawan", title: "Jawan" },
//     { id: "avatar-3", title: "Avatar 3" },
//   ];

//   return (
//     <div className="container mx-auto px-4 py-6">
//       <h2 className="text-xl font-bold">Recommended Movies</h2>
//       <ul className="mt-4 space-y-2">
//         {movies.map((movie) => (
//           <li key={movie.id}>
//             <Link
//               to={`/movies/${movie.id}`}
//               className="text-red-600 hover:underline"
//             >
//               {movie.title}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default HomePage;

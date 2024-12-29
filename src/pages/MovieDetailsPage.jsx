import React from "react";
import { useParams, Link } from "react-router-dom"; // Import useNavigate
import pushpa from "../assets/movie/pushpa2.avif";
import john from "../assets/movie/john.avif";
import mufasa from "../assets/movie/mufasa.avif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const movieData = {
  pushpa: {
    title: "Pushpa: The Rule",
    description:
      "Pushpa 2: The Rule picks up from the explosive events of the first part, following Pushpa`s meteoric rise as he expands his red sandalwood empire beyond borders. As tensions escalate with rival factions and the authorities, his growing ambitions draw him into intense confrontations and political upheavals.",
    genre: "Action, Drama",
    language: "Hindi",
    releaseDate: "15 August 2024",
    duration: "181 min",
    poster: pushpa,
    cast: [
      "Allu Arjun as Pushpa Raj",
      "Rashmika Mandanna as Srivalli",
      "Fahadh Faasil as Bhanwar Singh Shekhawat",
      "Rao Ramesh Actor",
      "Sunil Actor",
    ],
    crew: ["Director: Sukumar", "Producer: Naveen Yerneni"],
    showTimings: [
      { time: "9:00 AM", availableSeats: 50 },
      { time: "12:30 PM", availableSeats: 30 },
      { time: "6:00 PM", availableSeats: 20 },
    ],
  },
  john: {
    title: "Baby Jawan",
    description:
      "Atlee`s Baby John, starring Varun Dhawan, Jackie Shroff, Wamiqa Gabbi and Keerthy Suresh, is a high-octane action thriller that follows a fearless cop leading a double life to protect his daughter from a deadly underworld.",
    genre: "Action, Thriller",
    language: "Hindi",
    releaseDate: "22 March 2024",
    duration: "150 min",
    poster: john,
    cast: ["Varun Dhawan", "Keerthy Suresh", "Wamiqa Gabbi", "Rajpal Yadav"],
    crew: ["Director: Kalees", "Producer: Jyoti Deshpande , Murad Khetani"],
    showTimings: [
      { time: "10:00 AM", availableSeats: 40 },
      { time: "1:00 PM", availableSeats: 25 },
      { time: "8:00 PM", availableSeats: 15 },
    ],
  },
  mufasa: {
    title: "Mufasa : The Lion King",
    description:
      "A live-action rendition of the classic tale of Simba's journey to become king.",
    genre: "Animation, Adventure",
    language: "English",
    releaseDate: "10 July 2024",
    duration: "118 min",
    poster: mufasa,
    cast: [
      "Aaron Pierre",
      "Shah Rukh Khan",
      "Mahesh Babu",
      "Kelvin Harrison Jr.",
      "Seth Rogen",
    ],
    crew: ["Director: Barry Jenkins", "Musician: Hans Zimmer"],
    showTimings: [
      { time: "11:00 AM", availableSeats: 45 },
      { time: "3:00 PM", availableSeats: 35 },
      { time: "7:00 PM", availableSeats: 10 },
    ],
  },
};

const MovieDetailsPage = () => {
  const { id } = useParams();
  const movie = movieData[id]; // Get movie details based on the ID from URL

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex bg-gray-200 h-full ml-3 gap-8 justify-center items-center">
        {/* Poster Section */}
        <div className="w-1/5 flex mt-3 mb-3 gap-4">
          <img
            src={movie.poster}
            alt={movie.title}
            className="rounded-lg h-4/5 shadow-md w-full"
          />
        </div>

        {/* Movie Details Section */}
        <div className="w-2/3">
          <h1 className="text-3xl font-bold text-black-600">{movie.title}</h1>
          <section className="flex flex-col w-2/4 mt-4 gap-6 bg-white p-4 rounded-md shadow-lg">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-yellow-400 w-6 h-6"
                />
                <h5 className="text-lg font-bold">8.4/10</h5>
                <h6 className="text-gray-500 text-sm">(397.8K Votes)</h6>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-gray-400 w-3 h-3"
                />
              </div>
              <button className="bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700">
                Rate now
              </button>
            </div>
          </section>

          <ul className="mt-4 space-y-1">
            <li>
              <strong>Genre:</strong> {movie.genre}
            </li>
            <li>
              <strong>Language:</strong> {movie.language}
            </li>
            <li>
              <strong>Release Date:</strong> {movie.releaseDate}
            </li>
            <li>
              <strong>Duration:</strong> {movie.duration}
            </li>
          </ul>

          {/* Book Ticket Button */}
          <Link
            to={`/movies/${id}/shows`}
            className="bg-red-600 mt-5 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg inline-block"
          >
            Book Ticket
          </Link>
        </div>
      </div>

      {/* About The Movie */}
      <div className="flex flex-col gap-8 ml-20 justify-center">
        <h2 className="text-2xl mt-10 font-bold text-balck-600">About The Movie</h2>
        <p className="w-2/3 text-gray-700">{movie.description}</p>
      </div>

      {/* Cast and Crew Section */}
      <div className="mt-8 gap-8 ml-20">
        <h2 className="text-xl font-semibold mb-2">Cast</h2>
        <ul className="list-disc list-inside">
          {movie.cast.map((actor, index) => (
            <li key={index}>{actor}</li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">Crew</h2>
        <ul className="list-disc list-inside">
          {movie.crew.map((member, index) => (
            <li key={index}>{member}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieDetailsPage;

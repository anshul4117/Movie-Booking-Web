import React, { useState } from "react";

const mockData = {
  movie: {
    title: "Pushpa 2: The Rule",
    language: "Hindi",
    genre: "Action/Drama",
    duration: "2h 50m",
  },
  dates: ["29 Dec", "30 Dec", "31 Dec", "1 Jan"],
  cinemas: [
    {
      name: "INOX: PVS Mall, Meerut",
      address: "First Floor, Meerut Mall, Delhi Road",
      shows: ["10:00 AM", "1:30 PM", "5:00 PM", "9:00 PM"],
    },
    {
      name: "NY Satyam Cinema: Meerut",
      address: "Ground Floor, Central Mall, Meerut ",
      shows: ["11:00 AM", "2:30 PM", "6:00 PM",],
    },
    {
      name: "Wave: Meerut",
      address: "kanker khera, Central Mall, Meerut Cantt",
      shows: ["12:30 PM", "4:00 PM",],
    },
  ],
};

const ShowTimingsPage = () => {
  const [selectedDate, setSelectedDate] = useState(mockData.dates[0]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Movie Information */}
      <div className="bg-gray-100 p-4 rounded-md shadow-md">
        <h1 className="text-3xl font-bold text-black">{mockData.movie.title}</h1>
        <p className="mt-2 text-gray-700">
          {mockData.movie.language} | {mockData.movie.genre} | {mockData.movie.duration}
        </p>
      </div>

      {/* Date Selector */}
      <div className="mt-6 flex gap-4">
        {mockData.dates.map((date) => (
          <button
            key={date}
            onClick={() => setSelectedDate(date)}
            className={`px-4 py-2 rounded-md ${selectedDate === date
              ? "bg-red-600 text-white"
              : "bg-gray-200 text-gray-700"
              }`}
          >
            {date}
          </button>
        ))}
      </div>

      {/* Cinemas and Show Timings */}
      <div className="mt-8 space-y-6">
        {mockData.cinemas.map((cinema, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-md shadow-md">
            <h2 className="text-sm font-semibold text-gray-800">{cinema.name}</h2>
            <p className="text-sm text-gray-600">{cinema.address}</p>

            <div className="mt-4 flex gap-4 flex-wrap">
              {cinema.shows.map((time, idx) => (
                <button
                  key={idx}
                  className="px-4 py-2 border-2 border-gray-400 text-green-600 rounded-md"
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowTimingsPage;

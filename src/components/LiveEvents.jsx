import React from "react";

const events = [
  { title: "Workshops", image: "https://via.placeholder.com/200x200" },
  { title: "Comedy Shows", image: "https://via.placeholder.com/200x200" },
  { title: "Music Shows", image: "https://via.placeholder.com/200x200" },
];

const LiveEvents = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-xl font-semibold mb-4">The Best of Live Events</h2>
      <div className="grid grid-cols-3 gap-4">
        {events.map((event, index) => (
          <div key={index} className="text-center">
            <img
              src={event.image}
              alt={event.title}
              className="rounded-lg shadow-md w-full"
            />
            <h3 className="text-md mt-2">{event.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LiveEvents;

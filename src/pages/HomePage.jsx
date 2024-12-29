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

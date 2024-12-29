import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="bg-gray-50 min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/:id" element={<MovieDetailsPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;

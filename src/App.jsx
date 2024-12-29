import React from "react";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-50 min-h-screen">
        <HomePage />
      </div>
      <Footer />
    </>
  );
};

export default App;

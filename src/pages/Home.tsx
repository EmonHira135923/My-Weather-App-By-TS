import React from "react";

const Home: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-sky-400 to-blue-600 px-4">
      <div className="bg-white/20 backdrop-blur-md rounded-2xl shadow-2xl p-10 max-w-2xl text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Weather App</h1>
        <p className="text-lg mb-2">Welcome to my Weather App project.</p>
        <p className="text-lg mb-2">
          This app shows you the current weather and forecast of any city.
        </p>
        <p className="text-lg mb-2">Built with React and TypeScript.</p>
        <p className="text-xl font-semibold mt-6">
          Created by Emon Hossain Hira
        </p>
      </div>
    </section>
  );
};

export default Home;

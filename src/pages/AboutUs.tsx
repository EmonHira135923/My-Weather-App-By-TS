import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-400 to-blue-600 px-4">
      <div className="bg-white/20 backdrop-blur-md rounded-2xl shadow-2xl p-10 max-w-3xl text-center text-white">
        <h1 className="text-5xl font-bold mb-6">About Us</h1>

        <p className="text-lg mb-4">
          This Weather App is a simple project built to help users check the
          current weather and forecast of any city around the world.
        </p>

        <p className="text-lg mb-4">
          It is built with React and TypeScript, styled with Tailwind CSS, and
          powered by a public weather API to fetch real-time data.
        </p>

        <p className="text-lg mb-4">
          This project is created as part of my learning journey in frontend
          development.
        </p>

        <div className="mt-8 border-t border-white/30 pt-6">
          <h2 className="text-2xl font-semibold mb-2">Developer</h2>
          <p className="text-xl font-bold">Emon Hossain Hira</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const images = [
  "https://www.saylaniwelfare.com/static/media/logo_saylaniwelfare.22bf709605809177256c.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-XAwfwpgQrPDXOxhQ7HtTHP1WGiqrltTJHQ&s",
];

const Home = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-yellow-300 via-pink-400 to-purple-600 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-6xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Image Section */}
        <div className="h-72 md:h-auto">
          <img
            id="program-image"
            src={images[currentImageIndex]}
            alt="Qarze Hasana Program"
            className="w-full h-full object-cover transition-transform duration-500 scale-105"
          />
        </div>

        {/* Content Section */}
        <div className="p-10 flex flex-col justify-center text-center md:text-left bg-gradient-to-br from-white via-yellow-50 to-yellow-100">
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-800">
            Saylani Welfare <br /> Qarze Hasana Program
          </h1>
          <p className="mt-5 text-lg md:text-xl text-gray-700 leading-relaxed">
            Empowering communities with interest-free loans to support small
            businesses and improve livelihoods. Join us in making a difference!
          </p>
          <button
            onClick={() => navigate("/category")}
            className="mt-8 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold text-lg px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

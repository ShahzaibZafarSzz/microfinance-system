import React from "react";

const Card = () => {
  return (
    <div className="max-w-sm bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-transform duration-300">
      <h2 className="text-2xl font-bold mb-4">Card Title</h2>
      <p className="text-sm mb-6">
        This is a beautifully designed card. Add your custom content here to make it more informative.
      </p>
      <button className="bg-white text-purple-600 font-semibold px-6 py-2 rounded-full hover:bg-purple-100 transition-colors duration-300">
        Learn More
      </button>
    </div>
  );
};

export default Card;

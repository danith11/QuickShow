import React from "react";
import { assets } from "../assets/assets";

const MovieCard = ({ movie }) => {
  return (
    <div className="flex flex-col justify-between p-3 bg-gray-800 rounded-2xl hover:translate-y-1 transition duration-300 w-66">
      <img
        src={movie.backdrop_path}
        className="rounded-lg h-52 w-full object-cover object-right-bottom cursor-pointer"
        alt=""
      />
    </div>
  );
};

export default MovieCard;

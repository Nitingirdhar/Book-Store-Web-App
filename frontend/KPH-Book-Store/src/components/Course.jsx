import React from "react";
import { Link } from "react-router-dom";
import list from "../../public/list.json";
import Cards from "./Cards";

const Course = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            Explore Our Collection of{" "}
            <span className="text-pink-500"> Books :)</span>
          </h1>

          <p className="mt-12">
            Welcome to our diverse library at Gagan Book Store! Here, you can
            discover an extensive range of both free and paid books, carefully
            curated to cater to every reader's taste. Whether you're seeking
            thrilling adventures, heartwarming tales, or insightful non-fiction,
            our collection promises something for everyone.
          </p>

          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        {/* Cards element*/}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;

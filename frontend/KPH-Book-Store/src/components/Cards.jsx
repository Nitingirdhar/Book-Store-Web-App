import React from "react";

const Cards = ({ item }) => {
  return (
    <div className="mt-4 my-3 p-3">
      <div className="card w-96 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img src={item.image} alt={item.title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            {item.tags ? (
              item.tags.map((tag, index) => (
                <div className="badge badge-outline" key={index}>
                  {tag}
                </div>
              ))
            ) : (
              <>
                <div className="badge badge-outline">₹{item.price}</div>
                <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                  Buy Now
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

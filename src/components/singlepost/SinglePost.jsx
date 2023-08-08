import React from "react";
import "./singlepost.css";

export default function SinglePost() {
  return (
    <div className="singlepost">
      <div className="singlepostWrapper">
        <img
          src="https://img.freepik.com/free-photo/reflection-lights-mountain-lake-captured-parco-ciani-lugano-switzerland_181624-24209.jpg?w=1380&t=st=1691485558~exp=1691486158~hmac=d9dc680da95e1638a87d1a648dc41e702b491c47b21d5a9f40d3334aa5c0fe36"
          alt=""
          className="singlepostImg"
        />
        <h1 className="singlepostTitle">
          Lorem, ipsum dolor.
          <div className="singlepostEdit">
            <i className="singlepostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlepostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlepostInfo">
          <span className="singlepostAuthor">
            Author:
            <b className="singlepostAuthorName">Safak</b>
          </span>
          <span className="singlepostDate">1 hour ago</span>
        </div>
        <p className="singlepostDesc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
          delectus temporibus exercitationem iure cupiditate labore
          necessitatibus magni accusamus hic, sapiente harum quam nulla fugit
          tempora, reprehenderit magnam? Veritatis soluta maxime voluptatum nam
          tempora eligendi at, mollitia maiores, aliquid sint porro non officiis
          sapiente deleniti perferendis placeat. Ipsa, veritatis. Totam,
          similique! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Quae delectus temporibus exercitationem iure cupiditate labore
          necessitatibus magni accusamus hic, sapiente harum quam nulla fugit
          tempora, reprehenderit magnam? Veritatis soluta maxime voluptatum nam
          tempora eligendi at, mollitia maiores, aliquid sint porro non officiis
          sapiente deleniti perferendis placeat. Ipsa, veritatis. Totam,
          similique!
        </p>
      </div>
    </div>
  );
}

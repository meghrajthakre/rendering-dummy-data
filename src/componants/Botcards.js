import React from "react";
import moviesData from "../Moviesdata";
const Botcards = () => {
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          {moviesData.map((m) => {
            return (
              <>
                <div className=" col-md-4 mb-5 mt-5">
                  <div className="card mycard ">
                    <img src={m.image} className="card-img-top myImg" />
                    <div className="card-body">
                      <h5 className="card-title">{m.name}</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <p>{m.rating}</p>
                      <a href={m.link} className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Botcards;

import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../axios";

const baseURL = "https://images.tmdb.org/t/p/w500/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [showPanel, togglePanel] = useState(false);
  const [description, setDescription] = useState({});

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    setDescription(movie);
  };

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div className="row">
      <h3 className="row__title">{title}</h3>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${baseURL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
              // === null
              // ? movie.poster_path
              // : movie.backdrop_path
            }`}
            alt={movie.name}
            onClick={() => {
              handleClick(movie);
              togglePanel(!showPanel);
            }}
          />
        ))}
      </div>
      {showPanel && (
        <div className="content">
          <div className="content__background">
            <div className="content__background__shadow" />
            <div
              className="content__background__image"
              style={{
                "background-image": `url("https://images.tmdb.org/t/p/original/${description?.backdrop_path}")`
              }}
            />
          </div>
          <div className="content__area">
            <div className="content__area__container">
              <div className="content__title">
                {description.title ||
                  description.name ||
                  description.original_name}
              </div>
              <div className="content__description">
                {truncate(description.overview, 200)}
                <div className="row__buttons">
                  <button className="row__button">Play</button>
                  <button className="row__button mylist">My List</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Row;

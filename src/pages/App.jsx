import React, { useEffect, useState } from "react";
{
  /*Import React*/
}

import "./App.css";

import loadingu from "../assets/desktop.png";
import logo from "../assets/devflix.png";
import searchIcon from "../assets/search.svg";
import arrowIcon from "../assets/chevron-forward-outline.svg";
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js";
import MovieCard from "../components/movieCard/movieCard";
import Footer from "../components/footer/footer";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  {
    /*Initialize searchTerm with an empty string*/
  }
  const [movies, setMovies] = useState([]);

  const apiKey = "d6d255de";
  const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}`;

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();

    console.log(data);
    {
      /*You can use data to update your UI with movie information*/
    }
    setMovies(data.Search);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      {
        /* Use lowercase "key"*/
      }
      searchMovies(searchTerm);
    }
  };

  return (
    <div id="app">
      <div id="my-image">
        <img src="src/assets/desktop.png"></img>
      </div>
      <div className="menuHead">
        <div className="logo">
          <img
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyPress}
            src={logo}
            alt="logo devflix"
          />
        </div>
        <div className="linkHead">
          <ul>
            <li>
              <a href={"#"}>Inicio</a>
            </li>
            <li>
              <a href={"#"}>Filmes</a>
            </li>
            <li>
              <a href={"#"}>Séries</a>
            </li>
          </ul>
        </div>
        <div className="search">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Pesquise por filmes"
          />
          <img
            src={searchIcon}
            alt="Icone de pesquisa"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          <div class="alta">
            <p>
              <a>Em Alta</a>
            </p>
            <img src={arrowIcon} alt="Icone de pesquisa" />
          </div>
          <section className="sectio">
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movies={movie} />
            ))}
          </section>
        </div>
      ) : (
        <div className="empty">
          <h2>Nenhum filme encontrado😥</h2>
        </div>
      )}
      {movies?.length > 0 ? (
        <div className="container">
          <div class="recomendado">
            <p>
              <a>Recomendado</a>
            </p>
            <img src={arrowIcon} alt="Icone de pesquisa" />
          </div>
          <section className="sectio">
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movies={movie} />
            ))}
          </section>
        </div>
      ) : (
        <div className="empty">
          <h2></h2>
        </div>
      )}
      <Footer link={"https://github.com.br/SmzFz"}>@SmzFz</Footer>
    </div>
  );
};


export default App;

import React from "react";
import "./App.css";
import Row from "./components/Row";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Documentries" fetchUrl={requests.fetchDocumentries} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
}

export default App;

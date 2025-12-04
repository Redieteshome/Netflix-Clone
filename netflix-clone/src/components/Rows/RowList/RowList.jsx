import React from 'react'
import Row from '../Row/Row'
import requests from "../../../utils/request";
function RowList() {
  return (
    <>
      {/* 
        Each <Row /> represents a horizontal movie category on the homepage.
        We pass 3 props:
        - title → The text shown above the row
        - fetchUrl → The TMDB API endpoint used to fetch movies for that row
        - isLargeRow → Optional; makes posters bigger (usually for Netflix Originals)
      */}

      {/* Netflix originals row (bigger posters) */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Tv Shows" fetchUrl={requests.fetchTvShow} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </>
  );
}

export default RowList
import React, { useEffect, useState } from "react";
import "./row.css";
import axios from "../../../utils/axios";

import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

function Row({ title, fetchUrl, isLargeRow }) {
  // State to hold all movies for this row
  const [movies, SetMovie] = useState([]);

  // State to store YouTube trailer video ID
  const [trailerUrl, SetTrailerUrl] = useState("");

  // Base path for TMDB images
  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    // Fetch movies for this specific row when fetchUrl changes
    (async () => {
      try {
        const request = await axios.get(fetchUrl);

        // Logs the API response for debugging
        console.log(request);

        // Save movie list to state
        SetMovie(request.data.results);
      } catch (error) {
        // Log error if API call fails
        console.log("error", error);
      }
    })();
  }, [fetchUrl]);
  // Re-run if fetchUrl passed from parent changes

  // Handles clicking a movie poster to show/hide the trailer
  const handleClick = (movie) => {
    if (trailerUrl) {
      // If trailer is already open, close it
      SetTrailerUrl("");
    } else {
      // Find a YouTube trailer based on movie title/name
      movieTrailer(movie?.title || movie?.name || movie?.original_name).then(
        (url) => {
          // Extract the "v" parameter (video ID) from the YouTube URL
          const urlParams = new URLSearchParams(new URL(url).search);

          // Store video ID in state
          SetTrailerUrl(urlParams.get("v"));
        }
      );
    }
  };

  // YouTube player settings
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1, // Auto-play trailer
    },
  };

  return (
    <>
      {/* Row wrapper */}
      <div className="row">
        {/* Row title (Trending Now, Top Rated, etc.) */}
        <h1>{title}</h1>

        {/* Container for all movie posters */}
        <div className="row_posters">
          {movies?.map((movie, index) => (
            <img
              // When clicked, show trailer for this movie
              onClick={() => handleClick(movie)}
              key={index}
              // Poster or backdrop based on size prop
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              // Apply big poster class only if isLargeRow is true
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            />
          ))}
        </div>

        {/* Trailer appears below row when poster is clicked */}
        <div style={{ padding: "40px" }}>
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
      </div>
    </>
  );
}

export default Row;

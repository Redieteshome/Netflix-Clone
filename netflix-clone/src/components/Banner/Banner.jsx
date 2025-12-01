import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/request";
import "./Banner.css";

function Banner() {
  // State to hold the randomly selected movie displayed in the banner
  const [movie, setMovie] = useState({});

  useEffect(() => {
    // Immediately-invoked async function to fetch Netflix Originals
    (async () => {
      try {
        // Fetch the list of Netflix original shows/movies
        const request = await axios.get(requests.fetchNetflixOriginals);

        // Pick one random movie from the results
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        // Log any errors if API request fails
        console.log("error", error);
      }
    })();
  }, []);
  // Empty dependency array: runs only once when component mounts

  // Helper function: shortens long descriptions (Netflix-style)
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <>
      {/* Banner section with dynamic background based on movie backdrop */}
      <div
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Main banner content: title, buttons, description */}
        <div className="banner_contents">
          {/* Movie title (Netflix uses title OR name OR original_name) */}
          <h1 className="banner_title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>

          {/* Play + My List buttons */}
          <div className="banner_buttons">
            <button className="banner_button play">Play</button>
            <button className="banner_button">My List</button>
          </div>

          {/* Truncated movie description */}
          <h1 className="banner_description">
            {truncate(movie?.overview, 150)}
          </h1>
        </div>

        {/* Fade effect at bottom  */}
        <div className="fadebottom" />
      </div>
    </>
  );
}

export default Banner;

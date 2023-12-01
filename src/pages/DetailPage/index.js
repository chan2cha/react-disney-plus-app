import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";

export const DetailPage = () => {
  let { movieId } = useParams();
  const [movie, setmovie] = useState({});
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`/movie/${movieId}`);
      setmovie(response.data);
      console.log("response", response);
    }
    fetchData();
  }, [movieId]);

  if (!movie) return null;
  return (
    <section>
      <img
        className="modal__poster-img"
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="img"
      ></img>
    </section>
  );
};

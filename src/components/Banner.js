import axios from "../api/axios";
import React, { useEffect, useState } from "react";
import requests from "../api/request";
import "./Banner.css";
import styled from "styled-components";
export const Banner = () => {
  const [movie, setMovie] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    fetchData();

    return () => {
      /* cleanup code */
    };
  }, []);

  const fetchData = async () => {
    //현재 상영중인 영화 정보를 가져오기(여러영화)
    const request = await axios.get(requests.fetchNowPlaying);
    //여러 영화중 랜덤으로 영화 하나 ID 가져오기
    const movieId =
      request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ].id;
    //특정 영화의 더 상세한 정보 가져오기 ( 비디오 정보도 포함)
    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_response: "videos" },
    });
    setMovie(movieDetail);
  };
  const trunscate = (str, n) => {
    return str?.length > n ? str.substring(0, n) + "..." : str;
  };
  if (isClicked) {
    return (
      <>
        <Container>
          <HomeContainer>
            <Iframe
              src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=1&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen"
            ></Iframe>
          </HomeContainer>
        </Container>
        <button onClick={() => setIsClicked(false)}>x</button>
      </>
    );
  } else {
    return (
      <header
        className="banner"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie.title || movie.name || movie.original_name}
          </h1>
          <div className="banner__buttons">
            {movie?.videos?.results[0]?.key && (
              <button
                className="banner__button play"
                onClick={() => setIsClicked(true)}
              >
                Play
              </button>
            )}
          </div>
          <p className="banner__description">
            {trunscate(movie.overview, 100)}
          </p>
        </div>
        <div className="banner--fadeBottom" />
      </header>
    );
  }
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;

  &::after {
    content: "";
    position: absoulte;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

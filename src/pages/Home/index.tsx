import React, { useEffect, useState } from 'react';
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi';
import _ from 'lodash';
import api from '../../services/api';
import TMDBLogo from '../../assets/tmdb_logo.svg';
import {
  Movie,
  Information,
  Informations,
  Source,
  Footer,
  GeneralInformation,
} from './styles';

interface MovieResponse {
  results: Movie[];
  page: number;
  total_pages: number;
}
interface Movie {
  id: number;
  original_title: string;
  poster_path: string;
  overview: string;
  title: string;
  runtime: number;
  genres: {
    id: number;
    name: string;
  }[];
}

const Home: React.FC = () => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const getRandomMovie = () => {
    api
      .get<MovieResponse>('/movie/popular', {
        params: {
          api_key: process.env.REACT_APP_TMDB_API_KEY,
          language: 'pt-BR',
          region: 'BR',
        },
      })
      .then((response) => {
        const randomMovie = _.sample(response.data.results);
        api
          .get<Movie>(`/movie/${randomMovie?.id}`, {
            params: {
              api_key: process.env.REACT_APP_TMDB_API_KEY,
              language: 'pt-BR',
              region: 'BR',
            },
          })
          .then((responseMovieDetail) => setMovie(responseMovieDetail.data));
      });
  };
  useEffect(() => {
    getRandomMovie();
  }, []);

  const handleNextMovie = (type = 'similar') => {
    api
      .get<MovieResponse>(`/movie/${movie?.id}/${type}`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_API_KEY,
          language: 'pt-BR',
          region: 'BR',
        },
      })
      .then((response) => {
        const randomMovie = _.sample(response.data.results);
        api
          .get<Movie>(`/movie/${randomMovie?.id}`, {
            params: {
              api_key: process.env.REACT_APP_TMDB_API_KEY,
              language: 'pt-BR',
              region: 'BR',
            },
          })
          .then((responseMovieDetail) => setMovie(responseMovieDetail.data));
      });
  };

  return (
    <>
      {(movie && (
        <Movie>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <Source>
            <h1>{movie.title}</h1>
            <h2>{movie.original_title}</h2>
            <Informations>
              <Information>{`${movie.runtime} MIN`}</Information>
              <Information>|</Information>
              {movie.genres?.slice(0, 4).map((genre) => (
                <Information key={genre.id}>{genre.name}</Information>
              ))}
            </Informations>
            <p>{movie.overview}</p>
            <Footer>
              <FiThumbsDown size={32} onClick={getRandomMovie} />
              <FiThumbsUp size={32} onClick={() => handleNextMovie()} />
            </Footer>
          </Source>
        </Movie>
      )) ||
        null}
      <GeneralInformation>
        <h1>
          Rocket Machine Apps | Sistema de Recomendação de Filmes: Andromeda
        </h1>
        <a href="mailto:fabiolopes.dev@gmail.com">
          Críticas, Sugestõesou ideias? Entre em contato conosco clicando aqui
        </a>
        <p>ou através do email: fabiolopes.dev@gmail.com</p>
        <div>
          <span>Usamos e recomendamos</span>
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={TMDBLogo} alt="The Movies Database" />
          </a>
        </div>
      </GeneralInformation>
    </>
  );
};

export default Home;

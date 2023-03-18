// Use AxiosResponse from axios to access the response data
import axios from "axios";
import { getQuery } from "../utils/get-query";
import {
  MovieResponseType,
  SingleMovieResponseType,
} from "../utils/movie-type";

type MovieApiType = {
  all: (page: number, limit?: number) => Promise<MovieResponseType>;
  get: (movieID: number) => Promise<SingleMovieResponseType>;
};

const SERVER_BASE_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

const config = {
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
    "Content-Type": "application/json",
  },
};

const MovieApi: MovieApiType = {
  all: (page: number, limit: number = 10) =>
    axios.get(
      `${SERVER_BASE_URL}/movies?populate=*&${getQuery(limit, page)}`,
      config
    ),

  get: (movieID: number) =>
    axios.get(`${SERVER_BASE_URL}/movies/${movieID}?populate=*`, config),
};

export default MovieApi;

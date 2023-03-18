// Use AxiosResponse from axios to access the response data
import axios from "axios";
import { getQuery } from "../utils/get-query";
import { MovieResponseType } from "../utils/movie-type";

type MovieApiType = {
  all: (page: number, limit?: number) => Promise<MovieResponseType>;
};

const SERVER_BASE_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

const MovieApi: MovieApiType = {
  all: (page: number, limit: number = 10) =>
    axios.get(`${SERVER_BASE_URL}/movies?populate=*&${getQuery(limit, page)}`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
        "Content-Type": "application/json",
      },
    }),
};

export default MovieApi;

import { MovieDataType } from "./movie-type";

export const getSmallPoster = (movie: MovieDataType): string =>
  movie.attributes.poster.data.attributes.formats.small.url.replace(
    "https://https",
    "https://aicdn.sgp1.cdn.digitaloceanspaces.com"
  );

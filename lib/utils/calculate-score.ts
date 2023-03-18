import { MovieDataType } from "./movie-type";

export const CalculateOverall = (movie: MovieDataType): number => {
  const violence_rating = movie.attributes.violence_rating;
  const inappropriate_rating = movie.attributes.inappropriate_rating;
  const language_rating = movie.attributes.language_rating;

  const total = violence_rating + inappropriate_rating + language_rating;

  return (total * 100) / 300;
};

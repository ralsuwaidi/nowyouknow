import { useState, useEffect } from "react";
import { NextPage } from "next";
import Link from "next/link";
import SearchBar from "../components/list/search-bar";
import { MovieResponseType } from "../lib/utils/movie-type";
import { getSmallPoster } from "../lib/utils/get-image-url";
import MovieApi from "../lib/api/movie";

const MovieList: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movieResponse, setMovieResponse] = useState<MovieResponseType>();

  useEffect(() => {
    MovieApi.all(0, 15).then((response) => {
      setMovieResponse(response);
      setIsLoading(false);
    }).catch((error) => {
      console.error(error);
      setIsLoading(false);
    });

  }, []);

  return (
    <div className=" max-w-4xl mx-auto">
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
        </div>
      ) : (
        <div className="mx-4 mt-4 md:mt-8">
          <p className="text-white text-3xl md:text-5xl font-bold">NowYouKnow</p>

          <div className="mt-4 md:mt-8">
            <SearchBar />
          </div>

          {/* {movies.map((movie) => (
            <p>{movie.title}</p>
          ))} */}


          <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 mt-4 md:mt-8 h-48">
            {movieResponse?.data.data.map((movie) => (
              <div key={movie.id}>
                <Link href={`/movie/${movie.id}`}>
                  <div className="h-48 md:h-64">
                    <img
                      src={getSmallPoster(movie)}
                      alt="alt"
                      className="object-cover h-full w-full rounded-lg"
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieList;

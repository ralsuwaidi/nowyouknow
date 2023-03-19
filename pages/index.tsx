import { useState, useEffect } from "react";
import { NextPage } from "next";
import Link from "next/link";
import SearchBar from "../components/list/search-bar";
import { MovieResponseType } from "../lib/utils/movie-type";
import MovieApi from "../lib/api/movie";
import { getSmallPoster } from "../lib/utils/get-query";
import { CalculateOverall } from "../lib/utils/calculate-score";
import LoadingSpinner from "../components/common/LoadingSpinner";
import Head from "next/head";

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
    <div className=" max-w-4xl mx-auto ">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="mx-4 mt-4 md:mt-8 ">

          <Head>
            <title>Movie List | NowYouKnow</title>
            <meta name="description" content="Read reviews and ratings for The Godfather on NowYouKnow, the app designed to provide parents with information about movies and TV shows." />
            <meta property="og:title" content="Movie List | NowYouKnow" />
            <meta property="og:description" content="Read reviews and ratings for The Godfather on NowYouKnow, the app designed to provide parents with information about movies and TV shows." />
            <meta property="og:image" content="https://example.com/godfather-poster.jpg" />
            <meta property="og:image:alt" content="The Godfather movie poster" />
          </Head>

          <p className="text-white text-3xl md:text-5xl font-bold">NowYouKnow</p>

          <div className="mt-4 md:mt-8">
            <SearchBar setMovieResponse={setMovieResponse} />
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 mt-5 md:mt-8 h-48 ">
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

                  <div className="w-full my-auto mt-1">
                    <div className="w-full bg-slate-600 rounded h-1.5 dark:bg-gray-700">
                      <div
                        className="bg-teal-500 rounded h-1.5"
                        style={{ width: `${CalculateOverall(movie)}%` }}
                      ></div>
                    </div>
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

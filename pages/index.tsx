import { NextPage } from "next"
import Link from "next/link"
import SearchBar from "../components/list/search-bar"


const movies = [
  {
    id: 1,
    imageUrl: 'https://static.invenglobal.com/upload/image/2021/10/13/i1634084905769735.jpeg',
    alt: 'Movie 1',
  },
  {
    id: 2,
    imageUrl: 'https://marketplace.canva.com/EAFDTAjD2B4/1/0/1131w/canva-black-white-simple-minimalist-horror-movie-poster-fnqnDrM2sT8.jpg',
    alt: 'Movie 2',
  },
  {
    id: 3,
    imageUrl: 'https://marketplace.canva.com/EAFJpIb0kEE/1/0/1131w/canva-brown-red-creative-modern-drama-movie-poster-ZGqhKScvp5E.jpg',
    alt: 'Movie 3',
  },
  {
    id: 3,
    imageUrl: 'https://marketplace.canva.com/EAFKCougWxw/2/0/1131w/canva-minimalist-documenter-never-be-alone-movie-poster-TrbqaWjvEpM.jpg',
    alt: 'Movie 3',
  },
  {
    id: 3,
    imageUrl: 'https://marketplace.canva.com/EAFKw88rLh4/1/0/1131w/canva-black-and-white-modern-minimalist-terrible-scream-movie-poster-9jzYL1R-3pE.jpg',
    alt: 'Movie 3',
  },
  {
    id: 3,
    imageUrl: 'https://static.invenglobal.com/upload/image/2021/10/13/i1634084905769735.jpeg',
    alt: 'Movie 3',
  },
  {
    id: 3,
    imageUrl: 'https://static.invenglobal.com/upload/image/2021/10/13/i1634084905769735.jpeg',
    alt: 'Movie 3',
  },
  {
    id: 3,
    imageUrl: 'https://static.invenglobal.com/upload/image/2021/10/13/i1634084905769735.jpeg',
    alt: 'Movie 3',
  },
  {
    id: 3,
    imageUrl: 'https://static.invenglobal.com/upload/image/2021/10/13/i1634084905769735.jpeg',
    alt: 'Movie 3',
  },
];


const MovieList: NextPage = () => {
  return (
    <div className=" mx-4 mt-4 md:mt-8">

      <p className=" text-white text-3xl md:text-5xl font-bold">NowYouKnow</p>

      <div className=" mt-4 md:mt-8">
        <SearchBar />
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 mt-4 md:mt-8 h-48">
        {movies.map((movie) => (
          <div key={movie.id} >
            <Link href={`/movie/${movie.id}`}>
              <img
                src={movie.imageUrl}
                alt={movie.alt}
                className="object-cover h-full w-full rounded-lg"
              />
            </Link>
          </div>
        ))}
      </div>

    </div >
  )
}


export default MovieList
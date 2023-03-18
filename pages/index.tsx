import { NextPage } from "next"
import Link from "next/link"
import SearchBar from "../components/list/SearchBar"



const MovieList: NextPage = () => {
  return (
    <div className=" mx-4 mt-4">

      <p className=" text-white text-3xl font-bold">NowYouKnow</p>

      <SearchBar />

      <div className="grid grid-cols-3 gap-3 mt-4 h-48">
        <Link href="/movie/3">
          <img
            src="https://static.invenglobal.com/upload/image/2021/10/13/i1634084905769735.jpeg"
            alt="alt name"
            className=" object-cover h-full w-full rounded-lg"
          />
        </Link>

        <Link href="/movie/3">
          <img
            src="https://marketplace.canva.com/EAFH3gODxw4/1/0/1131w/canva-black-%26-white-modern-mystery-forest-movie-poster-rLty9dwhGG4.jpg"
            alt="alt name"
            className=" object-cover h-full w-full rounded-lg"
          />
        </Link>

        <Link href="/movie/3">
          <img
            src="https://marketplace.canva.com/EAE--qO1Or0/1/0/1600w/canva-black-and-red-minimalist-movie-poster-landscape-wN-DsZQzivs.jpg"
            alt="alt name"
            className=" object-cover h-full w-full rounded-lg"
          />
        </Link>

        <Link href="/movie/3">
          <img
            src="https://static.invenglobal.com/upload/image/2021/10/13/i1634084905769735.jpeg"
            alt="alt name"
            className=" object-cover h-full w-full rounded-lg"
          />
        </Link>


        <Link href="/movie/3">
          <img
            src="https://marketplace.canva.com/EAFH3gODxw4/1/0/1131w/canva-black-%26-white-modern-mystery-forest-movie-poster-rLty9dwhGG4.jpg"
            alt="alt name"
            className=" object-cover h-full w-full rounded-lg"
          />
        </Link>

        <Link href="/movie/3">
          <img
            src="https://static.invenglobal.com/upload/image/2021/10/13/i1634084905769735.jpeg"
            alt="alt name"
            className=" object-cover h-full w-full rounded-lg"
          />
        </Link>

        <Link href="/movie/3">
          <img
            src="https://static.invenglobal.com/upload/image/2021/10/13/i1634084905769735.jpeg"
            alt="alt name"
            className=" object-cover h-full w-full rounded-lg"
          />
        </Link>

        <Link href="/movie/3">
          <img
            src="https://marketplace.canva.com/EAE--qO1Or0/1/0/1600w/canva-black-and-red-minimalist-movie-poster-landscape-wN-DsZQzivs.jpg"
            alt="alt name"
            className=" object-cover h-full w-full rounded-lg"
          />
        </Link>

        <Link href="/movie/3">
          <img
            src="https://marketplace.canva.com/EAFH3gODxw4/1/0/1131w/canva-black-%26-white-modern-mystery-forest-movie-poster-rLty9dwhGG4.jpg"
            alt="alt name"
            className=" object-cover h-full w-full rounded-lg"
          />
        </Link>



        <Link href="/movie/3">
          <img
            src="https://static.invenglobal.com/upload/image/2021/10/13/i1634084905769735.jpeg"
            alt="alt name"
            className=" object-cover h-full w-full rounded-lg"
          />
        </Link>


        <Link href="/movie/3">
          <img
            src="https://marketplace.canva.com/EAFH3gODxw4/1/0/1131w/canva-black-%26-white-modern-mystery-forest-movie-poster-rLty9dwhGG4.jpg"
            alt="alt name"
            className=" object-cover h-full w-full rounded-lg"
          />
        </Link>

        <Link href="/movie/3">
          <img
            src="https://static.invenglobal.com/upload/image/2021/10/13/i1634084905769735.jpeg"
            alt="alt name"
            className=" object-cover h-full w-full rounded-lg"
          />
        </Link>

      </div>



    </div >
  )
}


export default MovieList
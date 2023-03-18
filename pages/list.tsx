import { NextPage } from "next"
import Image from "next/image"



const MovieList: NextPage = () => {
    return (
        <div className=" mx-4 mt-4">

            <p className=" text-white text-3xl font-bold">NowYouKnow</p>



            <form className="flex items-center mt-4">
                <label htmlFor="simple-search" className="sr-only">Search</label>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-slate-500 dark:text-slate-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input type="text" id="simple-search" className="bg-slate-50  text-slate-900 text-sm rounded-lg  block w-full pl-10 p-2.5  dark:bg-slate-700  dark:placeholder-slate-400 dark:text-white " placeholder="Search" required />
                </div>
                <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-slate-50  rounded-lg   block    dark:bg-slate-700  dark:placeholder-slate-400 dark:text-white ">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    <span className="sr-only">Search</span>
                </button>
            </form>

            <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="relative h-48">
                    <Image
                        src="https://static.invenglobal.com/upload/image/2021/10/13/i1634084905769735.jpeg"
                        alt="alt name"
                        fill
                        style={{ objectFit: "cover" }}
                        loader={({ src }) => `https://oyster-app-a6xp9.ondigitalocean.app/${src}`}
                    />
                </div>

                <div className="relative h-48">
                    <Image
                        src="https://marketplace.canva.com/EAFH3gODxw4/1/0/1131w/canva-black-%26-white-modern-mystery-forest-movie-poster-rLty9dwhGG4.jpg"
                        alt="alt name"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>

                <div className="relative h-48">
                    <Image
                        src="https://marketplace.canva.com/EAE--qO1Or0/1/0/1600w/canva-black-and-red-minimalist-movie-poster-landscape-wN-DsZQzivs.jpg"
                        alt="alt name"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>

                <div className="relative h-48">
                    <Image
                        src="https://static.invenglobal.com/upload/image/2021/10/13/i1634084905769735.jpeg"
                        alt="alt name"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>


                <div className="relative h-48">
                    <Image
                        src="https://marketplace.canva.com/EAFH3gODxw4/1/0/1131w/canva-black-%26-white-modern-mystery-forest-movie-poster-rLty9dwhGG4.jpg"
                        alt="alt name"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>

                <div className="relative h-48">
                    <Image
                        src="https://static.invenglobal.com/upload/image/2021/10/13/i1634084905769735.jpeg"
                        alt="alt name"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>

                <div className="relative h-48">
                    <Image
                        src="https://static.invenglobal.com/upload/image/2021/10/13/i1634084905769735.jpeg"
                        alt="alt name"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>

                <div className="relative h-48">
                    <Image
                        src="https://marketplace.canva.com/EAE--qO1Or0/1/0/1600w/canva-black-and-red-minimalist-movie-poster-landscape-wN-DsZQzivs.jpg"
                        alt="alt name"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>

                <div className="relative h-48">
                    <Image
                        src="https://marketplace.canva.com/EAFH3gODxw4/1/0/1131w/canva-black-%26-white-modern-mystery-forest-movie-poster-rLty9dwhGG4.jpg"
                        alt="alt name"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>



                <div className="relative h-48">
                    <Image
                        src="https://static.invenglobal.com/upload/image/2021/10/13/i1634084905769735.jpeg"
                        alt="alt name"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>


                <div className="relative h-48">
                    <Image
                        src="https://marketplace.canva.com/EAFH3gODxw4/1/0/1131w/canva-black-%26-white-modern-mystery-forest-movie-poster-rLty9dwhGG4.jpg"
                        alt="alt name"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>

                <div className="relative h-48">
                    <Image
                        src="https://static.invenglobal.com/upload/image/2021/10/13/i1634084905769735.jpeg"
                        alt="alt name"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>

            </div>



        </div>
    )
}


export default MovieList
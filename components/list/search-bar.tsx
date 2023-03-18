/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

import { CiSearch } from "react-icons/ci";
// import API from "../../Common/api";



export default function SearchBar() {

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const search = event.target[0].value
    //     API.get('movies/?populate=*&filters[title][$containsi]=' + search,).then((data) => (props.setMovies(data.data.data)))

    // }
    return (
        <form className="flex items-center">
            <label htmlFor="simple-search" className="sr-only">Search</label>
            <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input type="text" id="simple-search" className="rounded-lg block w-full pl-10 px-2.5 py-2  bg-slate-700 border-slate-600 placeholder-slate-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Search" required />
            </div>

        </form>
    )
}
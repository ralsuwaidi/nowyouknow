import type { NextPage } from 'next'
import Head from 'next/head'
import { IconContext } from 'react-icons';
import { MdLocalMovies } from "react-icons/md";
import { AiFillEyeInvisible } from "react-icons/ai";
import { BsFillMicMuteFill } from "react-icons/bs";
import { GiFist } from "react-icons/gi";
import { HiLanguage } from "react-icons/hi2";
import { RiNetflixFill } from "react-icons/ri";
import { FaSyringe, FaStarAndCrescent } from "react-icons/fa";
import { Background, Parallax } from 'react-parallax';

type indicator = {
  percentage: number,
  title: string
}

const indicator_var: indicator[] = [
  {
    percentage: 24,
    title: 'Violence'
  },
  {
    percentage: 36,
    title: 'Language'
  },
  {
    percentage: 87,
    title: 'Inappropriate'
  },
  {
    percentage: 92,
    title: 'Overall'
  },

]

interface PrimaryIconProps {
  children: React.ReactNode;
}


function PrimaryIcon({ children }: PrimaryIconProps) {
  return (
    <IconContext.Provider value={{ size: '24px', className: 'text-white' }}>
      <div className=' bg-teal-500 w-fit rounded p-1'>

        <div>{children}</div>
      </div>
    </IconContext.Provider>
  );
}



const Home: NextPage = () => (
  <div className="flex bg-slate-900 min-h-screen flex-col justify-center ">
    <Head>
      <title>NYK: Arcane</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="theme-color" content="#0f172a" />
    </Head>


    {/* parallax background  */}
    <Parallax strength={199}>
      <Background className="w-screen h-screen bg-cover">
        <div className='w-full h-full relative'>

          <img className='object-cover w-full h-full' src="https://static.invenglobal.com/upload/image/2021/10/13/i1634084905769735.jpeg" alt="fill murray" />


        </div>
      </Background>

      <div className=' w-screen min-h-screen text-center'>

        <div className='bg-black  w-screen bg-opacity-60 py-4 inset-x-0 bottom-0 absolute'>
          <p className=' text-white text-6xl font-bold'>Arcane</p>
          <div className=' flex text-white justify-center mt-4 gap-4'>
            <p className=' bg-yellow-300 bg-opacity-30 rounded-md px-2 text-sm backdrop-blur-sm'>12+</p>
            <p className=' bg-yellow-300 bg-opacity-30 rounded-md px-2 text-sm'>PG-15</p>
          </div>

          <div className=' h-28'>
            <div className='icon-scroll scale-75'></div>
          </div>
        </div>
      </div>
    </Parallax>


    <main className="flex flex-1 flex-col mt-6 mx-4 ">
      <div className=' mx-auto max-w-2xl'>

        <div className=' flex gap-2'>

          <p className=' text-white '>Series </p>
          <div className='my-auto text-red-500'>
            <RiNetflixFill />
          </div>
        </div>
        <p className=' text-slate-500 text-xs'>Duration: 2h 30min</p>

        <div className=' grid grid-cols-2 gap-2 mt-4'>

          {indicator_var.map((indicator) => (
            <div className=' bg-slate-800 rounded p-2'>
              <p className=' text-slate-500 text-xs'>{indicator.title}</p>
              <div className=' flex gap-2'>

                <p className=' text-white text-lg'>{indicator.percentage}</p>

                <div className=' w-full my-auto'>
                  <div className="w-full bg-gray-200 rounded h-1.5 dark:bg-gray-700">
                    <div className="bg-teal-500 rounded h-1.5 " style={{ width: indicator.percentage.toString() + '%' }}></div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className=' text-start mt-4 px-4 py-6 bg-slate-800 rounded'>
          <PrimaryIcon>
            <MdLocalMovies />
          </PrimaryIcon>
          <p className=' text-white text-xl mt-2'>Summary</p>
          <article className=' text-slate-500 text-sm mt-2 prose prose-invert'>
            <p>"The Arcane" is an animated TV series set in the fictional utopian city of Piltover and the underground criminal world of Zaun, inspired by the "League of Legends" universe. The series follows two sisters, Vi and Jinx, who grew up in the impoverished underworld of Zaun and were separated due to an incident that occurred in their youth.</p>
          </article>
        </div>

        <div className=' text-start mt-4 px-4 py-6 bg-slate-800 rounded'>
          <PrimaryIcon>
            <AiFillEyeInvisible />
          </PrimaryIcon>
          <p className=' text-white text-xl mt-2'>Inappropriate</p>
          <article className=' text-slate-500 text-sm mt-2 prose prose-invert'>
            <p>"The Arcane" is an animated TV series set in the fictional utopian city of Piltover and the underground criminal world of Zaun, inspired by the "League of Legends" universe. The series follows two sisters, Vi and Jinx, who grew up in the impoverished underworld of Zaun and were separated due to an incident that occurred in their youth.</p>
          </article>
        </div>


        <div className=' text-start mt-4 px-4 py-6 bg-slate-800 rounded'>
          <PrimaryIcon>
            <HiLanguage />
          </PrimaryIcon>
          <p className=' text-white text-xl mt-2'>Language</p>
          <article className=' text-slate-500 text-sm mt-2 prose prose-invert'>
            <p>"The Arcane" is an animated TV series set in the fictional utopian city of Piltover and the underground criminal world of Zaun, inspired by the "League of Legends" universe. The series follows two sisters, Vi and Jinx, who grew up in the impoverished underworld of Zaun and were separated due to an incident that occurred in their youth.</p>
          </article>
        </div>

        <div className=' text-start mt-4 px-4 py-6 bg-slate-800 rounded'>
          <PrimaryIcon>
            <GiFist />
          </PrimaryIcon>
          <p className=' text-white text-xl mt-2'>Violence</p>
          <article className=' text-slate-500 text-sm mt-2 prose prose-invert'>
            <p>"The Arcane" is an animated TV series set in the fictional utopian city of Piltover and the underground criminal world of Zaun, inspired by the "League of Legends" universe. The series follows two sisters, Vi and Jinx, who grew up in the impoverished underworld of Zaun and were separated due to an incident that occurred in their youth.</p>
          </article>
        </div>


        <div className=' text-start mt-4 px-4 py-6 bg-slate-800 rounded'>
          <PrimaryIcon>
            <FaSyringe />
          </PrimaryIcon>
          <p className=' text-white text-xl mt-2'>Drugs</p>
          <article className=' text-slate-500 text-sm mt-2 prose prose-invert'>
            <p>"The Arcane" is an animated TV series set in the fictional utopian city of Piltover and the underground criminal world of Zaun, inspired by the "League of Legends" universe. The series follows two sisters, Vi and Jinx, who grew up in the impoverished underworld of Zaun and were separated due to an incident that occurred in their youth.</p>
          </article>
        </div>


        <div className=' text-start mt-4 px-4 py-6 bg-slate-800 rounded'>
          <PrimaryIcon>
            <FaStarAndCrescent />
          </PrimaryIcon>
          <p className=' text-white text-xl mt-2'>Religion</p>
          <article className=' text-slate-500 text-sm mt-2 prose prose-invert'>
            <p>"The Arcane" is an animated TV series set in the fictional utopian city of Piltover and the underground criminal world of Zaun, inspired by the "League of Legends" universe. The series follows two sisters, Vi and Jinx, who grew up in the impoverished underworld of Zaun and were separated due to an incident that occurred in their youth.</p>
          </article>
        </div>


      </div>
    </main>

    <footer className="flex h-24 w-full items-center justify-center px-4">
      <p className=' text-xs text-slate-500'>* The rating system is subjective to the nowyouknow team and is meant to be used as an indicator</p>
    </footer>
  </div>
)

export default Home

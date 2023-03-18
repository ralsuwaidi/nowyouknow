import type { NextPage } from 'next'
import Head from 'next/head'
import { IconContext } from 'react-icons';
import { MdLocalMovies } from "react-icons/md";
import { AiFillEyeInvisible, AiOutlineInfoCircle } from "react-icons/ai";
import { GiFist } from "react-icons/gi";
import { HiLanguage } from "react-icons/hi2";
import { RiNetflixFill } from "react-icons/ri";
import { FaSyringe, FaStarAndCrescent } from "react-icons/fa";
import { Background, Parallax } from 'react-parallax';
import 'react-tippy/dist/tippy.css';
import {
    Tooltip
} from 'react-tippy';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';




declare module 'react-tippy' {
    export interface TooltipProps {
        children: ReactNode;
    }
}

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
        <IconContext.Provider value={{ size: '20px', className: 'text-white' }}>
            <div className=' bg-teal-500 w-fit rounded p-1.5'>

                <div>{children}</div>
            </div>
        </IconContext.Provider>
    );
}


const Home: NextPage = () => {
    const router = useRouter();
    const {
        query: { pid },
    } = router;


    return (
        <div >
            <Head>
                <title>Arcane: A Fantasy Novel of Magic and Intrigue</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Arcane is a fantasy novel set in a world of magic and intrigue. Follow the adventures of our heroes as they battle dark forces and uncover ancient mysteries." />
                <meta name="theme-color" content="#0f172a" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="og:title" content="Arcane: A Fantasy Novel of Magic and Intrigue" />
                <meta name="og:description" content="Arcane is a fantasy novel set in a world of magic and intrigue. Follow the adventures of our heroes as they battle dark forces and uncover ancient mysteries." />
                <meta name="og:image" content="https://static.invenglobal.com/upload/image/2021/10/13/i1634084905769735.jpeg" />
                <meta name="og:whatsapp" content="whatsapp://send?text=Check%20out%20Arcane%2C%20a%20fantasy%20novel%20of%20magic%20and%20intrigue%3A%20https%3A%2F%2Fexample.com%2Farcane" />
                <meta name="og:telegram" content="https://t.me/share/url?url=https%3A%2F%2Fexample.com%2Farcane&text=Check%20out%20Arcane%2C%20a%20fantasy%20novel%20of%20magic%20and%20intrigue" />
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
                        <div className=' flex text-white justify-center mt-4 gap-3'>
                            <p className=' backdrop-blur-sm bg-white/30  rounded px-2 text-sm '>12+</p>
                            <p className=' backdrop-blur-sm bg-white/30  rounded px-2 text-sm'>PG-15</p>
                        </div>

                        <div className=' h-28'>
                            <div className='icon-scroll scale-75'></div>
                        </div>
                    </div>
                </div>
            </Parallax>


            <main className=" mt-6 mx-4 ">
                <div className=' mx-auto max-w-2xl'>

                    <div className=' flex gap-2'>

                        <p className=' text-white '>Series </p>
                        <div className='my-auto text-red-500'>
                            <RiNetflixFill />
                        </div>
                    </div>
                    <p className=' text-slate-500 text-xs'>Duration: 2h 30min</p>
                    <p className=' text-slate-500 text-xs'>pid: {pid}</p>

                    <div className=' grid grid-cols-2 gap-2 mt-4'>

                        {indicator_var.map((indicator) => (
                            <Tooltip
                                // options
                                title="High Violence"
                                position="top"
                                trigger="click"
                                size='small'
                            >
                                <div className=' bg-slate-800 rounded p-2'>

                                    <div className=' flex justify-between gap-2'>

                                        <p className=' text-slate-500 text-xs'>{indicator.title} </p>
                                        <div className=' text-slate-500 text-xs my-auto'> <AiOutlineInfoCircle /></div>
                                    </div>


                                    <div className=' flex gap-2'>

                                        <p className=' text-white text-lg'>{indicator.percentage}</p>

                                        <div className=' w-full my-auto'>
                                            <div className="w-full bg-gray-200 rounded h-1.5 dark:bg-gray-700">
                                                <div className="bg-teal-500 rounded h-1.5 " style={{ width: indicator.percentage.toString() + '%' }}></div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </Tooltip>
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
                <p className=' text-center text-xs text-slate-600'>The rating system is subjective to the nowyouknow team and is meant to be used as an indicator</p>
            </footer>
        </div>
    )

}

export default Home

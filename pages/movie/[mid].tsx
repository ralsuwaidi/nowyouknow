import type { NextPage } from 'next'
import Head from 'next/head'
import { IconContext } from 'react-icons';
import { MdLocalMovies } from "react-icons/md";
import { AiFillEyeInvisible } from "react-icons/ai";
import { GiFist } from "react-icons/gi";
import { HiLanguage } from "react-icons/hi2";
import { RiNetflixFill } from "react-icons/ri";
import { FaSyringe, FaStarAndCrescent } from "react-icons/fa";
import 'react-tippy/dist/tippy.css';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import ParallaxBackground from '../../components/detail/parallax-background';
import IndicatorScore, { IndicatorScoreProps } from '../../components/detail/indicator-score';
import IndicatorContent from '../../components/detail/indicator-content';

declare module 'react-tippy' {
    export interface TooltipProps {
        children: ReactNode;
    }
}

const indicator_var: IndicatorScoreProps[] = [
    {
        percentage: 24,
        name: 'مشاهد عنيفة',
        tooltipText: "tooltip"
    },
    {
        percentage: 36,
        name: 'ألفاظ غير لائقة',
        tooltipText: "tooltip"
    },
    {
        percentage: 92,
        name: 'مواضيع غير مناسبة',
        tooltipText: "tooltip"
    },
    {
        percentage: 72,
        name: 'الإجمالي',
        tooltipText: "tooltip"
    },

]

// add children to primaryIcons without this it causes an error
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
        query: { mid },
    } = router;

    return (
        <div dir='rtl' >
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
                <meta name="og:whatsapp" content="whatsapp://send?text=Check%20out%20Arcane%2C%20a%20fantasy%20novel%20of%20magic%20and%20intrigue%3A%20https%3A%2F%2Fexample.com%2Farcane" />
                <meta name="og:telegram" content="https://t.me/share/url?url=https%3A%2F%2Fexample.com%2Farcane&text=Check%20out%20Arcane%2C%20a%20fantasy%20novel%20of%20magic%20and%20intrigue" />
                <meta name="og:image" content="https://static.invenglobal.com/upload/image/2021/10/13/i1634084905769735.jpeg" />
                <meta property="og:image:width" content="600" />
                <meta property="og:image:height" content="600" />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="og:whatsapp:image" content="https://static.invenglobal.com/upload/image/2021/10/13/i1634084905769735.jpeg" />
            </Head>

            <ParallaxBackground
                imgUrl="https://static.invenglobal.com/upload/image/2021/10/13/i1634084905769735.jpeg"
                title="Arcane"
                ageRating1="12+"
                ageRating2="PG-15"
            />

            <main className=" mt-6 mx-4 ">
                <div className=' mx-auto max-w-2xl'>
                    <div className=' flex gap-2'>

                        <p className=' text-white '>مسلسل </p>
                        <div className='my-auto text-red-500'>
                            <RiNetflixFill />
                        </div>
                    </div>
                    <p className=' text-slate-500 text-xs'>Duration: 2h 30min</p>
                    <p className=' text-slate-500 text-xs'>mid: {mid}</p>

                    <div className=' grid grid-cols-2 gap-2 mt-4'>

                        {indicator_var.map((indicator: IndicatorScoreProps) => (
                            <IndicatorScore name={indicator.name} percentage={indicator.percentage} tooltipText={indicator.tooltipText} />

                        ))}
                    </div>

                    <div className=' text-start mt-4 px-4 py-6 bg-slate-800 rounded'>
                        <IndicatorContent
                            title="ملخص"
                            icon={
                                <PrimaryIcon>
                                    <MdLocalMovies />
                                </PrimaryIcon>
                            }
                            content='"The Arcane" هو مسلسل تلفزيوني متحرك مقتبس في عالم "ليج أوف ليجيندز" و يحدث في مدينة بيلتوفر المثالية الخيالية والعالم الجرماني تحت الأرض في زاون. يتبع المسلسل شقيقتين ، في وجينكس ، اللتان نشأتا في العالم السفلي المتضرر في زاون وانفصلتا بسبب حادث وقع لهما في صغرهما."'
                        />
                    </div>

                    <div className=' text-start mt-4 px-4 py-6 bg-slate-800 rounded'>
                        <IndicatorContent
                            title="مواضيع غير مناسبة"
                            icon={
                                <PrimaryIcon>
                                    <AiFillEyeInvisible />
                                </PrimaryIcon>
                            }
                            content='"The Arcane" هو مسلسل تلفزيوني متحرك مقتبس في عالم "ليج أوف ليجيندز" و يحدث في مدينة بيلتوفر المثالية الخيالية والعالم الجرماني تحت الأرض في زاون. يتبع المسلسل شقيقتين ، في وجينكس ، اللتان نشأتا في العالم السفلي المتضرر في زاون وانفصلتا بسبب حادث وقع لهما في صغرهما."'
                        />
                    </div>

                    <div className=' text-start mt-4 px-4 py-6 bg-slate-800 rounded'>
                        <IndicatorContent
                            title="ألفاظ غير لائقة"
                            icon={
                                <PrimaryIcon>
                                    <HiLanguage />
                                </PrimaryIcon>
                            }
                            content='"The Arcane" هو مسلسل تلفزيوني متحرك مقتبس في عالم "ليج أوف ليجيندز" و يحدث في مدينة بيلتوفر المثالية الخيالية والعالم الجرماني تحت الأرض في زاون. يتبع المسلسل شقيقتين ، في وجينكس ، اللتان نشأتا في العالم السفلي المتضرر في زاون وانفصلتا بسبب حادث وقع لهما في صغرهما."'
                        />
                    </div>

                    <div className=' text-start mt-4 px-4 py-6 bg-slate-800 rounded'>
                        <IndicatorContent
                            title="مشاهد عنيفة"
                            icon={
                                <PrimaryIcon>
                                    <GiFist />
                                </PrimaryIcon>
                            }
                            content='"The Arcane" هو مسلسل تلفزيوني متحرك مقتبس في عالم "ليج أوف ليجيندز" و يحدث في مدينة بيلتوفر المثالية الخيالية والعالم الجرماني تحت الأرض في زاون. يتبع المسلسل شقيقتين ، في وجينكس ، اللتان نشأتا في العالم السفلي المتضرر في زاون وانفصلتا بسبب حادث وقع لهما في صغرهما."'
                        />
                    </div>

                    <div className=' text-start mt-4 px-4 py-6 bg-slate-800 rounded'>
                        <IndicatorContent
                            title="استخدام مواد مخدرة"
                            icon={
                                <PrimaryIcon>
                                    <FaSyringe />
                                </PrimaryIcon>
                            }
                            content='"The Arcane" هو مسلسل تلفزيوني متحرك مقتبس في عالم "ليج أوف ليجيندز" و يحدث في مدينة بيلتوفر المثالية الخيالية والعالم الجرماني تحت الأرض في زاون. يتبع المسلسل شقيقتين ، في وجينكس ، اللتان نشأتا في العالم السفلي المتضرر في زاون وانفصلتا بسبب حادث وقع لهما في صغرهما."'
                        />
                    </div>
                    <div className=' text-start mt-4 px-4 py-6 bg-slate-800 rounded'>
                        <IndicatorContent
                            title="التشكيك في المعتقدات الدينية"
                            icon={
                                <PrimaryIcon>
                                    <FaStarAndCrescent />
                                </PrimaryIcon>
                            }
                            content='"The Arcane" هو مسلسل تلفزيوني متحرك مقتبس في عالم "ليج أوف ليجيندز" و يحدث في مدينة بيلتوفر المثالية الخيالية والعالم الجرماني تحت الأرض في زاون. يتبع المسلسل شقيقتين ، في وجينكس ، اللتان نشأتا في العالم السفلي المتضرر في زاون وانفصلتا بسبب حادث وقع لهما في صغرهما."'
                        />
                    </div>

                </div>
            </main>

            <footer className="flex h-24 w-full items-center justify-center px-4">
                <p className=' text-center text-xs text-slate-600'>نظام التقييم يعتمد على رأي فريق "nowyouknow" ويقصد استخدامه كمؤشر</p>
            </footer>
        </div>
    )

}

export default Home

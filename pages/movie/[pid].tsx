import type { NextPage } from 'next'
import Head from 'next/head'
import { MdLocalMovies } from "react-icons/md";
import { AiFillEyeInvisible } from "react-icons/ai";
import { GiFist } from "react-icons/gi";
import { HiLanguage } from "react-icons/hi2";
import { RiNetflixFill } from "react-icons/ri";
import { FaSyringe, FaStarAndCrescent } from "react-icons/fa";
import 'react-tippy/dist/tippy.css';
import { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ParallaxBackground from '../../components/detail/parallax-background';
import IndicatorScore from '../../components/detail/indicator-score';
import IndicatorContent from '../../components/detail/indicator-content';
import MovieApi from '../../lib/api/movie';
import { MovieDataType } from '../../lib/utils/movie-type';
import LoadingSpinner from '../../components/common/loading-spinner';
import { getLargePoster } from '../../lib/utils/get-query';
import { CalculateOverall } from '../../lib/utils/calculate-score';
import ReactMarkdown from 'react-markdown';
import Footer from '../../components/common/footer';
import { PrimaryIcon } from '../../components/common/primary-icon';

declare module 'react-tippy' {
    export interface TooltipProps {
        children: ReactNode;
    }
}

const Home: NextPage = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState<MovieDataType>();

    const {
        query: { pid },
    } = router;

    useEffect(() => {
        if (pid) {
            MovieApi.get(Number(pid)).then((response) => {
                setMovie(response.data.data);
                setIsLoading(false);
            }).catch((error) => {
                console.error(error);
                setIsLoading(false);
            });
        }
    }, [pid]);

    return (
        <div>
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <div dir='rtl' >
                    <Head>
                        <title>{movie?.attributes.title} | NowYouKnow</title>
                        <link rel="icon" href="/favicon.ico" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <meta name="description" content="Arcane is a fantasy novel set in a world of magic and intrigue. Follow the adventures of our heroes as they battle dark forces and uncover ancient mysteries." />
                        <meta name="theme-color" content="#0f172a" />
                        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="og:title" content={movie?.attributes.title + " | NowYouKnow"} />
                        <meta name="og:description" content="Arcane is a fantasy novel set in a world of magic and intrigue. Follow the adventures of our heroes as they battle dark forces and uncover ancient mysteries." />
                        <meta name="og:whatsapp" content="whatsapp://send?text=Check%20out%20Arcane%2C%20a%20fantasy%20novel%20of%20magic%20and%20intrigue%3A%20https%3A%2F%2Fexample.com%2Farcane" />
                        <meta name="og:telegram" content="https://t.me/share/url?url=https%3A%2F%2Fexample.com%2Farcane&text=Check%20out%20Arcane%2C%20a%20fantasy%20novel%20of%20magic%20and%20intrigue" />
                        <meta name="og:image" content="https://static.invenglobal.com/upload/image/2021/10/13/i1634084905769735.jpeg" />
                        <meta property="og:image:width" content="600" />
                        <meta property="og:image:height" content="600" />
                        <meta property="og:image:type" content="image/jpeg" />
                        <meta property="og:whatsapp:image" content="https://static.invenglobal.com/upload/image/2021/10/13/i1634084905769735.jpeg" />
                    </Head>

                    {movie &&
                        <ParallaxBackground
                            imgUrl={getLargePoster(movie)}
                            title={movie.attributes.title}
                            ageRating1={movie.attributes.rating}
                            ageRating2={String(movie.attributes.year)}
                        />
                    }


                    <main className=" mt-6 mx-4 ">
                        <div className=' mx-auto max-w-2xl'>
                            <div className=' flex gap-2'>

                                <p className=' text-white '>مسلسل </p>
                                <div className='my-auto text-red-500'>
                                    <RiNetflixFill />
                                </div>
                            </div>


                            <p className=' text-slate-500 text-xs'>المدة الزمنية :{movie?.attributes.duration}</p>

                            <div className=' grid grid-cols-2 gap-2 mt-4'>
                                {movie &&
                                    <>
                                        <IndicatorScore name="مواضيع غير مناسبة" percentage={movie?.attributes.inappropriate_rating} tooltipText="مواضيع ومشاهد غير مناسبة وغير لائقة للأطفال" />
                                        <IndicatorScore name="ألفاظ غير لائقة" percentage={movie?.attributes.language_rating} tooltipText="ألفاظ غير لائقة" />
                                        <IndicatorScore name="مشاهد عنيفة" percentage={movie?.attributes.violence_rating} tooltipText="سفك الدماء, قتل " />
                                        <IndicatorScore name="الإجمالي" percentage={CalculateOverall(movie)} tooltipText="النسبة الإجمالية للمؤشرات السابقة" />
                                    </>
                                }
                            </div>

                            <p className=' text-slate-500 text-xs mt-1'>ارتفاع النسبة يدل على مدى تواجد هذا المؤشر في المحتوى</p>

                            <div className=' text-start mt-4 px-4 py-6 bg-slate-800 rounded'>
                                <IndicatorContent
                                    title="ملخص"
                                    icon={
                                        <PrimaryIcon>
                                            <MdLocalMovies />
                                        </PrimaryIcon>
                                    }
                                >
                                    {movie &&
                                        <ReactMarkdown>
                                            {movie?.attributes.summary}
                                        </ReactMarkdown>
                                    }

                                </IndicatorContent>
                            </div>

                            <div className=' text-start mt-4 px-4 py-6 bg-slate-800 rounded'>
                                <IndicatorContent
                                    title="مواضيع غير مناسبة"
                                    icon={
                                        <PrimaryIcon>
                                            <AiFillEyeInvisible />
                                        </PrimaryIcon>
                                    }
                                >
                                    {movie &&
                                        <ReactMarkdown>
                                            {movie?.attributes.inappropriate}
                                        </ReactMarkdown>
                                    }
                                </IndicatorContent>
                            </div>

                            <div className=' text-start mt-4 px-4 py-6 bg-slate-800 rounded'>
                                <IndicatorContent
                                    title="ألفاظ غير لائقة"
                                    icon={
                                        <PrimaryIcon>
                                            <HiLanguage />
                                        </PrimaryIcon>
                                    }
                                >
                                    {movie &&
                                        <ReactMarkdown>
                                            {movie?.attributes.language}
                                        </ReactMarkdown>
                                    }
                                </IndicatorContent>
                            </div>

                            <div className=' text-start mt-4 px-4 py-6 bg-slate-800 rounded'>
                                <IndicatorContent
                                    title="مشاهد عنيفة"
                                    icon={
                                        <PrimaryIcon>
                                            <GiFist />
                                        </PrimaryIcon>
                                    }
                                >

                                    {movie &&
                                        <ReactMarkdown>
                                            {movie?.attributes.violence}
                                        </ReactMarkdown>
                                    }
                                </IndicatorContent>
                            </div>

                            <div className=' text-start mt-4 px-4 py-6 bg-slate-800 rounded'>
                                <IndicatorContent
                                    title="استخدام مواد مخدرة"
                                    icon={
                                        <PrimaryIcon>
                                            <FaSyringe />
                                        </PrimaryIcon>
                                    }
                                >
                                    {movie &&
                                        <ReactMarkdown>
                                            {movie?.attributes.drug_usage}
                                        </ReactMarkdown>
                                    }
                                </IndicatorContent>
                            </div>
                            <div className=' text-start mt-4 px-4 py-6 bg-slate-800 rounded'>
                                <IndicatorContent
                                    title="التشكيك في المعتقدات الدينية"
                                    icon={
                                        <PrimaryIcon>
                                            <FaStarAndCrescent />
                                        </PrimaryIcon>
                                    }
                                >

                                    {movie &&
                                        <ReactMarkdown>
                                            {movie?.attributes.religious_imagery}
                                        </ReactMarkdown>
                                    }
                                </IndicatorContent>
                            </div>

                        </div>
                    </main>

                    <Footer />
                </div>
            )}
        </div>

    )

}

export default Home

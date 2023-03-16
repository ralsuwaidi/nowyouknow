import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Background, Parallax } from 'react-parallax';

const Home: NextPage = () => {
  return (
    <div className="flex bg-slate-900 min-h-screen flex-col  justify-center ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0f172a" />
      </Head>


      {/* parallax background  */}
      <Parallax strength={200}>
        <Background className=" w-screen h-screen bg-cover z-0">
          <img className=' object-cover w-full h-full ' src="https://static.invenglobal.com/upload/image/2021/10/13/i1634084905769735.jpeg" alt="fill murray" />
        </Background>

        <div style={{ height: '80vh', width: '100vw' }} />
      </Parallax>

      <main className="flex w-full flex-1 flex-col  justify-center items-center  text-center ">


        <div className='bg-slate-900 -mt-28 z-10 w-screen bg-opacity-20 py-6'>
          <p className=' text-slate-200 text-sm'>small text</p>
          <p className=' text-white text-6xl font-bold'>Arcane</p>
          <div className=' flex text-white justify-center mt-4 gap-4'>
            <p className=' bg-yellow-300 bg-opacity-30 rounded-md px-2 text-sm backdrop-blur-sm'>12+</p>
            <p className=' bg-yellow-300 bg-opacity-30 rounded-md px-2 text-sm'>PG-15</p>
          </div>
        </div>

        <div className=' text-start max-w-sm md:max-w-2xl'>
          <p className=' text-white font-bold text-xl'>Title</p>
          <p className=' text-white text-sm bg-slate-800 px-2 py-4 rounded mt-2'>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
        </div>

      </main>

      <footer className="flex h-24 w-full items-center justify-center ">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home

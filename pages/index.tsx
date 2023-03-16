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


      <main className="flex flex-1 flex-col mt-12 mx-4 ">

        <div className=' w-full  '>

          <div className="w-full bg-gray-200  h-2.5 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 " style={{ width: "45%" }}></div>
          </div>

        </div>

        {/* <p className=' text-white font-bold '> Movie</p> */}

        <div className=' text-start max-w-2xl mt-4'>
          <p className=' text-white font-bold text-xl'>Title</p>
          <p className=' text-slate-500 text-sm bg-slate-800  py-4 rounded mt-2'>The foreground color of a card depends on the background color you choose for the card. Generally, for a dark-themed app, you would use a lighter color for the foreground so that the text and other elements are easily visible against the dark background. For example, if you choose a dark blue color for the background of the card, you could use white or off-white color for the foreground elements such as text, icons, etc. Alternatively, you could use a light gray color for the foreground to create a softer contrast. Ultimately, the choice of foreground color depends on the specific color palette you choose and the overall design aesthetic you want to achieve.</p>
        </div>

        <div className=' text-start  max-w-2xl'>
          <p className=' text-white font-bold text-xl'>Title</p>
          <p className=' text-slate-500 text-sm bg-slate-800 py-4 rounded mt-2'>The foreground color of a card depends on the background color you choose for the card. Generally, for a dark-themed app, you would use a lighter color for the foreground so that the text and other elements are easily visible against the dark background. For example, if you choose a dark blue color for the background of the card, you could use white or off-white color for the foreground elements such as text, icons, etc. Alternatively, you could use a light gray color for the foreground to create a softer contrast. Ultimately, the choice of foreground color depends on the specific color palette you choose and the overall design aesthetic you want to achieve.</p>
        </div>




      </main>

      <footer className="flex h-24 w-full items-center justify-center">
      </footer>
    </div>
  )
}

export default Home

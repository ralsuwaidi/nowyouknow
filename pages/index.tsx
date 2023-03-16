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
        <Background className="w-screen h-screen bg-cover z-0">
          <div className='w-full h-full relative'>

            <img className='object-cover w-full h-full' src="https://static.invenglobal.com/upload/image/2021/10/13/i1634084905769735.jpeg" alt="fill murray" />
            <div className="absolute inset-x-0 bottom-40 h-1/3 bg-gradient-to-t from-slate-900 to-transparent"></div>

          </div>
        </Background>

        <div style={{ height: '80vh', width: '100vw' }} />
      </Parallax>


      <main className="flex w-full flex-1 flex-col  justify-center items-center  text-center ">

        <div className='bg-slate-900 -mt-28 z-10 w-screen bg-opacity-20 py-6'>
          <p className=' text-gray-300 text-sm'>small text</p>
          <p className=' text-white text-6xl font-bold'>Arcane</p>
          <div className=' flex text-white justify-center mt-4 gap-4'>
            <p className=' bg-yellow-300 bg-opacity-30 rounded-md px-2 text-sm backdrop-blur-sm'>12+</p>
            <p className=' bg-yellow-300 bg-opacity-30 rounded-md px-2 text-sm'>PG-15</p>
          </div>
        </div>

        <div className=' text-start mx-4 max-w-2xl'>
          <p className=' text-white font-bold text-xl'>Title</p>
          <p className=' text-slate-500 text-sm bg-slate-800 px-2 py-4 rounded mt-2'>The foreground color of a card depends on the background color you choose for the card. Generally, for a dark-themed app, you would use a lighter color for the foreground so that the text and other elements are easily visible against the dark background. For example, if you choose a dark blue color for the background of the card, you could use white or off-white color for the foreground elements such as text, icons, etc. Alternatively, you could use a light gray color for the foreground to create a softer contrast. Ultimately, the choice of foreground color depends on the specific color palette you choose and the overall design aesthetic you want to achieve.</p>
        </div>

        <div className=' text-start mx-4 max-w-2xl mt-4'>
          <p className=' text-white font-bold text-xl'>Title</p>
          <p className=' text-slate-500 text-sm bg-slate-800 px-2 py-4 rounded mt-2'>For a dark theme, you can use light colors for foreground elements to create contrast and make them stand out. Some popular light colors for foreground text in a dark theme include white, light gray, or a light shade of a primary or accent color. For example, you could use text-white or text-gray-100 as a class in Tailwind to set the text color to white or light gray respectively.</p>
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

import Head from 'next/head'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Twitter Clone App - Nextjs & TailwindCss</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-[#15202b] min-h-screen mx-auto max-w-[1500px] flex">
        <Sidebar />
        <Feed />
        {/* Widgets */}

        {/* Modal */}
      </main>

      {/* <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://corbintanner.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
        Made by Corbin Tanner {' '}
        </a>
        <a
          className="flex items-center justify-center"
          href="https://github.com/corbintanner/twitter-clone-nextjs-tailwindcss"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/twitter_clone.svg" alt="Twitter Clone Logo" className="h-4 ml-2 mr-2" />
          Get the Source Code
        </a>
      </footer> */}
    </div>
  )
}

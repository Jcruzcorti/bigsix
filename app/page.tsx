import Image from 'next/image'
import { ModeToggle } from '../components/ui/ModeToggle'
import { NavigationMenuDemo } from '@/components/ui/MenuBarNav'



export default function Home() {
  return (
    <main className="flex  min-h-screen flex-col items-center justify-arround p-10 lg:p-8 ">
      <div className="z-10 max-w-5xl w-full flex items-center justify-between lg:flex ">
        <Image
          className="relative drop-shadow-md dark:drop-shadow-[0_0_0.2rem_#ffffff30] "
          src="/premierlogo.png"
          alt="Premier League logo"
          width={90}
          height={20}
          priority
        />
        <NavigationMenuDemo/>
      </div>

      <div className="relative flex-col py-20 place-items-center ">
      {/* <div className="relative flex-col py-20 place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"> */}
        <Image
          className="relative "
          src="/bigsixphoto2.jpg"
          alt="Premier League logo"
          width={280}
          height={40}
          priority
        />
         <Image
          className="relative "
          src="/bigsixphoto2.jpg"
          alt="Premier League logo"
          width={280}
          height={40}
          priority
        />
         <Image
          className="relative "
          src="/bigsixphoto2.jpg"
          alt="Premier League logo"
          width={280}
          height={40}
          priority
        />
      </div>

      <div className='w-full flex items-end justify-end'>
        <ModeToggle/>
      </div>
      
    </main>
  )
}

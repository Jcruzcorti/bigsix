import { ModeToggle } from '../components/ui/ModeToggle'
import NavBarComponent from '@/components/ui/NavBarComponent'
import {CarrouselComponent} from '@/components/ui/CarrouselComponent'


export default function Home() {
  return (
    <main className="flex  min-h-screen flex-col items-center justify-arround p-12 lg:p-8 ">
      <NavBarComponent/>
      <CarrouselComponent/>

      <div className='w-full flex items-end justify-end'>
        <ModeToggle/>
      </div>
      
    </main>
  )
}

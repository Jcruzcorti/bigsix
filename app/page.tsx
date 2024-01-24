// import { ModeToggle } from '../components/ui/ModeToggle'
// import NavBarComponent from '@/components/ui/NavBarComponent'
import {CarrouselComponent} from '@/components/ui/CarrouselComponent'
// import DataClubs from '../lib/data'




export default function Home() {

  // const data:any = await getData()
  // console.log(data);
  
  
  return (
    <>
      <CarrouselComponent/>
      {/* <DataClubs/> */}
      {/* {
        data.squad.map((index:any,club:any)=>{
          <div key={index}>
            <p className='text-xs'>{club.a.name}</p>
          </div>
        })
      }
      {data.name} */}
    </>
  )
}

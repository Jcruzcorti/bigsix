// 'use client'
// import { usePathname } from 'next/navigation'
import DataClubs from '@/lib/data'


export default async function Arsenal() {

    const data:any = await DataClubs()
    // console.log(data)
    // type Club = {
    //   id: number,
    //   name: string
    // }

    const filterClubArsenal:any = data.squad.filter((club: { id: number; }) => club.id === 57);
    // const pathName = usePathname()

  return (
    <>
        <h2> ARSENAL</h2>
        {/* <p>{filterClubArsenal}</p> */}
        {/* {
        filterClubArsenal.map((index:any,club:any)=>{
          <div key={index}>
            <p className='text-xs'>{club.a.name}</p>
          </div>
        })
      } */}
      <p>{filterClubArsenal.name}</p>
    </>
  )
}

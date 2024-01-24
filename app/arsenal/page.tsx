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

    // const filterClubArsenal:any = data.runningCompetitions.filter((club: { id: number; }) => club.id === 57);
    // const pathName = usePathname()

  return (
    <>
        <h2 className='mb-9 text-2xl '> ARSENAL</h2>
        {/* <p>{filterClubArsenal}</p> */}
        {
        data.squad.map((club:any)=>(
          <div key={club.id}>
            <p className='text-base'>{club.name}</p>
          </div>
        ))
      }
      <h4>{data.name}</h4>
    
      {/* {JSON.stringify(data.squad)} */}
      {/* <p>{filterClubArsenal.name}</p> */}
    </>
  )
}

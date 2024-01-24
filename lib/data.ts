
export async function getData() {
    const res = await fetch('http://api.football-data.org/v4/teams/57', {
      headers: {
        'X-Auth-Token': process.env.REACT_APP_PROYECT_API_ID || ''
      }
    })
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }


   
  export default async function DataClubs() {
    const data: any[] = await getData()
    
    
    return data
  }
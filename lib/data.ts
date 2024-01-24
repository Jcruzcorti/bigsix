
export async function getDataArsenal() {
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

    // interface Club {
    //         "id": number,
    //         "firstName": string,
    //         "lastName": string,
    //         "name": string,
    //         "position": string,
    //         "dateOfBirth": string,
    //         "nationality": string,
    //         "shirtNumber": number,
    //         "marketValue": number,
    // }

    const data = await getDataArsenal()
    const teams = [57,65,64,61,73,66];
    // const filteredTeams = data.squad.filter((team: { id: number; })=> teams === team.id);
    // const filteredTeams = data.squad.filter((team: { id: number; })=> teams.includes(team.id));
    // const filteredTeam = data.includes((team: { id: number[]; })=> teams === team.id)
    
    return data
  }
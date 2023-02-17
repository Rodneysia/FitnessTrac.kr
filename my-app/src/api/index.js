const URL = `https://fitnesstrac-kr.herokuapp.com`;

export async function GetActivities() {
    try {
      const response = await fetch(`${URL}/api/activities`);
      const result = await response.json();
      console.log(result);
      return result;
      
    } catch (error) {
      console.error(error);
    }
  }

// export async function getRoutines(){
//     try{
//         const response = await fetch(`${URL}/api/routines`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': 'Bearer TOKEN_STRING_HERE'
//   },
//   body: JSON.stringify({ /* whatever things you need to send to the API */ })
  
//     })
//     return response;
// }

//     catch(err){
//         console.error('error', err);
//     }
// }


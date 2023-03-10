const URL = `https://fitnesstrac-kr.herokuapp.com`;

export async function GetActivities() {
    try {
      const response = await fetch(`${URL}/api/activities`);
      const result = await response.json();
      //console.log(result);
      return result;
      
    } catch (error) {
      console.error(error);

    }
  }

export async function GetRoutines(){
  try {
    const response = await fetch(`${URL}/api/routines`);
    const result = await response.json();
    //console.log(result);
    return result;
    
  } catch (error) {
    console.error(error);

  }
}


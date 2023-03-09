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

export async function GetMyRoutines(`${URL}/api/routines`){
  try {
    const reponse = await fetch(``)
  }
}

export async function UserRegister(){
  try {
    const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/register', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'superman27',
        password: 'krypt0n0rbust'
      })
    }).then(response => response.json())
      .then(result => {
        console.log(result);
      })
    } catch (error) {
      console.error(error);
  }
}


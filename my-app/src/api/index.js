const URL = `https://fitnesstrac-kr.herokuapp.com/api/`

export async function getActivities(){
    try{
        const response = await fetch(`${URL}activities`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ /* whatever things you need to send to the API */ })
          })
          return response;
    }
    catch(err){
        console.error('error', err);
    }
}

export async function getRoutines(){
    try{
        const response = await fetch(`${URL}routines`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer TOKEN_STRING_HERE'
  },
  body: JSON.stringify({ /* whatever things you need to send to the API */ })
  
    })
    return response;
}

    catch(err){
        console.error('error', err);
    }
}


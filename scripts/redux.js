
// reducer

const initialState = {
    gender:'male',
    age:6,
    dynasty:'arabian',
    height:120,
    weight:40,
    result:''
}

const storageData = JSON.parse(localStorage.getItem('test')) || initialState;


export const checkupReducer = (action)=>{
    let state = storageData;

    if (typeof action === 'undefined') {
        console.log(action);
        return initialState
    }

    const {payload , type} = action;


    state = {...state , [type]:payload}

    return state
}


// types

export const genderType = 'gender';
export const ageType = 'age';
export const dynastyType = 'dynasty';
export const heightType = 'height';
export const weightType = 'weight';
export const resultType = 'result';

// actions


export function selectPropertyAction(action){
    return checkupReducer({
         type:action.type,
         payload:action.payload
     })
 }

 export default selectPropertyAction



JSON.parse(localStorage.getItem('test')) || {};
 










import axios from 'axios';


export const SAVE_USER_SUCCESS ='SAVE_USER_SUCCESS';
export const SAVE_USER_ERROR='SAVE_USER_ERROR';
export const DISPLAY_USERS='DISPLAY_USERS';
export const backEndURL='http://localhost:3001'

export const saveUserSuccess=(userStatus)=>{
    return {type:SAVE_USER_SUCCESS, payload :{userStatus}};
}
export const saveUserError=(userStatus)=>{
    return {type:SAVE_USER_ERROR, payload :{userStatus}};
}

export const saveUser=(firstName,lastName,email)=> async (dispatch)=>{
    let apiResponse;
    const saveUserURL= backEndURL+'/api/saveUser';
    const parameters={
        firstName,
        lastName,
        email
    }
    await axios
    .post(saveUserURL,{ params: {
        firstName,
        lastName,
        email
      }},{})
    .then((response)=>{
        if(response.data.status === 'success')
        {
            const userStatus ={
                status:response.data.status,
                data:response.data.data,
                error:response.data.error
            }
            dispatch(saveUserSuccess(userStatus));
          //  dispatch(getUsersList());
        }
        else{
            const userStatus ={
                status:response.data.status,
                data:response.data.data,
                error:response.data.error
            }         
            dispatch(saveUserError(userStatus));
        }
    })

}

export const getUsersListSuccess=(userStatus)=>{
    return {type:DISPLAY_USERS, payload :{userStatus}};
}
export const getUserList=()=> async (dispatch)=>{
    let apiResponse;
    const saveUserURL= backEndURL+'/api/getUser';
    await axios
    .get(saveUserURL,{})
    .then((response)=>{
        const userList={};
        if(response.data.status === 'success')
        {
            const userStatus ={
                status:"**Please enter valid details",
                data:response.data.data,
                error:null
            }
            dispatch(getUsersListSuccess(userStatus));
          }
    })

}
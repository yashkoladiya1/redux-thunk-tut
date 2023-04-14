import {GET_USER_DETAILS} from '../constant'
export const getUserDetails = (data) =>{
    console.log("actiondata--->",data)
    return {
        type:GET_USER_DETAILS,
        payload:data
    }
}
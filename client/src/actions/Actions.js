import { USER_TYPE } from "./types";
import axios from 'axios'

export const loginStudent = (data,callback) =>{
    return dispatch => {
        return axios.post('/auth/login/',data,{
        "Content-Type": "application/json",
    })
        .then(res=>{
            if(res.status === 200){
                dispatch({
                    type: USER_TYPE,
                    payload : res.data.user
                })
               
            }
            callback(res)
        })

        .catch(err=>{
           callback(err.response)
        }) 
    }
}

export const verifyOtp = (data,callback)=>{
    return dispatch=>{
        return axios.post('/auth/verify/',data,{
            "Content-Type": "application/json",
        })
        .then(res=>{
            callback(res);
        })
        .catch(err=>{
            callback(err.response)
        })
    }
}
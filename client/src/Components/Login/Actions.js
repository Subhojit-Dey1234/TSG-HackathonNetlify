import { USER_TYPE } from "../../actions/types";
import axios from "axios";

export const loginOfficial = (data,callback)=>{
    return dispatch => {
        return axios.post('/auth/login-officials/',data,{
            "Content-Type": "application/json",
        })
        .then((res)=>{
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
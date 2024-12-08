
import axios from "axios";
import { GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionTypes"
// import { API_BASE_URL } from "@/config/api";
// import { type } from "os";
 

export const register = userData=>async(dispatch)=>{
    dispatch({type:REGISTER_REQUEST})
    try{
        const {data} = await axios.post(`http://localhost:5454/auth/signup`, userData)
        if(data.jwt){
            localStorage.setItem("jwt", data.jwt)
            dispatch({type:REGISTER_SUCCESS})
        }

        console.log("REGISTER success", data);
    }catch(error){
        console.log(error);
    }
}


export const getUser =()=>async(dispatch)=>{
    dispatch({type:GET_USER_REQUEST})
    try{
        const {data} = await axios.get(`http://localhost:5454/api/users/profile`, {
            headers:{
                "Authorization": `Bearer ${localStorage.getItem("jwt")}`,
            },
        });
        // if(data.jwt){
        //     localStorage.setItem("jwt", data.jwt)
            dispatch({type:GET_USER_SUCCESS, payload: data})
        // }


        console.log("GET USER success", data);
    }catch(error){
        console.log(error);
    }
}

export const login = userData=>async(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
    try{
        const {data} = await axios.post(`http://localhost:5454/auth/signing`, userData)
        console.log("Payload Sent:", userData);
console.log("Response Received:", data);
        if(data.jwt){
            localStorage.setItem("jwt", data.jwt)
            dispatch({type:LOGIN_SUCCESS})
        }

        // getUser();
        console.log("LOGIN success", data);
    }catch(error){
        console.log(error);
    }
}


export const logout = () => async(dispatch)=>{
    dispatch({type:LOGOUT})
    localStorage.clear();
}
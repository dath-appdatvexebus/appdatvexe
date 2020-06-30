import axios from 'axios'



export const Api = axios.create({
    baseURL: "http://appdatvexe.herokuapp.com/api",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
})
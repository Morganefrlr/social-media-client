import axios from 'axios'

export const makeRequest = axios.create({
    baseURL:"https://sore-cyan-pig-wrap.cyclic.app/api/",
    withCredentials:true,
})
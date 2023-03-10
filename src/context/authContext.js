import { createContext, useEffect, useState } from "react";
import axios from 'axios'



export const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{
    const [currentUser, setCurrentUser]= useState(
        JSON.parse(localStorage.getItem('user')) || false 
    )
    const login = async (inputs) =>{
        const res = await axios.post('https://sore-cyan-pig-wrap.cyclic.app/api/auth/login', inputs, {
            withCredentials:true,
        })
        setCurrentUser(res.data)
    
    }
    useEffect(() =>{
        localStorage.setItem('user', JSON.stringify(currentUser))
    },[currentUser])




    const logout = async () => {
        await axios.post("https://sore-cyan-pig-wrap.cyclic.app/api/auth/logout",{}, { withCredentials: true });
        localStorage.removeItem("user");
        window.location = "https://social-mediav22.netlify.app/login";
       
    };


    return (
        <AuthContext.Provider value={{ currentUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
import React, { useEffect, useState } from 'react'

const useThemeSwitcher = () => {

    const preferDarkQuery = "(prefer-color-scheme: black)";
    const [mode, setMode] = useState("");

    useEffect(()=>{
        const mediaQuery = window.matchMedia(preferDarkQuery);
        const userPreference = window.localStorage.getItem("theme");

        const handleChange =()=>{
            if(userPreference){
                let check = userPreference === "black" ? "black" : "white";
                setMode(check);
                if(check === "black"){
                    document.documentElement.classList.add("black");
                }else{
                    document.documentElement.classList.remove("black");
                }
            }else{
                let check = mediaQuery.matches ? "black" : "white"
                setMode(check);
                if(check === "black"){
                    document.documentElement.classList.add("black");
                }else{
                    document.documentElement.classList.remove("black");
                }
            }
        }
        mediaQuery.addEventListener("change", handleChange)

        return () => mediaQuery.removeEventListener("change", handleChange)
    }, [])

    useEffect(() =>{
        if(mode === "black"){
            window.localStorage.setItem("theme", "black");
            document.documentElement.classList.add("black")
        }else{
            window.localStorage.setItem("theme", "white");
            document.documentElement.classList.remove("black")
        }
    }, [mode])


  return [mode, setMode]
}

export default useThemeSwitcher
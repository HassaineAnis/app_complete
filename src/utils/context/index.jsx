import { createContext, useState } from "react";
 
export const ThemeContext = createContext()
export const ThemeProvider =({children})=>{
  const [theme,setTheme] = useState('light')
  const body = document.querySelector('body') 
  const arrierePlant = theme ==='darck'?{backgroundColor:'#4F4C6B'}:{backgroundColor:"#F9F9FC"}
  const couleurPolice=theme ==='darck'?{color:"#FFFFFF"}:null
  const toggleTheme = ()=>{
  setTheme(theme === 'light'?'darck':'light')
  theme==='light'?(body.style.backgroundColor ="#2E2E41"):(body.style.backgroundColor ="#FFFFFF")
   
   

  }
return(
    <ThemeContext.Provider value={{theme,toggleTheme,arrierePlant,couleurPolice}}>
        {children}
    </ThemeContext.Provider>
)

}
export const SurveyContext = createContext()

export const SurveyProvider = ({children})=>{
    const [answer,setAnswer]=useState({})
    const saveAnswer =(newAnswer)=>{
      setAnswer({...answer,...newAnswer})
      
    }


  return(
    <SurveyContext.Provider value={{answer,saveAnswer}}>
      {children}
    </SurveyContext.Provider>
  )
}
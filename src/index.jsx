import React from 'react';
import ReactDOM from 'react-dom/client';
 import "./styles/index.css"
import Home from './pages/Home';
import Header from './components/Header/Header';
import Survey from './pages/Survey';
 import {BrowserRouter,Routes,Route} from "react-router-dom"
import Erreur from './components/Erreur/Erreur';
import Freelances from './pages/Freelances';
import Detail from './pages/Detail';
 import Results from "./pages/Results";
 import Footer from './components/Footer/Footer';
import { SurveyProvider, ThemeProvider } from './utils/context';
 
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <ThemeProvider>

    <Header/>
    <SurveyProvider> 
    <Routes>
     <Route path="/" element={<Home/>} />
      
     <Route path="/survey/:numQuestion" element={<Survey/>} />
     <Route path='/results' element={<Results/>} / >
      
     <Route path='/freelances'element={<Freelances   />}/ >
     <Route path='/freelances/detail/:id' element={<Detail/>} />
    
       
     
     <Route path='*'element={<Erreur/>}/>
    </Routes>
    </SurveyProvider>
      <Footer/>
     </ThemeProvider>
    </BrowserRouter>
     
  
);

 
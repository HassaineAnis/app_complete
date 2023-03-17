import React, { useState, useEffect } from "react";
import "../styles/loading.css"
import Card from "../components/Card/Card";
import "../styles/freelances.css";
import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "../utils/context/index";
import { useFetch } from "../utils/context/Hooks/HookAPI";

function Freelances() {
  /*
  const [freelancersList, setFreelancerslist] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [erreur,setErreur] = useState(false);*/
  const {couleurPolice}=useContext(ThemeContext)
  const {isLoading,data,erreur} = useFetch("http://localhost:8000/freelances")
  const {freelancersList} = data
  /*  useEffect(() =>{
    async function chargementData(){
      setLoading(true)
      try{
        const respense = await fetch("http://localhost:8000/freelances")
        const {freelancersList} = await respense.json()
        setFreelancerslist(freelancersList)
      } catch(e){
         console.log("erreur!!!",e)
         setErreur(true)
      }
      finally{ 
       setLoading(false)

      }

    }
  chargementData();
}
  ,[])
  */
 
 if(erreur){
  return(
    <div className="freelance">
    <div className="freelance_entete">
      <h2 style={{color:"red"}} >Probleme de chargement !!!</h2>
    </div>
    </div>
  )
 }
  return (
    <div className="freelance">
      <div className="freelance_entete">
        <h2 style={couleurPolice}>Trouvez votre prestataire</h2>
        <p style={couleurPolice}>Chez Shiny nous réunissons les meilleurs profils pour vous.</p>
      </div>
      {!isLoading ? (
        <div className="freelance_card">
          {freelancersList.map((profile) => (
            <Card
              key={profile.id}
              label={profile.job}
              picture={profile.picture}
              title={profile.name}
              id = {profile.id}
            />
          ))}
        </div>
      ) : (
        <p className="rotation"></p>
      )}
    </div>
  );
}
 
export default Freelances;
 
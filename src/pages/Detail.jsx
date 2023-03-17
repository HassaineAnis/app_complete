import React from "react";
import "../styles/detail.css";
import { useParams } from "react-router-dom";
import { useEffect, useState,useContext } from "react";
import "../styles/loading.css";
import { ThemeContext } from "../utils/context/index";
 

function Detail() {
  const { id } = useParams();
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [freelanceData, setFreelanceData] = useState({});
  const {arrierePlant,couleurPolice} = useContext(ThemeContext)
                      /////////////////////////////appel API///////////////////////////////
useEffect(()=>{
  const fetchData= async()=>{
    setIsDataLoading(true)
    try{
    const repense = await fetch(`http://localhost:8000/freelance/?id=${id}`)
    const {freelanceData} = await repense.json()
    setFreelanceData(freelanceData)
    
    }catch(error){
      console.log("erreur!!!!!!", error)

    }
    finally{
      setIsDataLoading(false);

    }
  }
  fetchData()
},[])



  return (
    <div className="detail"style={arrierePlant}>
      {!isDataLoading ? (
        <>
          <img
            className="detail_photo"
            src={freelanceData.picture}
            alt="profil"
            height="160px"
            width="160px"
          />
          <div className="detail_information">
            <div className="detail_localisation">
              <h2 style={couleurPolice}>{freelanceData.name}</h2>
              <span style={couleurPolice}>{freelanceData.location}, France</span>
            </div>
            <h3 style={couleurPolice}>{freelanceData.job}</h3>
            <div className="detail_information_react">
              {freelanceData &&
                freelanceData.skills &&
                freelanceData.skills.map((skill) => (
                  <span style={couleurPolice} key={skill}>{skill}</span>
                ))}
            </div>
            <div className="detail_infromation_disponibilite" style={couleurPolice}>
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="6.5"
                  cy="6.5"
                  r="6.5"
                  fill={freelanceData.available ? "#57B894" : "red"}
                />
              </svg>
              {freelanceData.available
                ? "Disponibilite maintenant"
                : " Non disponibilite maintenant"}
            </div>
            <div  style={couleurPolice}className="detail_information_prix">
              {freelanceData.tjm}€ / jour
            </div>
          </div>
        </>
      ) : (
        <p className="rotation"></p>
      )}
    </div>
  );
}

export default Detail;

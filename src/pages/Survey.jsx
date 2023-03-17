import "../styles/survey.css";
import "../styles/loading.css";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import React from "react";
import { useContext } from "react";
import { ThemeContext, SurveyContext } from "../utils/context/index";
import "../styles/darckMode.css";

function Survey() {
  const { numQuestion } = useParams();
  const numQuestionInt = parseInt(numQuestion);
  const questionPrecedente = numQuestionInt === 1 ? 1 : numQuestionInt - 1;
  const questionSuivante = numQuestionInt + 1;
  const [surveyData, setSurveyData] = useState({});
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [erreur, setErreur] = useState(false);
  const { theme, arrierePlant, couleurPolice } = useContext(ThemeContext);
  const { answer, saveAnswer } = useContext(SurveyContext);
  const styleSombre = { ...couleurPolice, ...arrierePlant };
  const clique = { border: "2px solid  #00B7FF" };
  const cliquebtn = { ...clique, ...styleSombre };

  useEffect(() => {
    async function fetchSurvey() {
      setIsDataLoading(true);
      try {
        const respense = await fetch(`http://localhost:8000/survey`);
        const { surveyData } = await respense.json();
        setSurveyData(surveyData);
      } catch (error) {
        console.log("erreur!!!", error);
        setErreur(true);
      } finally {
        setIsDataLoading(false);
      }
    }
    fetchSurvey();
  }, []);

  //function clique
  function regitre(answer) {
    saveAnswer({ [numQuestion]: answer });
  }

   
  if (erreur) {
    return (
      <div className="questionnaire">
        <h2>Question {numQuestion}</h2>
        <span>oups il y a eu un problème</span>
      </div>
    );
  }
  return (
    <div
      className="questionnaire"
      style={{ color: theme === "light" ? "#2f2e41" : "#FFFFFF" }}
    >
      <h2>Question {numQuestion}</h2>
      {isDataLoading ? (
        <p className="rotation"></p>
      ) : (
        <>
          <p>{surveyData[numQuestionInt]}</p>
          <div className="questionnaire_reponse">
            <button
              className="questionnaire_reponse_oui"
              style={answer[numQuestion] === true ? cliquebtn : styleSombre}
              onClick={() => {
                regitre(true);
              }}
            >
              OUI
            </button>
            <button
              className="questionnaire_reponse_non"
              style={answer[numQuestion] === false ? cliquebtn : styleSombre}
              onClick={() => {
                regitre(false);
              }}
            >
              NON
            </button>
          </div>
          <div className="questionnaire_navigation">
            <Link
              style={couleurPolice}
              className="btn"
              to={`/survey/${questionPrecedente}`}
            >
              Precedent
            </Link>
            {surveyData[numQuestionInt + 1] ? (
              <Link
                style={couleurPolice}
                className="btn"
                to={`/survey/${questionSuivante}`}
              >
                Suivant
              </Link>
            ) : (
              <Link
                style={couleurPolice}
                className="btn"
                to="/Results"
              >
                Resultat
              </Link>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Survey;

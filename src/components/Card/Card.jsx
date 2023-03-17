import React from 'react';
import PropTypes from 'prop-types';
import DefaultPicture from '../../assets/image.JPG'
import "../../styles/card.css"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../utils/context/index';

//import styled from "styled-components"
/*
const TitreStyle =styled.span`
    color:red;
`*/
 


function Card({label,picture,title,id}) {
    const {arrierePlant,couleurPolice} = useContext(ThemeContext)
     

    return (
        <Link to={`/freelances/detail/${id}`} style={{textDecoration:"none"}}> 
        <div className='card'style={arrierePlant}>
          <span className='card_label'style={couleurPolice} >{label}</span>   
            <img className='card_photo' src={picture} alt="freelance" height={90} width={90} />
            <span className='card_titre'style={couleurPolice}>{title}</span>
            
        </div>
        </Link>
        
    );
}



Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}
Card.defaultProps = {
    title: '',
    label:'',
    picture:DefaultPicture,
}

export default Card;
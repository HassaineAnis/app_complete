import React from 'react';
import "../../styles/footer.css"
import { useContext } from 'react'
import { ThemeContext } from '../../utils/context/index'
function Footer() {
    const {toggleTheme,theme} = useContext(ThemeContext)
    return (
        <div className='footer'>
            <button className='footer_btn' onClick={()=>toggleTheme()}>
                Changer de mode :{theme ==='light'?'☀️' : '🌙'}
            </button>
        </div>
    );
}

export default Footer
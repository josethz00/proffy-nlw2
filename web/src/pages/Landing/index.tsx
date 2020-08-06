import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import api from '../../services/api';

const Landing : React.FC = ()=>{

    const [totalConnections, setTotalConnections] = useState(0);  

    useEffect(()=>{
        api.get('connections').then(response=>{
            const { total } = response.data;
            setTotalConnections(total);
        })
    }, [totalConnections])

    return(
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={require('../../assets/images/logo.svg')} alt="" />
                    <h2>Sua plataforma de estudos online</h2>
                </div>
                <img src={require('../../assets/images/landing.svg')} alt="Plataforma de estudos" className="hero-image"/>
                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={require('../../assets/images/icons/study.svg')} alt="Estudar" />
                        Estudar
                    </Link>
                    <Link to="/give-classes" className="give-classes">
                        <img src={require('../../assets/images/icons/give-classes.svg')} alt="Dar aulas" />
                        Dar aulas
                    </Link>
                </div>
                <span className="total-connections">
                    Total de {totalConnections} conexões já realizadas <img src={require('../../assets/images/icons/purple-heart.svg')} alt="Estudantes online"/>
                </span>
            </div>
        </div>
    );
}

export default Landing;
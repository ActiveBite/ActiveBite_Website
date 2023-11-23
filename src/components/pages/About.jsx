import React from 'react'
import "./About.css"
import logo from "../../logo.png"
import { useNavigate } from "react-router-dom"

function About() {
    const navigate = useNavigate()
    return (
        <div className='about_page'>
            <div className='about_wrap'>
                <h1 className='title'>ActiveBite</h1>
                <p className='description'>
                Добро пожаловать в нашу семью здравого движения. Общее семейное дело, начатое моей командой, поможет вам улучшить свое тело и дух. Вы будете развиваться вместе с единомышленниками: они сделают вас лучше, а вы, в свою очередь их. Становитесь лучше каждый день.
                </p>
                <div className='buttons_wrap'>
                    <button onClick={() => navigate('/registration')} className="reg_button">Регистрация</button>
                    <button onClick={() => navigate('/auth')} className="entry_button">Вход</button>
                </div>
            </div>
            <img className='pic' src={logo} alt=''/>
        </div>
    )
}

export default About

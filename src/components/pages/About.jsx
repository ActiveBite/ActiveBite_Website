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
                <p className='description'>orem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales ultricies tortor, vel euismod ligula condimentum nec. Curabitur nec orci ante. Donec lectus mauris, sodales a ligula vestibulum, tristique tempus nisl. Aliquam vitae purus quis justo cursus aliquam. </p>
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

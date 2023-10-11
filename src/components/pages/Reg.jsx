import React from 'react'
import "./AuthRegForm.css"
import { Link } from 'react-router-dom'
import { useFor, Controller } from 'react-hook-form'





function Reg() {

  return (
    <div className="form_page">
        <div className="form_container">
        <h2> Регистрация</h2>  
        <form className='form'>
            <input type="text" className="form_input" placeholder="Логин"/>
            <input type="email" className="form_input" placeholder="Почта"/>
            <input type="password" className="form_input" placeholder="Пароль"/>
            <input type="password" className="form_input" placeholder="Подтверждение пароля"/>
            <button type="submit" class="form_submit_button">Зарегистрироваться</button>
        </form>
        <div className="form_footer">
            <p>Есть аккаунт?</p><Link to='/auth'>Авторизоваться</Link>
        </div>
        </div>
    </div>
    )
}
export default Reg

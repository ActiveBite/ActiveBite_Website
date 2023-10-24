import React from 'react'
import "./AuthRegForm.css"
import { Link } from 'react-router-dom'

function Auth() {
  return (
    <div className="form_page">
        <div className="form_container auth_form_container">
            <h2>Авторизация</h2>  
            <form className='form'>
                <input type="text" className="form_input" placeholder="Логин"/>
                <input type="password" className="form_input" placeholder="Пароль"/>
                <button type="submit" class="form_submit_button">Авторизироваться</button>
            </form>
            <div className="form_footer">
                <p>Нет аккаунта?</p><Link to='/registration'>Зарегистрироваться</Link>
            </div>
        </div>
    </div>
    )
}

export default Auth

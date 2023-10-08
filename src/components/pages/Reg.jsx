import React from 'react'
import "./Reg.css"

function Reg() {
  return (
    <div className="Form_Content">
      <h2> Регистрация</h2>  
      <form>
        <input type="text" className="FadeIn_Second" name="login" placeholder="Логин"/>
        <input type="email" className="FadeIn_Third" name="email" placeholder="Почта"/>
        <input type="password" className="FadeIn_Third" name="password" placeholder="Пароль"/>
        <input type="password" className="FadeIn_Third" name="rep_password" placeholder="Подтверждение пароля"/>
        <input type="submit" class="FadeIn_Fourth" value="Зарегистрироваться"/>
      </form>
      <div className="Form_Footer">
        <a1>Есть аккаунт?</a1><a href="http://localhost:3000/Auth">Авторизироваться</a>
      </div>
      </div>
    )
}
export default Reg

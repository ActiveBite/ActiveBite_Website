import React from 'react'
import "./Reg.css"

function Reg() {
  return (
    <div className="form_Content">
      <h2> Регистрация</h2>  
      <form>
        <input type="text" className="fadeIn_second" name="login" placeholder="Логин"/>
        <input type="email" className="fadeIn_third" name="email" placeholder="Почта"/>
        <input type="password" className="fadeIn_third" name="password" placeholder="Пароль"/>
        <input type="password" className="fadeIn_third" name="rep_password" placeholder="Подтверждение пароля"/>
        <input type="submit" class="fadeIn_fourth" value="Зарегистрироваться"/>
      </form>
      <div className="form_Footer">
        <a1>Есть аккаунт?</a1><a href="http://localhost:3000/Auth">Авторизироваться</a>
      </div>
      </div>
    )
}
export default Reg

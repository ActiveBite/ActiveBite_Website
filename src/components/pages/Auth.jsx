import React from 'react'
import "./Reg.css"

function Auth() {
  return (    <div className="form_Content_Auth">
      <h2> Авторизация</h2>
      <form>
        <input type="text" className="fadeIn_second" name="login" placeholder="Логин"/>
        <input type="password" className="fadeIn_third" name="password" placeholder="Пароль"/>
        <input type="submit" class="fadeIn_fourth" value="Авторизоваться"/>
      </form>
      <div className="form_Footer">
        <a>Нет аккаунта?</a><a1 href="http://localhost:3000/Registration">Зарегистрироваться</a1>

      </div>
      </div>
  )
}

export default Auth
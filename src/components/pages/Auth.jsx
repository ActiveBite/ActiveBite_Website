import React from 'react'
import "./Reg.css"

function Auth() {
  return (    <div className="Form_Content_Auth">
      <h2> Авторизация</h2>
      <form>
        <input type="text" className="FadeIn_Second" name="login" placeholder="Логин"/>
        <input type="password" className="FadeIn_Third" name="password" placeholder="Пароль"/>
        <input type="submit" class="FadeIn_Fourth" value="Авторизоваться"/>
      </form>
      <div className="Form_Footer">
        <a>Нет аккаунта?</a><a1 href="http://localhost:3000/Registration">Зарегистрироваться</a1>

      </div>
      </div>
  )
}

export default Auth
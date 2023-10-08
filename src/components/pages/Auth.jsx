import React from 'react'
import "./Reg.css"

function Auth() {
  return (
    <div className="wrapper_fade_In_Down">
    <div className="form_Content">
      <h2 className="active"> Авторизация</h2>
      <form>
        <input type="text" className="fadeIn_second" name="login" placeholder="Логин"/>
        <input type="password" className="fadeIn_third" name="login" placeholder="Пароль"/>
        <input type="submit" class="fadeIn_fourth" value="Авторизоваться"/>
      </form>
      <div className="form_Footer">
        <a>Нет аккаунта?</a><a1 className="under_line_Hover" href="http://localhost:3000/Registration">Зарегистрироваться</a1>

      </div>
      </div>
      </div>
  )
}

export default Auth
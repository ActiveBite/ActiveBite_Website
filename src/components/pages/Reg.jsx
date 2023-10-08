import React from 'react'
import "./Reg.css"

function Reg() {
  return (
    <div className="wrapper_fade_In_Down">
    <div className="form_Content">
      <h2 className="active"> Регистрация</h2>  
      <form>
        <input type="text" className="fadeIn_second" name="login" placeholder="Логин"/>
        <br />
        <input type="email" className="fadeIn_third" name="login" placeholder="Почта"/>
        <br />
        <input type="password" className="fadeIn_third" name="login" placeholder="Пароль"/>
        <br />
        <input type="password" className="fadeIn_third" name="login" placeholder="Подтверждение пароля"/>
        <br />
        <input type="submit" class="fadeIn_fourth" value="Зарегистрироваться"/>
      </form>
      <div className="form_Footer">
        <a1>Есть аккаунт?</a1><a className="under_line_Hover" href="http://localhost:3000/Auth">Авторизироваться</a>
      </div>,
      </div>
    </div>
    )
}
export default Reg

import React from 'react'
import "./Reg.css"

function Reg() {
  return (
    <div className="wrapper fadeInDown">
    <div id="formContent">
      <h2 className="active"> Регистрация</h2>  
      <form>
        <input type="text" id="login" className="fadeIn second" name="login" placeholder="Логин"></input>
        <input type="text" id="password" className="fadeIn third" name="login" placeholder="Почта"></input>
        <input type="text" id="password" className="fadeIn third" name="login" placeholder="Пароль"></input>
        <input type="text" id="password" className="fadeIn third" name="login" placeholder="Подтверждение пароля"></input>

        <input type="submit" class="fadeIn fourth" value="Зарегистрироваться"></input>
      </form>
      <div id="formFooter">
        
        <a>Уже есть аккаунт?</a><a className="underlineHover" href="#">Авторизироваться</a>
      </div>
      </div>

    </div>
    )
}
export default Reg
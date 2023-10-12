import React from 'react'
import "./AuthRegForm.css"
import { Link } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'


function Reg() {

    const { handleSubmit, control, errors } = useForm();
    console.log(data);

  return (
    <div className="form_page">
        <div className="form_container">
        <h2> Регистрация</h2>  
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="login"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <input type="text" className="form_input" placeholder="Логин" {...field} /> 
                )}
            />
            {errors.login && <p>Поле "Логин" обязательно</p>}
            <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <input type="email" className="form_input" placeholder="Почта" {...field} />
                )}
            />
            {errors.email && <p>Поле "Почта" обязательно</p>}
            <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <input type="password" className="form_input" placeholder="Пароль" {...field} />
                )}
            />
           {errors.password && <p>Поле "Пароль" обязательно</p>}
           <Controller
                name="confirmPassword"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <input type="password" className="form_input" placeholder="Подтверждение пароля" {...field} />
                )}
            />
          {errors.confirmPassword && <p>Поле "Подтверждение пароля" обязательно</p>}
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

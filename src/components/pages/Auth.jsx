import React from 'react'
import "./AuthRegForm.css"
import { Link } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form';

function Auth() {
    const { handleSubmit, control, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data);
      }

  return (
    <div className="form_page">
        <div className="form_container auth_form_container">
            <h2>Авторизация</h2>  
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
                    name="password"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <input type="password" className="form_input" placeholder="Пароль" {...field} />
                    )}
                />
                {errors.password && <p>Поле "Пароль" обязательно</p>}
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
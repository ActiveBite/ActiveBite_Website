import React, { useState } from 'react'
import "./AuthRegForm.css"
import { Link, useNavigate } from 'react-router-dom'
import { useForm} from "react-hook-form"
import { activebite } from '../../api/api'

function Auth() {
    const navigate = useNavigate()
    const [error, setError] = useState(null)
    const { register, handleSubmit} = useForm()
    const onSubmit = (data) =>{
        console.log(data);
        activebite.post('/auth/authorization', {
            username: data.username,
            password: data.password
          })
          .then(function (response) {
            console.log(response);
            localStorage.setItem('avatar', response.data.avatar)
            localStorage.setItem('username', response.data.username)
            navigate('/lk')
          })
          .catch(function (error) {
            if (error.response) {
              setError(error.response.data)
            }
          })
    } 
  return (
    <div className="form_page">
        <div className="form_container auth_form_container">
            <h2>Авторизация</h2>  
            {
                error &&
                <p className='error'>{error}</p>
            }
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <input type="text" className="form_input" placeholder="Логин" {...register("username",{required: true, maxLength: 20 })}/>
                <input type="password" className="form_input" placeholder="Пароль" {...register("password",{required: true, maxLength: 20 })}/>
                <button type="submit" className="form_submit_button">Авторизироваться</button>
            </form>
            <div className="form_footer">
                <p>Нет аккаунта?</p><Link to='/registration'>Зарегистрироваться</Link>
            </div>
        </div>
    </div>
    )
}

export default Auth

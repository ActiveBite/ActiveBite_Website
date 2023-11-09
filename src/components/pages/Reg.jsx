import React, {useState} from 'react'
import "./AuthRegForm.css"
import { Link } from 'react-router-dom'
import { useForm} from "react-hook-form"
import { activebite } from '../../api/api'

function Reg() {
    const [error, setError] = useState(null)
    const { register, handleSubmit, watch } = useForm()
    const onSubmit = (data) =>{
        activebite.post('/auth/registration', {
            username: data.username,
            email: data.email,
            password: data.password
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
            setError(error.response.data)
          });
    } 

    return (
        <div className="form_page">
            <div className="form_container">
                <h2> Регистрация</h2>  
                {
                    error &&
                    <p className='error'>{error}</p>
                }
                <form className='form' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" className="form_input" placeholder="Логин" {...register("username",{required: true, maxLength: 20 })}/>
                    <input type="email" className="form_input" placeholder="Почта" {...register("email", {required: true})}/>
                    <input type="password" className="form_input" placeholder="Пароль" {...register("password",{required: true})}/>
                    <input type="password" className="form_input" placeholder="Подтверждение пароля" {...register("conf_pass",{
                        required: true, 
                        validate:(val) => {
                            if(watch('password')!== val) {
                                return "Пароли не совпадают"
                            }
                        }
                    })}/>
                    <button type="submit" className="form_submit_button">Зарегистрироваться</button>
                </form>
                <div className="form_footer">
                    <p>Есть аккаунт?</p><Link to='/auth'>Авторизоваться</Link>
                </div>
            </div>
        </div>
    )
}
export default Reg
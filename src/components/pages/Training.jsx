import React, { useState, useEffect } from 'react'
import "./Training.css"
import Exercise from "../Exercise.jsx"
import { useNavigate, useParams } from 'react-router-dom'
import { activebite } from '../../api/api.js'

function Training() {
    const [training, setTraining] = useState({})
    const params = useParams() 
    const router = useNavigate()
    function getTraining(trainingId) {
        activebite.get('/trainings/training/') , {params:{trainingId}}
        .then(result => {
            if (!result.data){
                router('/404')
            }
            setTraining(result.data)
    })
    }
    useEffect(() => {getTraining (params),[]});
  return (
    <div>
        {training &&
        <>
        <div className='training_header'>
            <img className='training_image'src="" alt="" />
            <div>
                <h2 className='training_title'>Заголовок тренировки</h2>
                <div className='training_button'>
                    <button className='action_button'>В избранное</button>
                    <button className='action_button'>Лайк</button>
                    <button className='action_button'>Дизлайк</button>
                </div>
            </div>
        </div>
        <p className='training_description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales ultricies tortor, vel euismod ligula condimentum nec. Curabitur nec orci ante. Donec lectus mauris, sodales a ligula vestibulum, tristique tempus nisl. Aliquam vitae purus quis justo cursus aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales ultricies tortor, vel euismod ligula condimentum nec. Curabitur nec orci ante. Donec lectus mauris, sodales a ligula vestibulum, tristique tempus nisl. Aliquam vitae purus quis justo cursus aliquam. </p>
            <ul className='list_exercises'>
                <Exercise />
                <Exercise />
                <Exercise />
                <Exercise />
            </ul>
        <button className='start_button'>Запустить тренировку</button>
        </>
}
    </div>
  )
}

export default Training
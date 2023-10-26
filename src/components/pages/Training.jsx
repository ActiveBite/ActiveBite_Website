import React from 'react'
import "./Training.css"
import Exercise from "./Exercise.jsx"

function Training() {
  return (
    <div>
        <div className='training_header'>
            <img className='training_image'src="" alt="" />
            <div className='workout'>
                <h2>Заголовок тренировки</h2>
                <div className='workout_button'>
                    <button className='button'>В избранное</button>
                    <button className='button'>Лайк</button>
                    <button className='button'>Дизлайк</button>
                </div>
            </div>
        </div>
        <p className='training_description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales ultricies tortor, vel euismod ligula condimentum nec. Curabitur nec orci ante. Donec lectus mauris, sodales a ligula vestibulum, tristique tempus nisl. Aliquam vitae purus quis justo cursus aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales ultricies tortor, vel euismod ligula condimentum nec. Curabitur nec orci ante. Donec lectus mauris, sodales a ligula vestibulum, tristique tempus nisl. Aliquam vitae purus quis justo cursus aliquam. </p>
        <div className='list_wrapper'>
            <ul className='list_exercises'>
                <Exercise />
                <Exercise />
                <Exercise />
                <Exercise />
            </ul>
        </div>
        <button className='start_button'>Запустить тренировку</button>
    </div>
  )
}

export default Training
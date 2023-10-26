import React from 'react'
import "Training.css"
import Exercise from "./Exercise"

function Training() {
  return (
    <div>
        <div className='training_header'>
            <img className='training_image'src="" alt="" />
            <div>
                <h2>Заголовок тренировки</h2>
                <button className='button'>В избранное</button>
                <button className='button'>Лайк</button>
                <button className='button'>Дизлайк</button>
            </div>
        </div>
        <div>
            <p>klsdvmksldmv</p>
        </div>
        <div>
            <ul>
                <Exercise />
                <Exercise />
                <Exercise />
                <Exercise />
            </ul>
        </div>
        <button>Запустить тренировку</button>
    </div>
  )
}

export default training
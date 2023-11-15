import React from 'react'
import "./Mw.css"

function Mw() {
    return (
        <div className='window_wrapper'>
            <div className='window'>
                <h2 className='window_title'>Публикация тренировки</h2>
                <div className='filling_fields'>
                    <p><textarea className='title_field' placeholder='Заголовок тренировки'></textarea></p>
                    <p><textarea className='description_field' placeholder='Описание тренировки'></textarea></p>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default Mw

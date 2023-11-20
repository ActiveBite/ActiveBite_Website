import React from 'react'
import "./Mw.css"

function Mw({active, setActive}) {
    return (
        <div className={active ? "window active" : "window"} onClick={() => setActive(false)}>
            <div className='window_body' onClick={e => e.stopPropagation()}>
                <h2 className='window_title'>Публикация тренировки</h2>
                <div className='filling_training_fields'>
                    <input type="text" className='title_training_field' placeholder='Заголовок тренировки'/>
                    <textarea className='description_training_field' placeholder='Описание тренировки'></textarea>
                </div>
                <input type="file" className='add_picture'/>
                <div className='exercise_info_fields_wrapper'>
                    <div className='exercise_info_fields'>
                        <input type="text" placeholder='Упражнение' className='exercise_info'/>
                        <input type="number" placeholder='Длительность' className='exercise_info' min="1"/>
                    </div>
                    <button className='button_adding_exercise'>Добавить</button>
                </div>
                <div className='list_exercise_wrapper'>
                    <ul className='list_exercise'>
                        <li className='exercise'>
                            <p>Упражнение</p>
                            <p>Длительность мин.</p>
                        </li>
                        <li className='exercise'>
                            <p>Анжуманя</p>
                            <p>5 мин.</p>
                        </li>
                    </ul>
                </div>
                <button className='publish'>Опубликовать</button>
            </div>
        </div>
    )
}

export default Mw

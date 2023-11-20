import React from 'react'
import "./Mw.css"

function Mw({active, setActive}) {
    return (
        <div className={active ? "window active" : "window"} onClick={() => setActive(false)}>
            <div className='window_body' onClick={e => e.stopPropagation()}>
                <div className='window_content'>
                    <h2 className='window_title'>Публикация тренировки</h2>
                    <div className='filling_fields'>
                        <input type="text" className='title_field' placeholder='Заголовок тренировки'/>
                        <p><textarea className='description_field' placeholder='Описание тренировки'></textarea></p>
                    </div>
                    <div className='add_picture_wrapper'>
                        <input type="file" className="picture"/>
                        <button className='add_picture'>Добавить картинку</button>
                    </div>
                    <div className='adding_exercise_wrapper'>
                        <div className='adding_exercise'>
                            <input type="text" placeholder='Упражнение' className='exercise_info'/>
                            <input type="text" placeholder='Длительность' className='exercise_info'/>
                        </div>
                        <button className='adding'>Добавить</button>
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
                            <li className='exercise'>
                                <p>Бегит</p>
                                <p>10 мин.</p>
                            </li>  
                        </ul>
                    </div>
                    <button className='public' id='close_btn'>Опубликовать</button>
                </div>
            </div>
        </div>
    )
}

export default Mw

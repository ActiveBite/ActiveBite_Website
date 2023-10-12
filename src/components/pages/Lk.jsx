import React from 'react'
import "./Lk.css"

function Lk() {
  return (
    <div className='user'>
        <span className="avatar" img=""></span>
        <h2>username</h2>
        <button className='user_recept'/>
        <button className='user_tren'/>
        <div className='user_panel'>
            <span className="avatarka"></span>
            <h1>username</h1>
            <button className='recept' value="Рецепты"/>
            <button className='tren' value="Тренировки"/>
            <div>
            <button className='Izbr' value="Избранные"/>
            <button className='Public' value="Опублекованные"/>
            <button className='Add' value="Добавить"/>
            

            </div>
        </div>
    </div>

  )
}

export default lk
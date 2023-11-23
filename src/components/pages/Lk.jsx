import React, { useState, useEffect } from 'react';
import "./Lk.css"
import ListItem from "../ListItem.jsx"
import Mw from '../modal/Mw.jsx'
import { activebite } from '../../api/api.js';



function Lk() {
  const [category, setCategory] = useState('favorite')
  const [trainings, setTrainings] = useState([])
  const [loading, setLoading] = useState(true)
  const [modalActive, setModalActive] = useState(false)
 
  const fetchData = async (selectedCategory) => {
    setLoading(true)
    try {
      const response = await activebite.get(`/trainings/?${selectedCategory === 'published' ? 'published=true' : 'favorite=true'}`, { withCredentials: true })
      setTrainings(response.data)
    } catch (error) {
      console.error('Ошибка при получении данных:', error)
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchData(category)
  }, [category])

  return (
    <div className='user'>
      <div className='lk_header'>
        <div className='avatar_header'>
          <img  className='lk_avatar' src="" alt="" />
          <h3 className='lk_username'>username</h3>
        </div>
        <div className='lk_buttons_wrap'>
          <button className='button_header'>Рецепты</button>
          <button className='button_header'>Тренировки</button>
        </div>
      </div>
      <div>
        <h2 className='categories_title'>Тренировки</h2>
        <div className='categories_button'>
          <div className='categories'>
            <button className={`button ${category === 'favorite' ? 'active' : ''}`} onClick={() => setCategory('favorite')}>Избранные</button>
            <button className={`button ${category === 'published' ? 'active' : ''}`} onClick={() => setCategory('published')}>Опубликованные</button>
          </div>
          <button className='button' onClick={() => setModalActive(true)}>Добавить</button> 
        </div>    
        <div className='list_wrapper'>
          {loading ? (
            <p>Загрузка...</p>
          ) : trainings.length > 0 ? (
            <ul className='list'>
              {trainings.map(training => (
                <ListItem key={training.id} training={training} />
              ))}
                    </ul>
        ) : (
          <p>Пока пусто D:</p>
        )}   
        </div>
      </div>
      <Mw active={modalActive} setActive={setModalActive}/>
   </div>
  )
}


export default Lk
import React, { useState, useEffect } from 'react';
import "./Lk.css"
import ListItem from "./ListItem.jsx"
import axios from 'axios';


function Lk() {
  const [category, setCategory] = useState('favorite');
  const [trainings, setTrainings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async (selectedCategory) => {
    setLoading(true);
    try {
      const response = await axios.get(`/trainings/?${selectedCategory === 'published' ? 'published=true' : 'favorite=true'}`, { withCredentials: true });
      setTrainings(response.data);
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(category);
  }, [category]);

  const handleCategoryChange = newCategory => {
    setCategory(newCategory);
  };


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
            <button className={`button ${category === 'favorite' ? 'active' : ''}`} onClick={() => handleCategoryChange('favorite')}>Избранные</button>
            <button className={`button ${category === 'published' ? 'active' : ''}`} onClick={() => handleCategoryChange('published')}>Опубликованные</button>
          </div>
          <button className='button'>Добавить</button>
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
   </div>
  )
}

export default Lk
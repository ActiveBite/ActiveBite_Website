import React, { useEffect, useState } from 'react'
import "./Trainings.css"
import ListItem from "../TrainingItem.jsx"
import { activebite } from '../../api/api.js'


function Trainings() {
  const [trainingList, setTrainingList] = useState([])

  function getTrainingList() {
    activebite.get('/trainings/', {withCredentials: true})
    .then(res => {
      setTrainingList(res.data)
    })
  }

  useEffect(() => {
    getTrainingList()
  }, [])

  return (
    <div className='trainings'> 
      <h2 className='categories_title'>Тренировки</h2>
      <div className='search_block'>
        <input type="text" className="search_input" placeholder="Поиск"/>
        <button className='filter_button'>Фильтры</button>
      </div>
      <div className='list_wrapper'>
        <ul className='list'>
          { 
            trainingList.length > 0 &&
              trainingList.map(training => (
                <ListItem training={training}/> 
              ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Trainings
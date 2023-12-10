import React, { useState, useEffect } from 'react'
import useDebounce from '../../hooks/useDebounce'
import { activebite } from '../../api/api'
import './SearchExerciseInput.css'

function SearchExerciseInput({setExerciseId, exerciseId, setExerciseName}) {
  const [searchValue, setSearchValue] = useState('')
  const [hints, setHints] = useState([])
  const debounceSearch = useDebounce(searchValue, 700)

  const getExercises = () => {
    activebite.get('/exercises/', {
      params: {
        search_query: searchValue
      },
      withCredentials: true
    }).then(res => {
      setHints(res.data)
    })
  }

  useEffect(() => {
    if (!debounceSearch) {
      setHints([])
      return
    }

    if (hints.length === 1 && exerciseId === hints[0].id) {
      setExerciseId(hints[0].id)
      return
    }
    setExerciseId(null)

    getExercises()

  }, [debounceSearch])

  useEffect(() => {console.log(exerciseId);}, [exerciseId])


  return (
    <div className='search_exercise_input'>
      <input type="text" placeholder='Упражнение' className='exercise_info' onChange={(e) => setSearchValue(e.target.value)} value={searchValue}/>
      {(hints.length > 0 && exerciseId === null) &&
          <ul className='hints'>
            { 
            hints.map((hint) => (
              <li className='hint' key={hint.id} onClick={() => {
                setSearchValue(hint.exercise_name)
                setExerciseId(hint.id) 
                setExerciseName(hint.exercise_name)
              }}>
                <p>{hint.exercise_name}</p>
                <p>{hint.difficulty}</p>
              </li>
            ))}
          </ul>
      }
    </div>
  )
}

export default SearchExerciseInput
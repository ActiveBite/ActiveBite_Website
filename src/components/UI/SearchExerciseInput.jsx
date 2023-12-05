import React, { useState, useEffect } from 'react'
import useDebounce from '../../hooks/useDebounce'
import { activebite } from '../../api/api'

function SearchExerciseInput({setExerciseId}) {
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
    setExerciseId(null)
    if (!debounceSearch) {
      setHints([])
      return
    }

    getExercises()

  }, [debounceSearch])



  return (
    <div className='search_exercise_input'>
      <input type="text" placeholder='Упражнение' className='exercise_info' onChange={(e) => setSearchValue(e.target.value)} value={searchValue}/>
      {hints &&
        <div className='hint_wrapper'>
          <ul className='hints'>
            { 
            hints.map((hint) => (
              <li className='hint' onClick={() => {
                setExerciseId(hint.id) 
                setSearchValue(hint.exercise_name)
              }}>
                <p>{hint.exercise_name}</p>
                <p>{hint.difficulty}</p>
              </li>
            ))}
          </ul>
        </div>
      }
    </div>
  )
}

export default SearchExerciseInput
import React, {useState, useEffect} from 'react'
import "./Training.css"
import Exercise from "../Exercise.jsx"
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { activebite } from '../../api/api.js'

function Training() {
    const [trainingInfo, setTrainingInfo] = useState({})
    const {training_id: trainingId} = useParams() 
    const router = useNavigate()

    function getTraining(trainingId) {
        activebite.get('/trainings/training', {
            params: {
                training_id: trainingId
            }
        })
        .then(result => {
            if (!result.data){
                router('/404')
            }
            setTrainingInfo(result.data)
        })
    }

    function rateTraining(trainingId, rate) {
        activebite.post('/trainings/training/rate', {
            training_id: trainingId,
            rate
        }, {withCredentials: true})
        .then(() => {
            setTrainingInfo({...trainingInfo, dislike: false, like: false, [rate]: !trainingInfo[rate]})
        })
    }

    useEffect(() => {
        getTraining(trainingId)
    }, [])

    return (
        <div>
            {trainingInfo.training &&
            <>
                <div className='training_header'>
                    <img className='training_image' src={trainingInfo.training.img} alt="" />
                    <div>
                        <h2 className='training_title'>{trainingInfo.training.title}</h2>
                        <div className='training_button'>
                            <button className={`action_button ${trainingInfo.favorite ? 'active' : ''}`}>В избранное</button>
                            <button 
                                className={`action_button ${trainingInfo.like ? 'active' : ''}`}
                                onClick={() => rateTraining(trainingId, 'like')}
                            >Лайк</button>
                            <button 
                                className={`action_button ${trainingInfo.dislike ? 'active' : ''}`}
                                onClick={() => rateTraining(trainingId, 'dislike')}
                            >Дизлайк</button>
                        </div>
                    </div>
                </div>
                <p className='training_description'>{trainingInfo.training.description}</p>
                    <ul className='list_exercises'>
                        <Exercise />
                        <Exercise />
                        <Exercise />
                        <Exercise />
                    </ul>
                <button className='start_button'>Запустить тренировку</button>
                </>
            }
        </div>
    )
}

export default Training
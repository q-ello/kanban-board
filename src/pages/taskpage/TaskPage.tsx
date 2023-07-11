import st from './TaskPage.module.scss'
import {ReactComponent as X} from '../../icons/x-thin.svg'
import Button from '../../components/ui/button/Button'
import { useNavigate } from 'react-router-dom'
import { ChangeEvent, useState } from 'react'
import { FormDataType } from '../../context/types'
import { FormDataContext } from '../../context/form-data-context'
import React, { ReactNode, useContext } from "react"

interface TaskProps {
    taskData: FormDataType
}

const TaskPage = ({taskData}: TaskProps) => {
    const {changeTaskData} = useContext(FormDataContext)

    const {name, id, description, list} = taskData
    const [descriptionValue, setDescriptionValue] = useState<string | undefined>(description)

    const navigate = useNavigate()

    const goToMain = () => {
        if (description !== descriptionValue) {
            changeTaskData({id, name, description: descriptionValue, list})
        }
        navigate('/')
    }

    const changeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setDescriptionValue(e.target.value)
    }

    return(
        <div className={st.task_page}>
            <h1 className={st.h1}>{name}</h1>
            <textarea onChange={changeDescription} className={st.textarea} value={descriptionValue} placeholder='This task has no description' autoFocus={true}/>
            <Button className={st.button} onClick={goToMain}><X className={st.x}/></Button>
        </div>
    )
}

export default TaskPage
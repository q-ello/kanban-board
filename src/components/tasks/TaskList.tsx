import st from './Task.module.scss'
import { FormDataType, FormName } from "../../context/types"
import AddCardButton from "./AddCardButton"
import { useNavigate } from "react-router-dom"

interface TaskListProps {
    name: FormName,
    data?: FormDataType[]
}

const TaskList = ({ name, data }: TaskListProps) => {
    const navigate = useNavigate()
    const handleClick = (id: string) => {
        navigate(`/tasks/${id}`)
    }
    return (
        <div className={st.tasklist}>
            <span className={st.tasklist_name}>{name}</span>
            <ul className={st.tasklist_ul}>
                {data?.map(item => {
                    return (
                        <li key={item.id} onClick={() => {handleClick(item.id)}} className={st.task}>
                            <span key={item.id}>{item.name}</span>
                        </li>
                    )
                }
                )}
            </ul>
            <AddCardButton name={name} />
        </div>
    )
}

export default TaskList
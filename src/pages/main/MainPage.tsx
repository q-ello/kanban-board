import { useContext } from "react"
import st from './MainPage.module.scss'
import { FormDataContext, lists } from "../../context/form-data-context"
import TaskList from "../../components/tasks/TaskList"

const MainPage = () => {
    const {tasks} = useContext(FormDataContext)

    return(
        <div className={st.content}>
            {lists.map((listName) => {
                const dataList = tasks.filter(task => task.list === listName)
                return(
                    <TaskList name={listName} key={listName} data={dataList}/>
                )}
                )
            }
                
        </div>
    )
}

export default MainPage
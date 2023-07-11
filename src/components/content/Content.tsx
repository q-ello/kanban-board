import { useContext, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import { FormDataContext } from "../../context/form-data-context"
import MainPage from "../../pages/main/MainPage"
import TaskPage from "../../pages/taskpage/TaskPage"


const Content = () => {
    const { tasks, getFormsData } = useContext(FormDataContext)

    useEffect(() => {
        getFormsData()
    }, [getFormsData])

    return (
        <Routes>
            <Route path='/' element={<MainPage/>} />
            {tasks.map(task => {
                const path = `/tasks/${task.id}`
                return(
                    <Route key={task.id} path={path} element={<TaskPage taskData={task}/>}/>
                )
            })}
        </Routes>
    )
}

export default Content
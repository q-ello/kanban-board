import { useContext } from "react"
import st from './Footer.module.scss'
import { FormDataContext } from "../../context/form-data-context"
import { FormName } from "../../context/types"

const Footer = () => {
    const {tasks} = useContext(FormDataContext)
    const backlog = tasks.filter(task => task.list === FormName.Backlog)
    const finished = tasks.filter(task => task.list === FormName.Finished)

    const year = new Date().getFullYear()
    
    return(
        <footer className={st.footer}>
            <span className={st.span}>Active tasks: {backlog.length}</span>
            <span className={st.span}>Finished tasks: {finished.length}</span>
            <span className={[st.span, st.credits].join(' ')}>Kanban board by Julia, {year}</span>
        </footer>
    )
}

export default Footer
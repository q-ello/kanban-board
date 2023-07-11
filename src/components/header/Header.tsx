import Navbar from "../navbar/Navbar"
import st from './Header.module.scss'

const Header = () => {
    return (
        <header className={st.header}>
            <a href="/" className={st.logo}>Awesome Kanban Board</a>
            <Navbar/>
        </header>
    )
}

export default Header
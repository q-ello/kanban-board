import { useEffect, useRef, useState } from "react"
import { ReactComponent as Avatar } from '../../icons/user-avatar.svg'
import Button from "../ui/button/Button"
import st from './Navbar.module.scss'
import {ReactComponent as Arrow} from '../../icons/arrow-down.svg'

const Navbar = () => {
    const [isOpen, setOpen] = useState<boolean>(false)
    const rootRef = useRef<HTMLElement>(null)

    const toggleOpen = () => {
        setOpen(prev => !prev)
    }

    const links = ['Profile', 'Log Out']

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (e.target instanceof Node && !rootRef.current?.contains(e.target)) {
                isOpen && 
                setOpen(false)
            }
        }

        window.addEventListener('click', handleClick)

        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, [isOpen])

    return (
        <nav className={st.nav} ref={rootRef}>
            <Button
                className={st.nav_button}
                onClick={toggleOpen}
            >
                <Avatar className={st.avatar}/>
                <Arrow className={isOpen ? st.arrow_down : st.arrow}/>
            </Button>
            <ul className={[
                st.nav_menu,
                isOpen ? st.nav_menu__open : ''
            ].filter(Boolean).join(' ')}>
                {links.map(link => <li key={link} className={st.li}><a className={st.link} href="/">{link}</a></li>)}
            </ul>
        </nav>
    )
}

export default Navbar
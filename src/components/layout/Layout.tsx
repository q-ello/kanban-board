import { ReactNode } from "react"
import st from './Layout.module.scss'

interface LayoutProps {
    HeaderComponent: ReactNode,
    ContentComponent: ReactNode,
    FooterComponent: ReactNode
}

const Layout = ({ HeaderComponent, ContentComponent, FooterComponent }: LayoutProps) => {
    return (
        <div className={st.layout}>
            {HeaderComponent}
            {ContentComponent}
            {FooterComponent}
        </div>
    )
}

export default Layout
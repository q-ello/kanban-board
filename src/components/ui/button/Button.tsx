import { ReactNode } from "react"

interface ButtonProps {
    className?: string,
    children: ReactNode,
    onClick: () => void,
    disabled?: boolean,
    testid?: string
}

const Button = ({children, onClick, className, disabled = false, testid}: ButtonProps) => {
    return(
        <button 
            disabled={disabled}
            className={className}
            onClick={onClick}
            data-testid={testid}
        >{children}</button>
    )
}

export default Button
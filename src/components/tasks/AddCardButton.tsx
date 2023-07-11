import { ChangeEvent, useContext, useRef, useState } from "react"
import st from './Task.module.scss'
import { FormDataContext } from "../../context/form-data-context"
import { FormDataType, FormName } from "../../context/types"
import Button from "../ui/button/Button"
import { ReactComponent as Plus } from '../../icons/plus.svg'
import Select from "../ui/select/Select"

interface AddCardButtonProps {
    name: FormName,
}

const AddCardButton = ({ name }: AddCardButtonProps) => {
    const { addNewTask, moveTask, getOptions } = useContext(FormDataContext)
    const [activeBtn, setActiveBtn] = useState<boolean>(false)
    const [value, setValue] = useState<string>('')
    const [selectedOption, setSelectedOption] = useState<FormDataType | null>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    const options = getOptions(name)

    const isBacklog: boolean = name === 'backlog'

    const hasNoOptions: boolean = !(isBacklog || !!options.length)
    const hasNoValue: boolean = !(!!value || !!selectedOption)

    const addCard = () => {
        setActiveBtn(prev => !prev)
    }

    const submit = () => {
        if (isBacklog) {
            addNewTask(value)
            setValue('')
        } else {
            if (!!selectedOption) {
                moveTask(name, selectedOption.id)
            }
            setSelectedOption(null)
        }
        setActiveBtn(prev => !prev)
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const handleBlur = () => {
        if (value === '') {
            setActiveBtn(prev => !prev)
        }
    }

    const handleSelectChange = (value: FormDataType) => {
        setSelectedOption(value)
    }

    return (
        <>
            {activeBtn 
                ? isBacklog
                    ? <div className={st.task}><input data-testid='input' autoFocus={true} ref={inputRef} onChange={handleInputChange} onBlur={handleBlur} className={st.input} value={value} /></div>
                    : <Select testid='select-comp' selected={selectedOption} onChange={handleSelectChange} options={options} />
                : null
            }
            {activeBtn
                ? <Button testid='button-submit' disabled={hasNoValue} onClick={submit} className={`${st.tasklist_button} ${st.tasklist_button_submit}`}>Submit</Button>
                : <Button testid="button-add-card" disabled={hasNoOptions} onClick={addCard} className={st.tasklist_button}><Plus className={st.tasklist_button_svg} />Add card</Button>
            }
        </>

    )
}

export default AddCardButton
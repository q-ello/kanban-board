import { MouseEventHandler } from "react";
import { FormDataType } from "../../../context/types";
import st from './Select.module.scss'

type OptionProps = {
    option: FormDataType;
    onClick: (value: FormDataType) => void;
};

const Option = ({option, onClick}: OptionProps) => {
    const handleClick =
        (clickedValue: FormDataType): MouseEventHandler<HTMLLIElement> =>
            () => {
                onClick(clickedValue);
            };

    return (
        <li
            className={st.option}
            value={option.id}
            onClick={handleClick(option)}
            data-testid={option.id}
        >
            {option.name}
        </li>
    );
};

export default Option
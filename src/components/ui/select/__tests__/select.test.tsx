import { fireEvent, render } from "@testing-library/react"
import Select from "../Select"
import { FormName } from "../../../../context/types"

describe('test custom select', () => {
    const options = [{
        id: '1',
        name: 'lol',
        list: FormName.InProgress
    }, {
        id: '2',
        name: 'kek',
        list: FormName.InProgress
    }
    ]

    it('should open after clicking on the menu', () => {
        const { getByTestId } = render(<Select selected={null} options={options} testid={""} />)
        const button = getByTestId('button')
        fireEvent.click(button)
        const select = getByTestId('select')
        expect(select).toBeVisible()
    })

    it('should close after clicking on the menu twice', () => {
        const { getByTestId } = render(<Select selected={null} options={options} testid={""} />)
        const button = getByTestId('button')
        fireEvent.click(button)
        const select = getByTestId('select')
        fireEvent.click(button)
        expect(select).not.toBeVisible()
    })

    
})
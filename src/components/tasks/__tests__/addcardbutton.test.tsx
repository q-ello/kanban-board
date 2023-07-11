import AddCardButton from "../AddCardButton"
import { FormName } from "../../../context/types"
import { fireEvent, render } from "@testing-library/react"

describe('testing the bottom of tasklist', () => {

    it('after clicking on add card in backlog input appears and button turns into submit', () => {
        const {getByTestId} = render(<AddCardButton name={FormName.Backlog}/>)
        const addCard = getByTestId('button-add-card')
        fireEvent.click(addCard)
        const input = getByTestId('input')
        const submit = getByTestId('button-submit')
        expect(input).toBeVisible()
        expect(submit).toBeVisible()
    })
})
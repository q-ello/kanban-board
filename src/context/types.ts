export interface FormDataType {
    name: string,
    id: string,
    description?: string,
    list: FormName
}

export enum FormName {
    Backlog = "backlog",
    Ready = "ready",
    InProgress = "in progress",
    Finished = "finished",
}

export interface FormDataContextActions {
    getFormsData: () => void,
    addNewTask: (taskName: string) => void,
    moveTask: (to: FormName, id: string) => void,
    getOptions: (to: FormName) => FormDataType[],
    changeTaskData: (task: FormDataType) => void
}

export type FormDataContextType = {
    tasks: FormDataType[]
}

export type FormContextType = FormDataContextActions & FormDataContextType
import { PropsWithChildren, createContext, useState } from "react";
import { FormContextType, FormDataContextType, FormDataType, FormName } from "./types";

export const FormDataContext = createContext<FormContextType>({
  getFormsData: () => { },
  addNewTask: (taskName: string) => { },
  moveTask: (to: FormName, id: string) => { },
  getOptions: (to: FormName) => [],
  changeTaskData: (task: FormDataType) => {},
  tasks: []
});

export const lists: FormName[] = [FormName.Backlog, FormName.Ready, FormName.InProgress, FormName.Finished]

export const FormDataContextWrapper = ({ children }: PropsWithChildren) => {
  const [forms, setFormsData] = useState<FormDataContextType>({ tasks: [] });

  const getFormsData = () => {
    const taskData = localStorage.getItem('tasks')

    const parsedData = (data: string | null) => data !== null ? JSON.parse(data) : []

    setFormsData({
      tasks: parsedData(taskData)
    })
  };

  const addNewTask = (taskName: string) => {
    const id: number = forms.tasks.length + 1
    const newTask: FormDataType = {
      id: String(id),
      name: taskName,
      list: FormName.Backlog
    }

    const newArray: FormDataType[] = [...forms.tasks, newTask]

    saveData(newArray)
  }

  const getOptions = (to: FormName) => {
    if (to === 'backlog') {
      return []
    }

    const from = lists[lists.indexOf(to) - 1]

    return forms.tasks.filter(task => task.list === from)
  }

  const updatedArray = (id: string, updatedTask: FormDataType) => [...forms.tasks.filter(a => a.id !== id), updatedTask]

  const moveTask = (to: FormName, id: string) => {
    const task = forms.tasks.find(task => task.id === id)

    if (task) {
      const movedTask = {
        id: id,
        description: task.description,
        name: task.name,
        list: to
      }

      const newArray = updatedArray(id, movedTask)
      saveData(newArray)
    }
  }

  const changeTaskData = (task: FormDataType) => {
    const updatedTask = {
      id: task.id,
      name: task.name,
      description: task.description,
      list: task.list
    }

    const newArray = updatedArray(task.id, updatedTask)
    saveData(newArray)
  }

  const saveData = (updatedData: FormDataType[]) => {
    setFormsData({tasks: updatedData})
    localStorage.setItem('tasks', JSON.stringify(updatedData))
  }

  return (
    <FormDataContext.Provider value={{ ...forms, getFormsData, addNewTask, moveTask, getOptions, changeTaskData }}>
      {children}
    </FormDataContext.Provider>
  );
}
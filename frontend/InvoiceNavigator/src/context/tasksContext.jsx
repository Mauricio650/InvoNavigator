import { useReducer, createContext } from 'react'

import { toast } from 'sonner'

export const TasksContext = createContext()

const initialState = [
]

const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case 'ADD_TASK' : {
      if (state.length >= 20) {
        toast.info('You can only have 20 tasks')
        return state
      }
      const taskClone = structuredClone(state)
      const indexTask = taskClone.findIndex(t => t.task === actionPayload)
      if (indexTask >= 0) {
        toast.info('That task is already on the list')
        return state
      }
      taskClone.push({ id: Date.now(), task: actionPayload, status: 'pending' })
      return taskClone
    }

    case 'CHANGE_STATUS_TASK' : {
      const indexTask = state.findIndex((t) => t.id === actionPayload)
      const taskClone = structuredClone(state)
      taskClone[indexTask].status = 'completed'
      return taskClone
    }

    case 'DELETE_TASK' : {
      const taskClone = structuredClone(state)
      const newClone = taskClone.filter(t => t.id !== actionPayload)

      return newClone
    }
  }

  return state
}

export function TaskProvider ({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const newTask = task => dispatch({
    type: 'ADD_TASK',
    payload: task
  })
  const changeStatusTask = id => dispatch({
    type: 'CHANGE_STATUS_TASK',
    payload: id
  })

  const deleteTask = id => dispatch({
    type: 'DELETE_TASK',
    payload: id
  })

  return (
    <TasksContext.Provider
      value={{ tasks: state, newTask, deleteTask, changeStatusTask }}
    >
      {children}
    </TasksContext.Provider>
  )
}

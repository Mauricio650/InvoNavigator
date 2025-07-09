import { useReducer, createContext } from 'react'

import { toast } from 'sonner'

export const TasksContext = createContext()

const initialState = [
  { task: 'play valorant', status: 'pending', id: Date.now() },
  { task: 'tarea21 1', status: 'completed', id: Date.now() },
  { task: 'playdasdsad', status: 'pending', id: Date.now() },
  { task: 'playddasd', status: 'pending', id: Date.now() },
  { task: 'play 4444', status: 'completed', id: Date.now() },
  { task: 'play 222', status: 'pending', id: Date.now() },
  { task: 'play ww', status: 'completed', id: Date.now() },
  { task: 'play ww', status: 'completed', id: Date.now() }
]

const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case 'ADD_TASK' : {
      if (state.length >= 10) {
        toast.info('You can only have 10 tasks')
        return state
      }
      const taskClone = structuredClone(state)
      taskClone.push(actionPayload)
      return taskClone
    }

    case 'CHANGE_STATUS_TASK' : {
      const { id, status } = actionPayload
      const indexTask = state.findIndex((t) => t.id === id)
      const taskClone = structuredClone(state)
      taskClone[indexTask].status = status === 'C' ? 'completed' : 'pending'
      return taskClone
    }

    case 'DELETE_TASK' : {
      const { id } = actionPayload
      const taskClone = structuredClone(state)
      taskClone.filter(t => t.id !== id)
      return taskClone
    }

    case 'CLEAR_TASK' : {
      return []
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
  const changeStatusTask = object => dispatch({
    type: 'CHANGE_STATUS_TASK',
    payload: object
  })

  const deleteTask = task => dispatch({
    type: 'DELETE_TASK',
    payload: task
  })

  const clearTasks = () => dispatch({
    type: 'CLEAR_TASK',
    payload: true
  })

  return (
    <TasksContext.Provider
      value={{ tasks: state, newTask, clearTasks, deleteTask, changeStatusTask }}
    >
      {children}
    </TasksContext.Provider>
  )
}

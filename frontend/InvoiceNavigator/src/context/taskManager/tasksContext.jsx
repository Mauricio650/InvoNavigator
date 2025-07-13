import { useReducer, createContext } from 'react'
import { reducer, initialState } from '../reducers/taskReducer'

export const TasksContext = createContext()

export function TaskProvider ({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const newTask = ({ task, user }) => dispatch({
    type: 'ADD_TASK',
    payload: { task, user }
  })
  const changeStatusTask = ({ id, user }) => dispatch({
    type: 'CHANGE_STATUS_TASK',
    payload: { id, user }
  })

  const deleteTask = ({ id, user }) => dispatch({
    type: 'DELETE_TASK',
    payload: { id, user }
  })

  const setInitialState = (initialState) => dispatch({
    type: 'SET_INITIAL_STATE',
    payload: initialState
  })

  return (
    <TasksContext.Provider
      value={{ tasks: state, newTask, deleteTask, changeStatusTask, setInitialState }}
    >
      {children}
    </TasksContext.Provider>
  )
}

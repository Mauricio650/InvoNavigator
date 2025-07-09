import { useContext } from 'react'
import { TasksContext } from '../../context/tasksContext'

export function useTasks () {
  const context = useContext(TasksContext)

  if (context === undefined) {
    throw new Error('useTasks must be used within a TaskProvider')
  }

  return context
}

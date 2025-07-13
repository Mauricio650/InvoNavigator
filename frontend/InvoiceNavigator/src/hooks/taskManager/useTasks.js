import { useContext, useEffect } from 'react'
import { TasksContext } from '../../context/taskManager/tasksContext'
import { useAuth } from '../auth/useAuth'

export function useTasks () {
  const context = useContext(TasksContext)
  const { setInitialState } = context
  const { user } = useAuth()

  useEffect(() => {
    const storeTasks = JSON.parse(window.localStorage.getItem('tasks' + user.user.username))
    if (!storeTasks) {
      return
    }

    if (user.user.username === storeTasks.user) {
      setInitialState(storeTasks.task)
    }
  }, [])

  if (context === undefined) {
    throw new Error('useTasks must be used within a TaskProvider')
  }

  return context
}

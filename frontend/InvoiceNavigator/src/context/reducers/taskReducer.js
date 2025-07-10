import { toast } from 'sonner'

export const initialState = []

export const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case 'ADD_TASK' : {
      const { task, user } = actionPayload
      if (state.length >= 20) {
        toast.info('You can only have 20 tasks')
        return state
      }
      const taskClone = structuredClone(state)
      const indexTask = taskClone.findIndex(t => t.task === task)
      if (indexTask >= 0) {
        toast.info('That task is already on the list')
        return state
      }
      taskClone.push({ id: Date.now(), task, status: 'pending' })
      window.localStorage.setItem('tasks' + user, JSON.stringify({ task: taskClone, user }))
      return taskClone
    }

    case 'CHANGE_STATUS_TASK' : {
      const { id, user } = actionPayload
      const indexTask = state.findIndex((t) => t.id === id)
      const taskClone = structuredClone(state)
      taskClone[indexTask].status = 'completed'
      window.localStorage.setItem('tasks' + user, JSON.stringify({ task: taskClone, user }))
      return taskClone
    }

    case 'DELETE_TASK' : {
      const { id, user } = actionPayload
      const taskClone = structuredClone(state)
      const newClone = taskClone.filter(t => t.id !== id)
      window.localStorage.setItem('tasks' + user, JSON.stringify({ task: newClone, user }))
      return newClone
    }

    case 'SET_INITIAL_STATE' : {
      return actionPayload
    }
  }

  return state
}

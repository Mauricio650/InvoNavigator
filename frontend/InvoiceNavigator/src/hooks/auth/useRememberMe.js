import { useEffect, useRef } from 'react'

export function useRememberMe () {
  const inputUsernameREF = useRef()
  const inputPasswordREF = useRef()
  const inputRememberREF = useRef()

  useEffect(() => {
    const rawData = window.localStorage.getItem('formData')
    if (rawData) {
      const parsed = JSON.parse(rawData)

      if (inputUsernameREF.current) {
        inputUsernameREF.current.value = parsed.username
        inputRememberREF.current.checked = true
      }

      if (inputPasswordREF.current) {
        inputPasswordREF.current.value = parsed.password
      }
    }
  }, [])

  return { inputPasswordREF, inputRememberREF, inputUsernameREF }
}

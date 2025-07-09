export const statusByDate = (arr = []) => {
  return arr.reduce((acc, current) => {
    if (!Object.hasOwn(acc, current.status)) {
      acc[current.status] = 0
    }

    acc[current.status] += 1
    return acc
  }, {})
}

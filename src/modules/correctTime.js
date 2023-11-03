export const correctTime = (timeInSeconds) => {
  let result = ''
  const minutes = Math.floor(timeInSeconds / 60)
  let seconds = `${Math.floor(timeInSeconds % 60)}`

  if (seconds.length === 1) {
    seconds = `${seconds}0`
  }

  result = `${minutes}:${seconds}`

  return result
}

export const correctTimeForPlayer = (timeInSeconds) => {
  let result = ''
  const minutes = Math.floor(timeInSeconds / 60)
  let seconds = `${Math.floor(timeInSeconds % 60)}`

  if (seconds.length === 1) {
    seconds = `0${Math.floor(timeInSeconds % 60)}`
  }

  result = `${minutes}:${seconds}`

  return result
}

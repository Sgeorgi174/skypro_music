function delay(interval = 5000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, interval)
  })
}

export default delay

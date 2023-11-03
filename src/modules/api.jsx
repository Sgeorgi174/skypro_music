const baseURL = 'https://skypro-music-api.skyeng.tech'

export async function getTrackList() {
  const response = await fetch(`${baseURL}/catalog/track/all/`)
  const data = await response.json()

  if (response.status !== 200) {
    throw new Error('произошла ошибка')
  }
  return data
}

export async function postRegistration({ email, password }) {
  const response = await fetch(`${baseURL}/user/signup/`, {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
      username: email,
    }),
    headers: {
      'content-type': 'application/json',
    },
  })

  const data = await response.json()

  switch (response.status) {
    case 201:
      return data
    case 400:
      throw new Error(`${data.email}`)
    case 500:
      throw new Error('Сервер сломался')
    default:
      throw new Error('Неизвестная ошибка, попробуйте позже')
  }
}

export async function postLogin({ email, password }) {
  const response = await fetch(`${baseURL}/user/login/`, {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      'content-type': 'application/json',
    },
  })

  const data = await response.json()

  switch (response.status) {
    case 200:
      return data
    case 400:
      throw new Error(data.email)
    case 401:
      throw new Error(data.detail)
    case 500:
      throw new Error('Сервер сломался')
    default:
      throw new Error('Неизвестная ошибка, попробуйте позже')
  }
}

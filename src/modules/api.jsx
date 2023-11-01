const baseURL = 'https://skypro-music-api.skyeng.tech'

export async function getTrackList() {
  const response = await fetch(`${baseURL}/catalog/track/all/`)
  const data = await response.json()

  if (response.status !== 200) {
    throw new Error('произошла ошибка')
  }
  return data
}

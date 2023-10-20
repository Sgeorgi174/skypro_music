export async function getTrackList() {
  const response = await fetch(
    'https://skypro-music-api.skyeng.tech/catalog/track/all/',
  )
  const data = await response.json()

  if (response.status !== 200) {
    throw new Error('произошла ошибка')
  }
  return data
}

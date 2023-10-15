import { useParams } from 'react-router-dom'

export function MyCategory() {
  const params = useParams().id
  return <div>{params}</div>
}

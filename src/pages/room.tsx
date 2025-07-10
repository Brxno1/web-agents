import { Navigate, useParams, useSearchParams } from 'react-router-dom'

export function Room() {
  const { id } = useParams<{ id: string }>()
  const [searchParams] = useSearchParams()

  if (!id) {
    return <Navigate replace to="/" />
  }

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <h1 className="text-white">Rooms details</h1>
      <h2 className="text-white">Room name: {searchParams.get('name')}</h2>
      <h2 className="text-white">Room id: {id}</h2>
    </div>
  )
}

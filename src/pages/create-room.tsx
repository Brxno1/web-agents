import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { getRooms } from '@/http/rooms'
import { queryKeys } from '@/lib/query-client'

export function CreateRoom() {
  const { data: rooms, isLoading } = useQuery({
    queryKey: queryKeys.rooms.all,
    queryFn: getRooms,
    staleTime: 1000 * 60 * 5,
  })

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-white">Let me Ask</h1>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          rooms?.map((room) => (
            <div key={room.id}>
              <Link
                className="underline"
                to={`/room/${room.id}?name=${room.name}`}
              >
                {room.name}
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

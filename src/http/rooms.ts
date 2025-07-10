import { api } from '@/lib/axios'
import type { GetRoomsResponse } from '@/types/rooms'

export async function getRooms(): Promise<GetRoomsResponse[]> {
  const response = await api.get('/rooms')

  return response.data as GetRoomsResponse[]
}

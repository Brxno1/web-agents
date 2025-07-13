import { api } from '@/lib/axios'
import type { Room } from '@/types/rooms'

export async function getRooms(
  page?: string,
  limit?: string,
): Promise<Room[]> {
  const { data } = await api.get<Room[]>(`/rooms?page=${page}&limit=${limit}`)

  return data
}

export async function createRoom(data: { name: string, description?: string }) {
  const { data: response } = await api.post<{ roomId: string }	>('/rooms', data)

  return response
}

export async function getRoomById(id: string | undefined) {
  if (!id) {
    throw new Error('Room ID is required')
  }

  const { data } = await api.get<Room>(`/rooms/${id}`)

  return data
}
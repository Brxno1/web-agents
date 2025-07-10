import { getRooms } from '@/http/rooms'

export async function Initializer() {
  const rooms = await getRooms()

  return rooms
}
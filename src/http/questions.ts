import { api } from "@/lib/axios"
import type { Question } from "@/types/question"

export async function getQuestionsByRoomId(roomId: string) {
  const { data } = await api.get<Question[]>(`/rooms/${roomId}/questions`)

  return data
}

export async function createQuestion(roomId: string, question: string) {
  const { data } = await api.post<Question>(`/rooms/${roomId}/questions`, {
    question,
  })

  return data
}
import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/axios";

type TranscriptionResponse = {
  transcription: string
  embedding: number[]
}

export function useTranscribeAudio(roomId: string) {
  return useMutation({
    mutationKey: ['transcribe-audio', roomId],
    mutationFn: async (audio: Blob): Promise<TranscriptionResponse> => {
      const formData = new FormData()
      formData.append('audio', audio, 'audio.webm')

      const { data } = await api.post(`/rooms/${roomId}/audio`, formData)

      return data
    }
  })
}
import { Navigate, useParams } from 'react-router-dom'
import { toast } from 'sonner'
import { AIVoiceInput } from '@/components/ui/ai-voice-input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useTranscribeAudio } from '@/hooks/use-transcribe-audio'

export function RecordRoomAudio() {
  const { roomId } = useParams<{ roomId: string }>()
  // biome-ignore lint/style/noNonNullAssertion: roomId is not null
  const { mutateAsync: transcribeAudio, data } = useTranscribeAudio(roomId!)

  if (!roomId) {
    return <Navigate replace to="/" />
  }

  const handleStop = async (audio: Blob | null) => {
    if (!audio) return

    try {
      await transcribeAudio(audio)
      toast('Áudio enviado com sucesso!', { position: 'top-center' })
    } catch (_error) {
      toast.error('Erro ao enviar áudio', { position: 'top-center' })
    }
  }

  return (
    <div className="h-screen flex flex-col items-center space-y-2 justify-center">
      <AIVoiceInput onStop={handleStop} />
      {data?.transcription && (
        <Card className="w-full max-w-2xl space-y-4 mt-4">
          <CardHeader className="flex items-center justify-center">
            <CardTitle>Transcrição</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-4">
                <p className="text-sm text-zinc-50 leading-relaxed">
                  {data.transcription}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
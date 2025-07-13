import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import { createQuestion, getQuestionsByRoomId } from '@/http/questions'
import { queryKeys } from '@/lib/query-client'

export function useGetQuestionsByRoomId(roomId: string) {
  return useQuery({
    queryKey: queryKeys.questions.list(roomId),
    queryFn: () => getQuestionsByRoomId(roomId),
  })
}

export function useCreateQuestion(roomId: string, resetForm?: () => void) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: queryKeys.questionMutations.create,

    mutationFn: ({ question }: { question: string }) =>
      createQuestion(roomId, question),
    onSuccess: () => {
      toast.success("Pergunta criada com sucesso!")
      resetForm?.()
      queryClient.invalidateQueries({ queryKey: queryKeys.questions.list(roomId) })
    },
    onError: () => {
      toast.error("Erro ao criar pergunta")
    },
  })
}
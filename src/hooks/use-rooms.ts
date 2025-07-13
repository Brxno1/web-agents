import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import { createRoom, getRooms } from '@/http/rooms'
import { queryKeys } from '@/lib/query-client'


export function useGetRooms({ page, limit }: { page?: string, limit?: string }) {
  return useQuery({
    queryKey: queryKeys.rooms.all,
    queryFn: () => getRooms(page, limit),
  })
}

export function useCreateRoom(resetForm?: () => void) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createRoom,
    mutationKey: queryKeys.roomMutations.create,
    onSuccess: () => {
      toast.success("Sala criada com sucesso!")
      resetForm?.()
      queryClient.invalidateQueries({ queryKey: queryKeys.rooms.all })
    },
    onError: () => {
      toast.error("Erro ao criar sala")
    },
  })
}
import { QueryClient } from '@tanstack/react-query'

export function createQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
        refetchOnReconnect: true,
        staleTime: 1000 * 60 * 5, // 5 minutes
        retry: 3,
      },
    },
  })
}

export const queryKeys = {
  rooms: {
    all: ['rooms'] as const,
    lists: () => [...queryKeys.rooms.all, 'list'] as const,
    list: (filters: string) =>
      [...queryKeys.rooms.lists(), { filters }] as const,
    details: () => [...queryKeys.rooms.all, 'detail'] as const,
    detail: (id: string) => [...queryKeys.rooms.details(), id] as const,
  },

  questions: {
    all: ['questions'] as const,
    lists: () => [...queryKeys.questions.all, 'list'] as const,
    list: (filters: string) =>
      [...queryKeys.questions.lists(), { filters }] as const,
  },

  questionMutations: {
    create: ['create-question'] as const,
  },

  roomMutations: {
    create: ['create-room'] as const,
    update: ['update-room'] as const,
    delete: ['delete-room'] as const,
    deleteById: (id: string) =>
      [...queryKeys.roomMutations.delete, id] as const,
    markAsDone: ['mark-room-done'] as const,
    cancel: ['cancel-room'] as const,
  },

  chats: {
    all: ['chats'] as const,
    lists: () => [...queryKeys.chats.all, 'list'] as const,
    list: (filters: string) =>
      [...queryKeys.chats.lists(), { filters }] as const,
    details: () => [...queryKeys.chats.all, 'detail'] as const,
    detail: (id: string) => [...queryKeys.chats.details(), id] as const,
  },

  chatMutations: {
    create: ['create-chat'] as const,
    update: ['update-chat'] as const,
    delete: () => ['delete-chat'] as const,
    deleteById: (id: string) =>
      [...queryKeys.chatMutations.delete(), id] as const,
  },

  user: {
    all: ['user'] as const,
    profile: () => [...queryKeys.user.all, 'profile'] as const,
    session: () => [...queryKeys.user.all, 'session'] as const,
  },

  profile: {
    all: ['profile'] as const,
    update: () => [...queryKeys.profile.all, 'update'] as const,
  },
} as const

export const roomInvalidations = {
  all: () => queryKeys.rooms.all,
  lists: () => queryKeys.rooms.lists(),
  detail: (id: string) => queryKeys.rooms.detail(id),
}

export const chatInvalidations = {
  all: () => queryKeys.chats.all,
  lists: () => queryKeys.chats.lists(),
}

export const profileInvalidations = {
  all: () => queryKeys.profile.all,
  update: () => queryKeys.profile.update(),
}

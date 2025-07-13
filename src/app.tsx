'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toaster } from 'sonner'
import { createQueryClient } from '@/lib/query-client'
import { CreateRoom } from '@/pages/create-room'
import { NotFound } from '@/pages/not-found'
import { Room } from '@/pages/room'
import { RecordRoomAudio } from './pages/record-room-audio'

const client = createQueryClient()

export function App() {
  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route element={<CreateRoom />} index />
          <Route element={<Room />} path="/room/:roomId" />
          <Route element={<RecordRoomAudio />} path="/room/:roomId/audio" />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" visibleToasts={2} closeButton />
    </QueryClientProvider>
  )
}

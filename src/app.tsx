'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createQueryClient } from '@/lib/query-client'
import { CreateRoom } from '@/pages/create-room'
import { Room } from '@/pages/room'

const client = createQueryClient()

export function App() {
  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route element={<CreateRoom />} index />
          <Route element={<Room />} path="/room/:id" />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

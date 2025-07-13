'use client'

import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useGetRooms } from '@/hooks/use-rooms'
import { formatRelativeDate } from '@/utils/format'

export function RoomList() {
  const {
    data: rooms,
    isLoading,

  } = useGetRooms({
    page: '',
    limit: '',
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Salas recentes</CardTitle>
        <CardDescription>
          Aqui você pode ver as salas recentes criadas.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 max-h-[70vh] overflow-y-auto">
        {isLoading ? (
          <span className="mx-auto text-muted-foreground text-sm">
            Carregando salas...
          </span>
        ) : (
          <div className="flex flex-col gap-3">
            {rooms?.map((room) => (
              <Link
                className="group flex items-center justify-between rounded-lg border border-input p-3 transition-colors hover:bg-accent/40"
                key={room.id}
                to={`/room/${room.id}`}
              >
                <div className="flex flex-1 flex-col gap-1">
                  <h3 className="font-medium text-lg">{room.name}</h3>

                  <div className="flex items-center gap-2">
                    <Badge className="text-xs group-hover:border-input group-hover:border" variant="secondary">
                      {formatRelativeDate(room.createdAt)}
                    </Badge>
                    <Badge className="text-xs group-hover:border-input group-hover:border" variant="secondary">
                      {room.questionsCount} perguntas
                    </Badge>
                  </div>
                </div>

                <Button
                  className="gap-1 text-muted-foreground text-sm"
                  variant="ghost"
                >
                  Entrar <ArrowRight size={16} />
                </Button>
              </Link>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

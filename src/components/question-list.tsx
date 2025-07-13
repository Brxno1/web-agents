import { useGetQuestionsByRoomId } from '@/hooks/use-questions'
import { QuestionItem } from './question-item'
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'

function EmptyQuestions() {
  return (
    <Card className="text-center py-12 bg-zinc-900 rounded-lg p-4">
      <CardHeader className="space-y-1.5">
        <CardTitle>
          Nenhuma pergunta ainda
        </CardTitle>
        <CardDescription>
          Seja o primeiro a fazer uma pergunta!
        </CardDescription>
      </CardHeader>
    </Card>
  )
}

export function QuestionList({ roomId }: { roomId: string }) {
  const { data: questions } = useGetQuestionsByRoomId(roomId)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-2xl text-foreground">
          Perguntas & Respostas
        </h2>
      </div>

      {questions?.length ? (
        questions.map((question) => (
          <QuestionItem key={question.id} question={question} />
        ))
      ) : (
        <EmptyQuestions />
      )}
    </div>
  )
}
export type Question = {
  roomId: string
  question: string
  id: string
  createdAt: Date
  updatedAt: Date
  answer: string
}

export type QuestionItemProps = {
  question: Question
}
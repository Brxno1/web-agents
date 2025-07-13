import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useCreateRoom } from "@/hooks/use-rooms"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { z } from "zod/v4"

const createRoomSchema = z.object({
  name: z.string()
    .trim()
    .refine(val => val.replace(/\s/g, '').length >= 3, {
      message: "Nome deve ter pelo menos 3 letras"
    }),
  description: z.string().optional(),
})

type createRoomFormData = z.infer<typeof createRoomSchema>

export function CreateRoomForm() {
  const form = useForm<createRoomFormData>({
    resolver: zodResolver(createRoomSchema),
    defaultValues: { name: "", description: "" },
  })

  const { mutateAsync: createRoom, isPending } = useCreateRoom(form.reset)

  const onSubmit = async ({ name, description }: createRoomFormData) => {
    await createRoom({ name, description })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Criar sala</CardTitle>
        <CardDescription>
          Crie uma sala para começar a fazer perguntas para a IA.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="gap-2.5">
                  <FormLabel>Nome da sala</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite o nome da sala..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="gap-2.5">
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <Textarea className="max-h-28" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? <Loader2 className="animate-spin" /> : "Criar sala"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

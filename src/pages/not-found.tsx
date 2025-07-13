import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-lg">Página não encontrada</p>
      <Link to="/" className="text-blue-500">Voltar para a página inicial</Link>
    </div>
  )
}
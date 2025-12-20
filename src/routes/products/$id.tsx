import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="font-black text-2xl">
        Hello <i>Products {id}</i> dynamic page!
      </h1>
    </div>
  )
}

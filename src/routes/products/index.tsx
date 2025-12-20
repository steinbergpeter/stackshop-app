import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="font-black text-2xl">
        Hello <i>Products</i> index page!
      </h1>
      <Link
        className="bg-amber-500 px-2 py-1 rounded m-4"
        to="/products/$id"
        params={{ id: 'Peter' }}
      >
        Go to Peter
      </Link>
      <Link
        className="bg-amber-500 px-2 py-1 rounded m-4"
        to="/products/$id"
        params={{ id: 'Leslie' }}
      >
        Go to Leslie
      </Link>
    </div>
  )
}

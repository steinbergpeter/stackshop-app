import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="">
      Main Page <Link to="/products">Go to Products </Link>
    </div>
  )
}

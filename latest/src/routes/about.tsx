import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/about"! HELLO WORLD ABOUT PAGE</div>
}

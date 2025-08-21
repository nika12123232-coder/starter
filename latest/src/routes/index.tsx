import { createFileRoute } from '@tanstack/react-router'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Sponsor } from '@/components/sponsor'
import { Step } from '@/components/step'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Sponsor />
      <Step />
    </>
  )
}

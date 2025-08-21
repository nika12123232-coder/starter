import { Container } from './ui/container'

export const Step = () => {
  const steps = [1, 2, 3]
  return (
    <section>
      <Container className="flex flex-col md:flex-row justify-between py-52 gap-10">
        {steps.map((item) => (
          <div
            className="bg-white rounded-md shadow-2xl shadow-amber-600 p-20"
            key={item}
          >
            <h2 className="step-title">Step {item}</h2>
            <p className="text-blue-600 sm:bg-green-600 lg:bg-green-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              nostrum inventore temporibus fugit, natus nobis dolorum ex
              adipisci, iste aperiam sed dolor minus, dignissimos maxime
              blanditiis debitis soluta velit necessitatibus.
            </p>
          </div>
        ))}
      </Container>
    </section>
  )
}

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export function CallToAction() {
  const gradientStyle = {
    backgroundImage:
      "linear-gradient(to right top, #cad2c5, #b4c1b2, #9eb0a0, #879f90, #708f81, #618379, #527670, #456a68, #3e5f61, #385459, #334950, #2f3e46)",
  };

  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
      style={gradientStyle}
    >
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Get started today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            If you are a creator or wanting to learn an instrument we have the best platform to suit
            your needs.
          </p>
          <Button href="/register" color="white" className="mt-10">
            Get 6 months free
          </Button>
        </div>
      </Container>
    </section>
  );
}

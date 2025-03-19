import { About } from "./_componets/about";
import { Hero } from "./_componets/hero";
import { Services } from "./_componets/services";

export default function Home() {
  return(
    <main>
      <Hero />
      <About />
      <Services />
    </main>
  )
}
import { About } from "./_componets/about";
import { Depoimentos } from "./_componets/depoimentos";
import { Hero } from "./_componets/hero";
import { Services } from "./_componets/services";

export default function Home() {
  return(
    <main>
      <Hero />
      <About />
      <Services />
      <Depoimentos />
    </main>
  )
}
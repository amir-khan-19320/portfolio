import { About } from "@/components/About";
import { AiTools } from "@/components/AiTools";
import { Certs } from "@/components/Certs";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <About />
      <Experience />
      <Work />
      <Skills />
      <Certs />
      <AiTools />
      <Contact />
    </main>
  );
}

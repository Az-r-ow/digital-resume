import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Publications } from "@/components/publications";
import { Navigation } from "@/components/navigation";
import { Experience } from "@/components/experience";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Experience />
      <Projects />
      <Publications />
    </main>
  );
}

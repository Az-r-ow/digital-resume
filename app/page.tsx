import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Publications } from "@/components/publications";
import { Navigation } from "@/components/navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Projects />
      <Publications />
    </main>
  );
}

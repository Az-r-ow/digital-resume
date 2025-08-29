import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { getFeaturedProjects, siteConfig } from "@/data";
import Link from "next/link";

export function Projects() {
  const projects = getFeaturedProjects();

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Featured Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50"
            >
              <div className="relative">
                <img
                  src={project.imageUrl || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                {project.event && (
                  <div className="absolute top-3 right-3">
                    {project.eventUrl ? (
                      <Link
                        href={project.eventUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Badge className="bg-primary text-primary-foreground text-xs shadow-md capitalize">
                          {project.event}
                        </Badge>
                      </Link>
                    ) : (
                      <Badge className="bg-primary text-primary-foreground text-xs shadow-md capitalize">
                        {project.event}
                      </Badge>
                    )}
                  </div>
                )}
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors text-balance">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  {project.githubUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 bg-transparent"
                      url={project.githubUrl}
                    >
                      <SiGithub className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90"
                      url={project.liveUrl}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            className="bg-primary hover:bg-primary/90"
            url={siteConfig.social.github}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}

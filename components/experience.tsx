import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { getFeaturedExperiences } from "@/data";

export function Experience() {
  const experiences = getFeaturedExperiences();

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Industry Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional experience in data science, analytics, and research
            across various industries and organizations.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((experience) => (
            <Card
              key={experience.id}
              className="hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50"
            >
              <CardHeader>
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-lg overflow-hidden border border-border bg-background p-2">
                      <Image
                        src={
                          experience.logo ||
                          "/placeholder.svg?height=64&width=64&query=company logo"
                        }
                        alt={`${experience.company} logo`}
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl mb-1">
                          {experience.title}
                        </CardTitle>
                        <CardDescription className="text-lg font-medium text-primary mb-2">
                          {experience.company}
                        </CardDescription>
                        {experience.location && (
                          <CardDescription className="text-sm text-muted-foreground mb-2">
                            {experience.location}
                          </CardDescription>
                        )}
                      </div>
                      <div className="flex flex-col gap-2">
                        <Badge variant="outline" className="text-sm w-fit">
                          {experience.startDate} - {experience.endDate}
                        </Badge>
                        <Badge variant="secondary" className="text-xs capitalize w-fit">
                          {experience.type.replace('-', ' ')}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {experience.description}
                </p>
                
                {experience.achievements && experience.achievements.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Key Achievements:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {experience.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {experience.technologies && experience.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FileText } from "lucide-react";
import { publications } from "@/data";
import { formatAuthors } from "@/lib/format-authors";
import Image from "next/image";

export function Publications() {
  return (
    <section id="publications" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Publications & Research
          </h2>
        </div>

        <div className="space-y-6">
          {publications.map((publication, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50"
            >
              <CardHeader>
                <div className="flex flex-col sm:flex-row gap-4">
                  {publication.image && (
                    <div className="flex-shrink-0">
                      <Image
                        src={publication.image || "/placeholder.svg"}
                        alt={`Visualization for ${publication.title}`}
                        width={120}
                        height={80}
                        className="rounded-lg object-cover border border-border"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2 text-balance hover:text-primary transition-colors">
                          {publication.title}
                        </CardTitle>
                        <CardDescription className="text-base font-medium text-foreground/80 mb-3">
                          {publication.journal}
                        </CardDescription>
                        <CardDescription className="text-muted-foreground mb-2">
                          {formatAuthors(publication.authors)}
                        </CardDescription>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="outline" className="text-xs">
                            {publication.type}
                          </Badge>
                          <Badge
                            variant={
                              publication.status === "published"
                                ? "default"
                                : "secondary"
                            }
                            className="text-xs"
                          >
                            {publication.status}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {publication.year}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-2">
                <div>
                  {publication.abstract && (
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {publication.abstract}
                    </p>
                  )}
                </div>

                {!publication.url && !publication.doi ? (
                  <p className="text-sm text-muted-foreground italic">
                    Links will be available once the paper is published.
                  </p>
                ) : (
                  <div className="flex flex-col sm:flex-row gap-2 pt-2">
                    {publication.url && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 sm:flex-none bg-transparent"
                        url={publication.url}
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        Read Paper
                      </Button>
                    )}
                    {publication.doi && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 sm:flex-none bg-transparent"
                        url={`https://doi.org/${publication.doi}`}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        DOI: {publication.doi}
                      </Button>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* todo: enable this when there's a full list to link to display */}
        {/* <div className="text-center mt-12">
          <Button className="bg-primary hover:bg-primary/90">
            <ExternalLink className="w-4 h-4 mr-2" />
            View Full Publication List
          </Button>
        </div> */}
      </div>
    </section>
  );
}

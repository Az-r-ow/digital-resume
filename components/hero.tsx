import { Button } from "@/components/ui/button";
import { Linkedin, FileText, Mail } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { siteConfig } from "@/data";

export function Hero() {
  return (
    <section id="about" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
                Hi, I'm <span className="text-primary">{siteConfig.name}</span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-muted-foreground font-medium">
                {siteConfig.title}
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start gap-4 lg:hidden">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-primary/20 shadow-lg">
                  <img
                    src="/profile_pic.png"
                    alt={`${siteConfig.name} - ${siteConfig.title}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed flex-1">
                {siteConfig.bio}
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl hidden lg:block">
              {siteConfig.bio}
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-md">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">
                  {siteConfig.social.email}
                </span>
              </div>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                url="/resume.pdf"
                asChild
              >
                <FileText className="w-4 h-4 mr-2" />
                Resume
              </Button>
              <Button
                variant="outline"
                url={siteConfig.social.github}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <SiGithub className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button
                variant="outline"
                url={siteConfig.social.linkedin}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>

          <div className="hidden lg:flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img
                  src="/profile_pic.png"
                  alt={`${siteConfig.name} - ${siteConfig.title}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-medium shadow-lg">
                {siteConfig.status}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

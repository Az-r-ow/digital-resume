"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./fun.module.css";
import { funProjects } from "@/data";

export default function FunPage() {
  const projects = funProjects;
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Apply fun page font size to html element
    document.documentElement.classList.add('fun-page');
    
    // Cleanup function to remove the class when leaving the page
    return () => {
      document.documentElement.classList.remove('fun-page');
    };
  }, []);

  const toggleProject = (index: number) => {
    setVisibleProjects((prev) => {
      const newState = prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index];
      return newState;
    });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.container}>
      <header>
        <div className={styles.animatedTitle}>
          <h1>Hello There !</h1>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/">← Back</Link>
            </li>
            <li>
              <a
                href="#projects-section"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("projects-section");
                }}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#socials-section"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("socials-section");
                }}
              >
                Socials
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        {/* About Me Section */}
        <section className={styles.section}>
          <h2>About Me</h2>
          <div className={styles.unfoldingSection} id="about-me-section">
            <Image src="/profile_pic.png" alt="Me" width={80} height={80} />
            <p>
              I am <strong>Antoine Azar</strong> an MS student specializing in
              Big Data and AI at{" "}
              <a
                href="https://www.epitech.eu"
                target="_blank"
                rel="noopener noreferrer"
              >
                EPITECH
              </a>
              . Lately, I have been diving into computer vision and exploring
              how it can solve real world problems. In parallel, I am building a
              recommendation-system for a startup called{" "}
              <a
                href="https://booklink.fr"
                target="_blank"
                rel="noopener noreferrer"
              >
                Booklink
              </a>
              , which has been an exciting hands-on experience.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section
          className={`${styles.section} ${styles.projectsSection}`}
          id="projects-section"
        >
          <h2>Projects</h2>
          {projects.map((project, index) => (
            <div
              key={index}
              className={styles.projectDiv}
              onClick={(e) => {
                toggleProject(index);
              }}
            >
              <h3>{project.name}</h3>
              <div
                className={`${styles.information} ${
                  visibleProjects.includes(index) ? styles.visible : ""
                }`}
              >
                <div className={styles.technos}>
                  {project.technos.map((tech, techIndex) => (
                    <span key={techIndex}>
                      <Image
                        src={tech}
                        width={50}
                        height={50}
                        alt="Technology logo"
                      />
                    </span>
                  ))}
                </div>
                <p
                  dangerouslySetInnerHTML={{ __html: project.description }}
                ></p>
                <div className={styles.playBtnDiv}>
                  <span>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/play_btn.png"
                        height={50}
                        width={150}
                        alt="play_btn"
                      />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Socials Section */}
        <section className={`${styles.section} ${styles.socialsSection}`}>
          <h2>Socials</h2>
          <div className={styles.socialsDiv} id="socials-section">
            <a
              href="https://linkedin.com/in/antoine-azar-01"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkedin-logo.svg"
                alt="linkedIn-logo"
                width={100}
                height={100}
              />
            </a>
            <a
              href="https://github.com/Az-R-ow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/github-logo.svg"
                alt="github-logo"
                width={100}
                height={100}
              />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "ECommerce Website",
      subtitle: "Capstone Project",
      description:
        "Engineered a scalable microservices-based eCommerce platform on AWS with Java Spring Boot, achieving 99.9% uptime and 90% faster API responses.",
      technologies: [
        "Java Spring Boot",
        "Kafka",
        "Redis",
        "Elasticsearch",
        "Kubernetes",
        "AWS",
      ],
      highlights: [
        "99.9% uptime with microservices architecture",
        "90% reduction in API response times",
        "Event-driven email notification system",
        "Advanced product discovery features",
      ],
      github: "https://github.com/NailaFatima/EcommerceWebsite_CapstoneProject",
      demo: null,
    },
    {
      title: "Portal for Residential Society",
      subtitle: "Full Stack Project",
      description:
        "Developed a comprehensive portal using HTML5, CSS, JavaScript, MySQL, and PHP, enhancing member interaction by 40% with dual Admin and Member components.",
      technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
      highlights: [
        "40% increase in member interaction",
        "Dual role management (Admin & Member)",
        "Notification & User Management systems",
        "Fully responsive design",
      ],
      github: "https://github.com/NailaFatima/Portal_for_Residential_Society",
      demo: null,
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-secondary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="p-6 md:p-8 gradient-card shadow-elegant hover:shadow-glow transition-all duration-300 flex flex-col animate-slide-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-secondary font-medium">
                  {project.subtitle}
                </p>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">
                  Key Highlights:
                </h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="text-accent mt-0.5">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-secondary/10 text-secondary hover:bg-secondary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 mt-auto pt-4">
                <Button
                  variant="default"
                  size="sm"
                  className="flex-1"
                  asChild
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </a>
                </Button>
                {project.demo && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

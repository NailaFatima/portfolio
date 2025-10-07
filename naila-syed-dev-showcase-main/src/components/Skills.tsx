import { Code2, Database, Cloud, GitBranch, Zap, Server } from "lucide-react";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      skills: ["ReactJS", "JavaScript", "HTML5", "CSS3", "Responsive Design"],
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Java Spring Boot", "PHP", "CodeIgniter", "Node.js", "REST APIs"],
    },
    {
      title: "Database",
      icon: Database,
      skills: ["MySQL", "Redis", "Elasticsearch", "Firebase"],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS", "Kubernetes", "Docker", "CI/CD"],
    },
    {
      title: "Real-time Tech",
      icon: Zap,
      skills: ["WebSockets", "WebRTC", "Agora SDK", "Kafka"],
    },
    {
      title: "Version Control",
      icon: GitBranch,
      skills: ["Git", "GitHub", "Collaboration", "Code Review"],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="text-secondary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="p-6 gradient-card shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <category.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

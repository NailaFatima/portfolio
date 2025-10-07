import { Code2, Database, Layers, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const About = () => {
  const techStack = [
    { name: "ReactJS", icon: Code2, category: "Frontend" },
    { name: "Java Spring Boot", icon: Layers, category: "Backend" },
    { name: "PHP & CodeIgniter", icon: Code2, category: "Backend" },
    { name: "MySQL", icon: Database, category: "Database" },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-secondary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: About Text */}
          <div className="space-y-6 animate-slide-up">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm <span className="text-foreground font-semibold">Naila Syed</span>, 
              a passionate Full Stack Developer based in{" "}
              <span className="text-foreground font-semibold">Pune, India</span>, 
              with hands-on experience in building scalable web applications using 
              ReactJS, Java Spring Boot, PHP, MySQL, and CodeIgniter.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I enjoy solving technical challenges and turning client requirements 
              into seamless digital experiences. With a strong foundation in both 
              frontend and backend technologies, I specialize in creating 
              responsive, efficient, and user-friendly applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently expanding my expertise through{" "}
              <span className="text-foreground font-semibold">Scaler Academy</span>, 
              focusing on advanced Data Structures, Algorithms, System Design, 
              and modern development practices.
            </p>

            <div className="pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90"
                asChild
              >
                <a 
                  href="/Resume_Naila_Syed.pdf" 
                  download="Naila_Syed_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Right: Tech Stack Cards */}
          <div className="grid grid-cols-2 gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {techStack.map((tech, index) => (
              <Card
                key={tech.name}
                className="p-6 gradient-card shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 bg-secondary/10 rounded-full">
                    <tech.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {tech.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {tech.category}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

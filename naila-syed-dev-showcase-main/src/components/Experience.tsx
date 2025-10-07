import { Briefcase, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      company: "ITTRP Pvt Ltd",
      location: "Pune",
      role: "FullStack Engineer",
      duration: "Jan 2023 - Jun 2023",
      highlights: [
        "Developed and integrated a chat module with 7+ advanced features using WebSockets, enhancing user engagement",
        "Achieved 99% system uptime and 95% issue resolution rate through prompt troubleshooting",
        "Optimized code for school management system, increasing development efficiency by 20%",
        "Implemented version control using Git, streamlining development processes",
      ],
    },
    {
      company: "Techwink Services",
      location: "Remote",
      role: "FullStack Engineer",
      duration: "Apr 2022 - Jan 2023",
      highlights: [
        "Built live video applications using WebRTC, significantly enhancing user engagement",
        "Integrated Agora SDK for video chat and conference calls, boosting communication efficiency by 30%",
        "Implemented Firebase for authentication and real-time messaging, increasing user retention by 25%",
        "Contributed to 15% increase in project acquisition through strategic bid proposals",
      ],
    },
    {
      company: "Dr. Patkar's Healthcare India",
      location: "Freelance",
      role: "Frontend Engineer",
      duration: "Apr 2022 - Oct 2022",
      highlights: [
        "Engineered well-structured code using web development best practices, reducing bug reports by 30%",
        "Designed responsive layouts and user interfaces, enhancing user engagement by 25%",
        "Configured MySQL backend database, improving data retrieval speed by 40%",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Work <span className="text-secondary">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={exp.company}
              className="p-6 md:p-8 shadow-elegant hover:shadow-glow transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="h-5 w-5 text-secondary" />
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                      {exp.role}
                    </h3>
                  </div>
                  <p className="text-lg font-semibold text-primary">
                    {exp.company}
                  </p>
                  <p className="text-sm text-muted-foreground">{exp.location}</p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-medium">{exp.duration}</span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="text-secondary mt-1.5 flex-shrink-0">▸</span>
                    <span className="leading-relaxed">{highlight}</span>
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

export default Experience;

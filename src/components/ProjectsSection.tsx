import { ExternalLink, BarChart3, Shield, Calendar, Users } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Coal Mining - CMSMS",
    description: "A secure and user-friendly dashboard for coal mining data visualization with interactive pie charts that improved data comprehension by 35%.",
    icon: BarChart3,
    tech: ["React.js", "Chakra UI", "React Hook Form", "Yup"],
    highlights: [
      "35% improvement in data comprehension",
      "99% data accuracy in submissions",
      "20% reduction in bounce rates",
    ],
  },
  {
    title: "EPFO Recruitment Portal",
    description: "Role-based authentication system with secure login and registration pages, supporting 3 core user roles with enhanced data integrity.",
    icon: Shield,
    tech: ["React.js", "React Hook Form", "Yup", "Role-based Auth"],
    highlights: [
      "Multi-role authentication",
      "Enhanced security measures",
      "Improved user confidence",
    ],
  },
  {
    title: "Leave Management System - Offtime",
    description: "Comprehensive leave management system with role-based authentication, holiday calendar, and streamlined approval workflows for government employees.",
    icon: Calendar,
    tech: ["React.js", "Calendar Integration", "Role-based System"],
    highlights: [
      "Gujarat Government holiday calendar",
      "Sandwich leave system",
      "Admin reporting interface",
    ],
    link: "https://gatishakti.ncog.gov.in/offtime",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real-world applications I've built that solve complex problems and deliver 
              measurable results.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group glass rounded-2xl p-6 shadow-card hover:border-primary/30 hover:shadow-glow transition-all duration-300 flex flex-col"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <project.icon className="w-6 h-6 text-primary-foreground" />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-center gap-2 text-sm">
                      <span className="w-1 h-1 bg-primary rounded-full" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span 
                      key={t}
                      className="px-2 py-1 text-xs font-mono bg-secondary/50 text-foreground/80 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {project.link && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline"
                  >
                    View Live <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

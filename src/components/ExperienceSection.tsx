import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "React.js Developer",
    company: "BISAG-N",
    location: "Gandhinagar, Gujarat",
    period: "Apr 2023 - Present",
    highlights: [
      "Crafted responsive web interfaces using React and modern CSS frameworks, improving user engagement by 30%",
      "Assembled components and reusable UI libraries, reducing development time by 25%",
      "Collaborated with designers and backend developers to enhance user experience, resulting in a 15% increase in user satisfaction",
      "Strengthened user data accuracy with form validation using React Hook Form and Yup, decreasing form errors by 40%",
      "Built interactive dashboards with pie charts and visualizations, improving data comprehension by 20%",
    ],
  },
];

const education = [
  {
    degree: "B.Tech Computer Science and Engineering",
    institution: "Central University of Haryana",
    period: "Aug 2018 - Jul 2022",
  },
  {
    degree: "Intermediate - Science",
    institution: "Pratibha Junior College",
    period: "Apr 2016 - Mar 2018",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative bg-gradient-hero">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.2) 1px, transparent 0)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase">Career</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              Experience & <span className="text-gradient">Education</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My professional journey and academic background that shaped my expertise.
            </p>
          </div>

          {/* Experience */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Work Experience</h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="glass rounded-2xl p-8 shadow-card hover:border-primary/30 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <h4 className="text-xl font-semibold text-foreground">{exp.title}</h4>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                    </div>
                    <span className="text-sm font-mono text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full w-fit">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex gap-3">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="glass rounded-2xl p-6 shadow-card hover:border-primary/30 transition-all"
                >
                  <h4 className="text-lg font-semibold text-foreground mb-2">{edu.degree}</h4>
                  <p className="text-primary font-medium mb-1">{edu.institution}</p>
                  <p className="text-sm font-mono text-muted-foreground">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

const skills = [
  { name: "React.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "JavaScript", level: 95 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Redux/Zustand", level: 85 },
];

const techStack = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js",
  "Redux", "Zustand", "Tailwind CSS", "Chakra UI", "Material UI", 
  "Bootstrap", "Git", "PostgreSQL", "Jest", "CI/CD", "API Integration"
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase">About Me</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              Passionate About <span className="text-gradient">Crafting Experiences</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A dedicated Frontend Developer with a strong foundation in building engaging 
              and user-friendly web interfaces.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* About Text */}
            <div className="space-y-6">
              <div className="glass rounded-2xl p-8 shadow-card">
                <h3 className="text-xl font-semibold mb-4 text-foreground">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  With expertise in React.js, JavaScript, and modern frontend tools, I specialize 
                  in creating responsive and accessible web applications while maintaining best 
                  coding practices.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Currently working at <span className="text-primary font-medium">BISAG-N</span>, 
                  I've contributed to improving user engagement by 30%, reducing development time 
                  by 25%, and enhancing data comprehension through interactive dashboards.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I'm skilled in optimizing performance and collaborating with teams to deliver 
                  high-quality projects that make a real impact.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="glass rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-gradient">2+</div>
                  <div className="text-sm text-muted-foreground mt-1">Years Exp.</div>
                </div>
                <div className="glass rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-gradient">10+</div>
                  <div className="text-sm text-muted-foreground mt-1">Projects</div>
                </div>
                <div className="glass rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-gradient">30%</div>
                  <div className="text-sm text-muted-foreground mt-1">User Boost</div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              {/* Skill Bars */}
              <div className="glass rounded-2xl p-8 shadow-card">
                <h3 className="text-xl font-semibold mb-6 text-foreground">Core Skills</h3>
                <div className="space-y-5">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-primary rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="glass rounded-2xl p-8 shadow-card">
                <h3 className="text-xl font-semibold mb-6 text-foreground">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1.5 text-sm font-mono bg-secondary/50 text-foreground rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

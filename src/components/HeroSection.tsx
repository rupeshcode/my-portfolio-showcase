import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-glow delay-200" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-slide-up">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-slide-up delay-100">
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-gradient">Rupesh</span>
          </h1>

          {/* Role */}
          <div className="flex items-center justify-center gap-3 mb-6 animate-slide-up delay-200">
            <span className="h-px w-12 bg-primary/50" />
            <p className="text-xl md:text-2xl font-mono text-primary">
              Frontend Developer
            </p>
            <span className="h-px w-12 bg-primary/50" />
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up delay-300">
            Crafting responsive, accessible, and performant web experiences with 
            <span className="text-foreground font-medium"> React.js</span>, 
            <span className="text-foreground font-medium"> TypeScript</span>, and modern frontend tools.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up delay-400">
            <Button 
              size="lg" 
              className="bg-gradient-primary text-primary-foreground font-semibold px-8 shadow-glow hover:opacity-90 transition-all"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 animate-slide-up delay-500">
            <a 
              href="https://linkedin.com/in/rupeshchawan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:bg-primary/10 hover:border-primary/30 transition-all group"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="https://github.com/rupeshchawan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:bg-primary/10 hover:border-primary/30 transition-all group"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="mailto:rupeshchawan887@gmail.com"
              className="p-3 rounded-full glass hover:bg-primary/10 hover:border-primary/30 transition-all group"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;

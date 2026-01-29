import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative bg-gradient-hero">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase">Contact</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              Let's Work <span className="text-gradient">Together</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your visions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="glass rounded-2xl p-8 shadow-card">
                <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:rupeshchawan887@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-primary/10 hover:border-primary/30 border border-transparent transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="text-foreground font-medium">rupeshchawan887@gmail.com</p>
                    </div>
                  </a>

                  <a 
                    href="tel:+919581995887"
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-primary/10 hover:border-primary/30 border border-transparent transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="text-foreground font-medium">+91 9581995887</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="text-foreground font-medium">Hyderabad, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              {/* <div className="glass rounded-2xl p-8 shadow-card">
                <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://linkedin.com/in/rupeshchawan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-3 p-4 rounded-xl bg-secondary/30 hover:bg-primary/10 hover:border-primary/30 border border-transparent transition-all group"
                  >
                    <Linkedin className="w-5 h-5 text-primary" />
                    <span className="font-medium">LinkedIn</span>
                  </a>
                  <a 
                    href="https://github.com/rupeshchawan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-3 p-4 rounded-xl bg-secondary/30 hover:bg-primary/10 hover:border-primary/30 border border-transparent transition-all group"
                  >
                    <Github className="w-5 h-5 text-primary" />
                    <span className="font-medium">GitHub</span>
                  </a>
                </div>
              </div> */}
            </div>

            {/* CTA Card */}
            <div className="glass rounded-2xl p-8 shadow-card shadow-glow flex flex-col justify-center">
              {/* <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-6">
                  <Send className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Ready to Start?</h3>
                <p className="text-muted-foreground mb-8">
                  Whether you have a project in mind or just want to chat about 
                  frontend development, I'd love to hear from you.
                </p>
                <a href="mailto:rupeshchawan887@gmail.com">
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:opacity-90 transition-all"
                  >
                    Send Me an Email
                  </Button>
                </a>
              </div> */}
                <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>

              <div className="flex gap-4">
                  <a 
                    href="https://linkedin.com/in/rupeshchawan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-3 p-4 rounded-xl bg-secondary/30 hover:bg-primary/10 hover:border-primary/30 border border-transparent transition-all group"
                  >
                    <Linkedin className="w-5 h-5 text-primary" />
                    <span className="font-medium">LinkedIn</span>
                  </a>
                  <a 
                    href="https://github.com/rupeshchawan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-3 p-4 rounded-xl bg-secondary/30 hover:bg-primary/10 hover:border-primary/30 border border-transparent transition-all group"
                  >
                    <Github className="w-5 h-5 text-primary" />
                    <span className="font-medium">GitHub</span>
                  </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, Palette, Zap, Globe } from "lucide-react";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-orange-300">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/15 via-background to-secondary/20 w-full min-h-screen flex items-center">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Hello World! I'm <span className="text-primary">Deshawn Curtis</span>
              <br />
              a Software <span className="text-secondary">Developer</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              My goal is to create cool, functional, as well as aesthetically pleasing digital experiences and applications.
              Currently on a journey to master HTML, CSS, JavaScript, React, and Next.js to build amazing digital creations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                <Link to="/projects">
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
              >
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-primary/30 rounded-full blur-xl bg-sky-300"></div>
        <div className="absolute bottom-20 right-10 w-36 h-36 bg-secondary/30 rounded-full blur-xl bg-sky-300"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/20 rounded-full blur-lg bg-sky-300"></div>
        <div className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-secondary/25 rounded-full blur-lg bg-sky-300"></div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-r from-card via-background to-card w-full bg-sky-300">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What I'm Learning, Creating, & Coding
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Developing skills in modern web technologies to create exceptional user experiences you won't find anywhere else
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 w-full">
            {/* Full Stack Development */}
            <Card className="border-border hover:border-primary/50 transition-colors duration-300 bg-card/80 backdrop-blur-sm ">
              <CardContent className="p-8 text-center ">
                <div className="w-16 h-16 bg-primary/15 rounded-full flex items-center justify-center mx-auto mb-6 bg-sky-300">
                  <Code className="h-8 w-8 text-primary bg-sky-300" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 bg-sky-300">Full Stack Development</h3>
                <p className="text-muted-foreground leading-relaxed bg-sky-300">
                  Mastering HTML, CSS, and JavaScript fundamentals while building responsive, interactive web applications.
                </p>
              </CardContent>
            </Card>

            {/* React Development */}
            <Card className="border-border hover:border-secondary/50 transition-colors duration-300 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-secondary/15 rounded-full flex items-center justify-center mx-auto mb-6 bg-sky-300">
                  <Palette className="h-8 w-8 text-secondary " />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 bg-sky-300">React Development</h3>
                <p className="text-muted-foreground leading-relaxed bg-sky-300 ">
                  Learning React to build dynamic, component-based user interfaces with modern development practices.
                </p>
              </CardContent>
            </Card>
            {/* Next.js Learning */}
            <Card className="border-border hover:border-primary/50 transition-colors duration-300 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/15 rounded-full flex items-center justify-center mx-auto mb-6 bg-sky-300">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 bg-sky-300">Next.js</h3>
                <p className="text-muted-foreground leading-relaxed bg-sky-300">
                  Expanding my React skills with Next.js to build fast, scalable, and SEO-friendly applications.
                </p>
              </CardContent>
            </Card>
            {/* Modern Web Tools */}
            <Card className="border-border hover:border-primary/50 transition-colors duration-300 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/15 rounded-full flex items-center justify-center mx-auto mb-6 bg-sky-300">
                  <Zap className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 bg-sky-300">Modern Web Tools</h3>
                <p className="text-muted-foreground leading-relaxed bg-sky-300">
                  Exploring modern development tools and best practices for efficient, maintainable code.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary/20 via-secondary/15 to-primary/20 w-full">
        <div className="w-full text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Let's Build Something Together</h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            I'm excited to collaborate on projects and continue growing as a web developer. Let's connect!
          </p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-lg px-8 py-6 ">
            <Link to="/contact ">
              Start a Conversation <ArrowRight className="ml-2 h-5 w-5 " />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
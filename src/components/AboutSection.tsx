import { GraduationCap, Award, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate Full Stack Developer with expertise in modern web technologies and a strong foundation in computer science.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <div className="animate-slide-in">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Professional Summary
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a dedicated Full Stack Developer based in Casablanca, Morocco, with a strong background in Java ecosystem technologies. 
                My journey in software development began with a passion for problem-solving and has evolved into expertise in building 
                robust, scalable web applications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in backend development using Java and Spring Boot, frontend development with Angular, and database design. 
                My experience spans from developing RESTful APIs to creating responsive user interfaces and implementing secure authentication systems.
              </p>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Based in Casablanca, Morocco</span>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-6">
            <Card className="card-gradient shadow-card transition-smooth hover:shadow-hover">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Education</h4>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div>
                        <p className="font-medium">Bachelor's in Computer Science</p>
                        <p>Databases Track - Faculty of Sciences Ben M'Sik (2022-2023)</p>
                      </div>
                      <div>
                        <p className="font-medium">DEUG in Mathematics and Computer Science</p>
                        <p>Faculty of Sciences Ben M'Sik (2021-2022)</p>
                      </div>
                      <div>
                        <p className="font-medium">High School Diploma in Mathematics A</p>
                        <p>Lycée Ben M'Sik (2018-2019)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-gradient shadow-card transition-smooth hover:shadow-hover">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Certifications</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div>
                        <p className="font-medium">Oracle Certified Professional</p>
                        <p>Java SE 17 Developer</p>
                      </div>
                      <div>
                        <p className="font-medium">Full Stack Development</p>
                        <p>Simplon Maghreb Certification</p>
                      </div>
                      <div>
                        <p className="font-medium">Full Stack Training</p>
                        <p>Coding Tech - Java & Spring Boot (Jan-May 2025)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
import { GraduationCap, Award, Calendar, MapPin, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const EducationSection = () => {
  const education = [
    {
      degree: 'Full Stack Developer Training',
      institution: 'Coding Tech',
      location: 'Casablanca, Morocco',
      period: 'January 2025 - May 2025',
      description: 'Intensive training program focused on Java ecosystem and Spring Boot development.',
      subjects: ['Java Advanced', 'Spring Boot', 'Microservices', 'REST APIs'],
      status: 'completed'
    },
    {
      degree: 'Bachelor in Computer Science',
      institution: 'Faculty of Sciences Ben M\'Sik',
      location: 'Casablanca, Morocco',
      period: '2022 - 2023',
      description: 'Specialized in Database Systems with focus on SQL, database design, and data management.',
      subjects: ['Database Design', 'SQL & PL/SQL', 'Data Structures', 'Software Engineering'],
      status: 'completed'
    },
    {
      degree: 'DEUG in Mathematics and Computer Science',
      institution: 'Faculty of Sciences Ben M\'Sik',
      location: 'Casablanca, Morocco',
      period: '2021 - 2022',
      description: 'Foundation studies combining mathematical concepts with computer science fundamentals.',
      subjects: ['Mathematics', 'Programming Fundamentals', 'Algorithms', 'Logic'],
      status: 'completed'
    },
    {
      degree: 'Baccalauréat in Mathematics A',
      institution: 'Lycée Ben M\'Sik',
      location: 'Casablanca, Morocco',
      period: '2018 - 2019',
      description: 'High school diploma with specialization in Mathematics and Sciences.',
      subjects: ['Mathematics', 'Physics', 'Chemistry', 'Computer Science'],
      status: 'completed'
    }
  ];

  const certifications = [
    {
      name: 'Oracle Certified Professional',
      issuer: 'Oracle',
      credential: 'Java SE 17 Developer',
      date: '2024',
      icon: Star,
      verified: true
    },
    {
      name: 'Full Stack Development Certification',
      issuer: 'Simplon Maghreb',
      credential: 'Web Development Program',
      date: '2023',
      icon: Award,
      verified: true
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Education & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strong academic foundation combined with industry-recognized certifications in modern technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Academic Background
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card 
                  key={edu.degree} 
                  className="card-gradient shadow-card transition-smooth hover:shadow-hover"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-lg font-semibold text-foreground">
                            {edu.degree}
                          </h4>
                          <Badge 
                            variant="secondary" 
                            className="bg-green-500/10 text-green-600 border-green-500/20"
                          >
                            Completed
                          </Badge>
                        </div>
                        
                        <p className="text-primary font-medium mb-2">{edu.institution}</p>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {edu.description}
                        </p>
                        
                        <div>
                          <h5 className="font-medium text-foreground mb-2">Key Subjects:</h5>
                          <div className="flex flex-wrap gap-2">
                            {edu.subjects.map((subject) => (
                              <Badge 
                                key={subject} 
                                variant="outline" 
                                className="text-xs border-primary/30 text-primary"
                              >
                                {subject}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-2">
              <Award className="h-6 w-6 text-accent" />
              Certifications
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <Card 
                  key={cert.name} 
                  className="card-gradient shadow-card transition-smooth hover:shadow-hover"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <cert.icon className="h-6 w-6 text-accent" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-foreground">
                            {cert.name}
                          </h4>
                          {cert.verified && (
                            <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20">
                              Verified
                            </Badge>
                          )}
                        </div>
                        
                        <p className="text-accent font-medium mb-1">{cert.issuer}</p>
                        <p className="text-sm text-muted-foreground mb-2">{cert.credential}</p>
                        
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>Issued {cert.date}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {/* Additional Learning */}
              <Card className="border-dashed border-2 border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Continuous Learning
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Always exploring new technologies and expanding my skill set through online courses and personal projects.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
import { GraduationCap, Award, Calendar, MapPin, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const EducationSection = () => {
  const education = [
    {
      degree: 'Formation Développeuse Full Stack',
      institution: 'Coding Tech',
      location: 'Casablanca, Maroc',
      period: 'Janvier 2025 - Mai 2025',
      description: 'Programme de formation intensif axé sur l’écosystème Java et le développement Spring Boot et Angular.',
      subjects: ['Java Avancé', 'Spring Boot', 'Microservices', 'APIs REST','Angular'],
      status: 'completed'
    },
    {
      degree: 'Licence Fondamentale SMI Parcours Bases de Données',
      institution: 'Faculté des Sciences Ben M\'Sik',
      location: 'Casablanca, Maroc',
      period: '2022 - 2023',
      description: 'Spécialisation en systèmes de bases de données avec un accent sur SQL, la conception de bases de données et la gestion des données.',
      subjects: ['Conception UML', 'SQL & PL/SQL', 'Structures de données', 'Java'],
      status: 'completed'
    },
    {
      degree: 'DEUG Mathématiques et Informatique',
      institution: 'Faculté des Sciences Ben M\'Sik',
      location: 'Casablanca, Maroc',
      period: '2021 - 2022',
      description: 'Études fondamentales combinant concepts mathématiques et bases de l’informatique.',
      subjects: ['Mathématiques', 'Bases de la programmation', 'Algorithmes', 'Logique','C','javascript'],
      status: 'completed'
    },
    {
      degree: 'Baccalauréat Mathématiques A',
      institution: 'Lycée Ben M\'Sik',
      location: 'Casablanca, Maroc',
      period: '2018 - 2019',
      description: 'Diplôme du baccalauréat avec spécialisation en mathématiques et sciences.',
      subjects: ['Mathématiques', 'Physique', 'Chimie', 'Informatique'],
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
      name: 'Certification Développement Full Stack',
      issuer: 'Simplon Maghreb',
      credential: 'Programme Développement Web',
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
            Éducation & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solide parcours académique complété par des certifications reconnues dans les technologies modernes.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Parcours académique */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Parcours académique
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
                            Terminé
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
                          <h5 className="font-medium text-foreground mb-2">Matières principales :</h5>
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
                              Vérifié
                            </Badge>
                          )}
                        </div>
                        
                        <p className="text-accent font-medium mb-1">{cert.issuer}</p>
                        <p className="text-sm text-muted-foreground mb-2">{cert.credential}</p>
                        
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>Délivré en {cert.date}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {/* Apprentissage continu */}
              <Card className="border-dashed border-2 border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Apprentissage continu
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Toujours en exploration de nouvelles technologies et en élargissant mes compétences via des cours en ligne et des projets personnels.
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
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Stagiaire Développeuse Full Stack",
      company: "Digitalia Solutions",
      location: "Casablanca, Maroc",
      period: "Février 2025 - Mai 2025",
      description: "Développement d'une application web et mobile de field force pour la réalisation d'études de marché et le suivi des produits en magasin pour le client Richbond.",
      achievements: [
        "Conception et développement d'une application web responsive avec Spring Boot et Angular",
        "Développement d'une application mobile cross-platform avec React Native et Expo",
        "Implémentation de la gestion des utilisateurs et de l'authentification sécurisée",
        "Mise en place du suivi des merchandisers et de la planification des visites",
        "Création de tableaux de bord analytiques pour le suivi des performances",
        "Intégration de fonctionnalités d'export Excel et de récupération de mot de passe",
        "Collaboration avec l'équipe pour l'analyse des besoins et les spécifications techniques"
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "Angular",
        "React Native",
        "Expo",
        "MySQL",
        "APIs REST",
        "JavaScript",
        "TypeScript"
      ],
      current: false
    },
    {
      title: 'Stagiaire Développeuse Backend',
      company: 'Firethunder',
      location: 'Casablanca, Maroc',
      period: 'Décembre 2023 - Septembre 2024',
      description: 'Développement d’API et architecture microservices pour la gestion hôtelière.',
      achievements: [
        'Développement d’une API GraphQL pour la gestion de restaurants et d’hôtellerie',
        'Création d’un microservice de tarification avec le protocole gRPC',
        'Mise en place de modèles de données efficaces avec Django Python',
        'Collaboration avec l’équipe frontend pour une intégration fluide'
      ],
      technologies: ['GraphQL', 'Django', 'Python', 'gRPC', 'PostgreSQL'],
      current: false
    },
    {
      title: 'Stagiaire Développeuse Mobile',
      company: 'TFO Solution',
      location: 'Casablanca, Maroc',
      period: 'Mars 2023 - Juin 2023',
      description: 'Stage de fin d’études pour le développement d’une application mobile de gestion de matériel.',
      achievements: [
        'Développement de l’application mobile "Equiptrack" de la conception au déploiement',
        'Mise en place d’un système de gestion du matériel pour les techniciens',
        'Création d’une interface mobile intuitive avec mises à jour en temps réel',
        'Intégration du scan de codes-barres pour le suivi du matériel'
      ],
      technologies: ['Java', 'Android', 'SQLite', 'APIs REST'],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Expérience professionnelle
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expérience pratique dans la création d’applications réelles et la collaboration avec des équipes de développement modernes.
          </p>
        </div>

        <div className="relative">
          {/* Ligne verticale à gauche */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20"></div>

          <div className="space-y-12">
            {experiences.map((experience) => {
              const isFirethunder = experience.company === 'Firethunder';

              return (
                <div key={experience.company} className="relative flex items-center md:flex-row">
                  {/* Point de la frise */}
                  <div className="absolute left-4 w-4 h-4 bg-primary rounded-full border-4 border-background z-10">
                    {experience.current && (
                      <div className="absolute inset-0 bg-primary rounded-full animate-ping"></div>
                    )}
                  </div>

                  {/* Carte de contenu */}
                  <div className={`ml-12 md:w-1/2 ${isFirethunder ? 'md:ml-auto md:mr-0' : 'md:ml-8'}`}>
                    <Card className="card-gradient shadow-card transition-smooth hover:shadow-hover group">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-foreground mb-1">
                              {experience.title}
                            </h3>
                            <div className="flex items-center gap-2 mb-2 text-primary font-medium">
                              <ExternalLink className="h-4 w-4" />
                              <span>{experience.company}</span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{experience.period}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span>{experience.location}</span>
                              </div>
                            </div>
                            {experience.current && (
                              <Badge className="mb-4 bg-green-500/10 text-green-600 border-green-500/20">
                                En poste
                              </Badge>
                            )}
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {experience.description}
                        </p>

                        <div className="mb-4">
                          <h4 className="font-medium text-foreground mb-2">Réalisations clés :</h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {experience.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-medium text-foreground mb-2">Technologies utilisées :</h4>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className="text-xs transition-smooth hover:bg-primary hover:text-primary-foreground"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

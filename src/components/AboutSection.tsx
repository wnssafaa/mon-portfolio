import { GraduationCap, Award, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            À propos de moi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Développeuse Full Stack passionnée, experte en technologies web modernes et dotée d'une solide base en informatique.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texte de présentation */}
          <div className="space-y-6">
            <div className="animate-slide-in">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Résumé professionnel
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Je suis une développeuse Full Stack basée à Casablanca, Maroc, avec une solide expérience dans l'écosystème Java.
                Mon parcours dans le développement logiciel a commencé par une passion pour la résolution de problèmes et a évolué vers une expertise dans la création d'applications web robustes et évolutives.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Je me spécialise dans le développement backend avec Java et Spring Boot, le développement frontend avec Angular, ainsi que la conception de bases de données.
                Mon expérience va du développement d'API REST à la création d'interfaces utilisateur réactives et à la mise en place de systèmes d'authentification sécurisés.
              </p>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Basée à Casablanca, Maroc</span>
            </div>
          </div>

          {/* Éducation & Certifications */}
          <div className="space-y-6">
            <Card className="card-gradient shadow-card transition-smooth hover:shadow-hover">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Éducation</h4>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div>
                        <p className="font-medium">Licence en Informatique</p>
                        <p>Parcours Bases de Données - Faculté des Sciences Ben M'Sik (2022-2023)</p>
                      </div>
                      <div>
                        <p className="font-medium">DEUG Mathématiques et Informatique</p>
                        <p>Faculté des Sciences Ben M'Sik (2021-2022)</p>
                      </div>
                      <div>
                        <p className="font-medium">Baccalauréat Mathématiques A</p>
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
                        <p className="font-medium">Développement Full Stack</p>
                        <p>Certification Simplon Maghreb</p>
                      </div>
                      <div>
                        <p className="font-medium">Formation Full Stack</p>
                        <p>Coding Tech - Java & Spring Boot (Janv-Mai 2025)</p>
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
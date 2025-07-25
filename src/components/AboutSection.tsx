import { GraduationCap, Award, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/30"  >
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
                Profil professionnel
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Développeuse Full Stack passionnée et créative, basée à Casablanca, Maroc.
                Mon parcours dans le développement web combine une solide expertise technique avec 
                une approche orientée solutions pour créer des applications performantes et intuitives.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Polyvalente et adaptable, je maîtrise l'ensemble du cycle de développement, 
                du backend au frontend. Mon approche met l'accent sur le code propre, 
                les bonnes pratiques de développement et les architectures modulaires.
              </p>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Basée à Casablanca, Maroc</span>
            </div>
          </div>

          {/* Éducation & Certifications */}
          <div className="space-y-6">
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-4">Parcours académique</h4>
                    <ul className="space-y-4 text-sm text-muted-foreground">
                      <li className="flex flex-col border-l-2 border-primary/20 pl-4 py-1">
                        <span className="font-medium">Licence en Informatique</span>
                        <span>Parcours Bases de Données</span>
                        <span className="text-xs text-muted-foreground/70">Faculté des Sciences Ben M'Sik • 2022-2023</span>
                      </li>
                      <li className="flex flex-col border-l-2 border-primary/20 pl-4 py-1">
                        <span className="font-medium">DEUG Mathématiques et Informatique</span>
                        <span className="text-xs text-muted-foreground/70">Faculté des Sciences Ben M'Sik • 2021-2022</span>
                      </li>
                      <li className="flex flex-col border-l-2 border-primary/20 pl-4 py-1">
                        <span className="font-medium">Baccalauréat Mathématiques A</span>
                        <span className="text-xs text-muted-foreground/70">Lycée Ben M'Sik • 2018-2019</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-4">Certifications</h4>
                    <ul className="space-y-4 text-sm text-muted-foreground">
                      <li className="flex flex-col border-l-2 border-accent/20 pl-4 py-1">
                        <span className="font-medium">Oracle Certified Professional</span>
                        <span>Java SE 17 Developer</span>
                        <span className="text-xs text-muted-foreground/70">2024</span>
                      </li>
                      <li className="flex flex-col border-l-2 border-accent/20 pl-4 py-1">
                        <span className="font-medium">Développement Full Stack</span>
                        <span className="text-xs text-muted-foreground/70">Certification Simplon Maghreb • 2023</span>
                      </li>
                      <li className="flex flex-col border-l-2 border-accent/20 pl-4 py-1">
                        <span className="font-medium">Formation Full Stack</span>
                        <span>Java & Spring Boot</span>
                        <span className="text-xs text-muted-foreground/70">Coding Tech • Janv-Mai 2025</span>
                      </li>
                    </ul>
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
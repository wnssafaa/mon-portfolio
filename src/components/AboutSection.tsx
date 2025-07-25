import { MapPin } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Titre */}
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 relative inline-block">
          À propos de moi
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/4 h-0.5 bg-primary rounded-full"></span>
        </h2>

        {/* Paragraphe principal étendu */}
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-6">
          Je suis une développeuse Full Stack passionnée par la création d'expériences web fluides, performantes et accessibles.
          Mon parcours m’a permis d’explorer les différentes couches du développement logiciel, de la conception des bases de données
          à la mise en place d'interfaces utilisateur modernes et réactives. Grâce à mon sens du détail et à ma curiosité constante,
          je suis capable d’aborder les projets avec une vision globale, tout en veillant à la qualité du code et à la satisfaction des utilisateurs.
          J’aime travailler en équipe, résoudre des problèmes complexes, et apprendre de nouvelles technologies pour rester à la pointe
          dans ce domaine en constante évolution.
        </p>

        {/* Citation ou phrase clé */}
        <p className="text-muted-foreground leading-relaxed italic mb-10">
          "Polyvalente et rigoureuse, je m’investis pleinement dans chaque projet pour livrer des solutions efficaces, maintenables et élégantes."
        </p>

        {/* Localisation */}
        <div className="flex justify-center items-center gap-2 text-muted-foreground">
          <div className="p-2 rounded-full bg-primary/10">
            <MapPin className="h-5 w-5 text-primary" />
          </div>
          <span>Casablanca, Maroc</span>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

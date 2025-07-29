import { Github, Linkedin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import safaaPortrait from '@/assets/safaa-portrait.jpg';
import safaaCV from '@/assets/SAFAA__ELOUANNASS.pdf';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 relative overflow-hidden">
      {/* Décoration de fond améliorée */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800/20 via-transparent to-blue-400/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          {/* Colonne gauche : texte et boutons */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <div className="mb-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Safaa Elouannass
              </h1>
              <h2 className="text-xl md:text-2xl text-white/90 font-medium mb-4">
                Développeuse Full Stack
              </h2>
              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto md:mx-0 leading-relaxed">
                Passionnée par le développement web et la résolution de problèmes, je crée des solutions numériques robustes et efficaces en utilisant des technologies modernes comme Java, Spring Boot et Angular.
              </p>
            </div>

            {/* Boutons d'action */}
            <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center items-center mb-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <a
                href={safaaCV}
                download="safaa-elouannass-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-white/90 font-medium px-8 py-3 transition-spring shadow-hover"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Télécharger mon CV
                </Button>
              </a>
              
              <Button 
                size="lg"
                className="bg-white text-blue-600 hover:bg-white/90 font-medium px-8 py-3 transition-spring shadow-hover"
                onClick={() => window.open('https://github.com/wnssafaa', '_blank')}
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
              
              <Button 
                size="lg"
                className="bg-white text-blue-600 hover:bg-white/90 font-medium px-8 py-3 transition-spring shadow-hover"
                onClick={() => window.open('https://www.linkedin.com/in/safaa-elouannass-b84888256', '_blank')}
              >
                <Linkedin className="mr-2 h-5 w-5"  />
                LinkedIn
              </Button>
            </div>

            {/* Localisation */}
            {/* <div className="text-white/70 animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <p className="text-sm md:text-base">📍 Casablanca, Maroc</p>
            </div> */}
          </div>

          {/* Colonne droite : image */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end mb-8 md:mb-0 animate-fade-up">
            <div className="w-80 h-80 rounded-full overflow-hidden shadow-xl ring-4 ring-white/20">
              <img 
                src={safaaPortrait} 
                alt="Safaa Elouannass - Développeuse Full Stack" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Indicateur de défilement */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
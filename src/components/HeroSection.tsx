import { Github, Linkedin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import safaaPortrait from '@/assets/safaa-portrait.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-up">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-glow ring-4 ring-primary/20">
              <img 
                src={safaaPortrait} 
                alt="Safaa Elouannass - Full Stack Developer" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name and Title */}
          <div className="mb-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Safaa Elouannass
            </h1>
            <h2 className="text-xl md:text-2xl text-white/90 font-medium mb-4">
              Full Stack Developer
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Passionate about web development and problem-solving, I build robust and efficient digital solutions using modern technologies like Java, Spring Boot, and Angular.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-medium px-8 py-3 transition-spring shadow-hover"
            >
              <Download className="mr-2 h-5 w-5" />
              Download My CV
            </Button>
            
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary transition-spring"
                onClick={() => window.open('https://github.com/wnssafaa', '_blank')}
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary transition-spring"
                onClick={() => window.open('https://www.linkedin.com/in/safaa-elouannass-b84888256', '_blank')}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </div>
          </div>

          {/* Location */}
          <div className="text-white/70 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-sm md:text-base">📍 Casablanca, Morocco</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
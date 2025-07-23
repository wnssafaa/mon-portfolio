import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/wnssafaa',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/safaa-elouannass-b84888256',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:wannassafaa8@gmail.com',
      label: 'Email'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-2">Safaa Elouannass</h3>
            <p className="text-background/70 text-sm">
              Full Stack Developer crafting digital solutions with passion and precision.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center">
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-background/10 rounded-lg transition-smooth hover:bg-background/20 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Back to Top */}
          <div className="text-center md:text-right">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-sm text-background/70 hover:text-background transition-smooth"
            >
              Back to Top ↑
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-background/20 text-center">
          <p className="text-background/70 text-sm flex items-center justify-center gap-2">
            © {currentYear} Safaa Elouannass. Built with
            <Heart className="h-4 w-4 text-red-400" />
            and React.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
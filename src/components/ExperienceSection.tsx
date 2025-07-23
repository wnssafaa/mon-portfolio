import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Full Stack Developer Intern',
      company: 'Digitalia Solutions',
      location: 'Casablanca, Morocco',
      period: 'June 2025 - Present',
      description: 'Developing a comprehensive web application with user management and analytics capabilities.',
      achievements: [
        'Built responsive web application with user profile management',
        'Implemented visit planning and merchandiser tracking system',
        'Created analytical dashboard with data visualization',
        'Developed Excel export functionality and password recovery features'
      ],
      technologies: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'REST APIs'],
      current: true
    },
    {
      title: 'Backend Developer Intern',
      company: 'Firethunder',
      location: 'Casablanca, Morocco',
      period: 'December 2023 - September 2024',
      description: 'Focused on API development and microservices architecture for hospitality management.',
      achievements: [
        'Developed GraphQL API for restaurant and hospitality management',
        'Built pricing microservice using gRPC protocol',
        'Implemented efficient data models with Django Python',
        'Collaborated with frontend team for seamless integration'
      ],
      technologies: ['GraphQL', 'Django', 'Python', 'gRPC', 'PostgreSQL'],
      current: false
    },
    {
      title: 'Mobile App Developer Intern',
      company: 'TFO Solution',
      location: 'Casablanca, Morocco',
      period: 'March 2023 - June 2023',
      description: 'Final project internship developing a mobile application for equipment management.',
      achievements: [
        'Developed "Equiptrack" mobile application from concept to deployment',
        'Implemented technician equipment management system',
        'Created user-friendly mobile interface with real-time updates',
        'Integrated barcode scanning for equipment tracking'
      ],
      technologies: ['Java', 'Android', 'SQLite', 'REST APIs'],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hands-on experience building real-world applications and working with modern development teams.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div 
                key={experience.company} 
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform ${index % 2 === 0 ? 'md:-translate-x-2' : 'md:-translate-x-2'} z-10`}>
                  {experience.current && (
                    <div className="absolute inset-0 bg-primary rounded-full animate-ping"></div>
                  )}
                </div>

                {/* Content card */}
                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:ml-8'} md:w-1/2`}>
                  <Card className="card-gradient shadow-card transition-smooth hover:shadow-hover group">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className={index % 2 === 0 ? 'md:text-right' : ''}>
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
                              Currently Working
                            </Badge>
                          )}
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {experience.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="font-medium text-foreground mb-2">Key Achievements:</h4>
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
                        <h4 className="font-medium text-foreground mb-2">Technologies Used:</h4>
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
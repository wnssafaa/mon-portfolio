import { Code, Database, Server, Wrench, Palette, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Langages de programmation',
      skills: ['Java', 'JavaScript', 'TypeScript', 'Python', 'C++', 'C'],
      color: 'bg-primary/10 text-primary'
    },
    {
      icon: Server,
      title: 'Frameworks & Librairies',
      skills: ['Spring Boot', 'Angular', 'Hibernate', 'Tailwind CSS', 'JEE','React','node.js'],
      color: 'bg-accent/10 text-accent'
    },
    {
      icon: Database,
      title: 'Bases de données',
      skills: ['MySQL', 'Oracle', 'SQL', 'PL/SQL'],
      color: 'bg-green-500/10 text-green-600'
    },
    {
      icon: Wrench,
      title: 'Outils & Technologies',
      skills: ['Git', 'GitHub', 'GitLab', 'Docker', 'Postman', 'PgAdmin'],
      color: 'bg-orange-500/10 text-orange-600'
    },
    {
      icon: Palette,
      title: 'Design & Planification',
      skills: ['Figma', 'UML', 'Trello', 'Jira', 'Open Project'],
      color: 'bg-purple-500/10 text-purple-600'
    },
    {
      icon: Users,
      title: 'Méthodologies',
      skills: ['Agile', 'Scrum'],
      color: 'bg-blue-500/10 text-blue-600'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Compétences techniques
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une boîte à outils complète de technologies et de méthodologies modernes pour créer des solutions numériques d’exception.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="card-gradient shadow-card transition-smooth hover:shadow-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg ${category.color} transition-smooth group-hover:scale-110`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="text-xs font-medium transition-smooth hover:bg-primary hover:text-primary-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mise en avant des compétences en cours d'apprentissage */}
 
      </div>
    </section>
  );
};

export default SkillsSection;
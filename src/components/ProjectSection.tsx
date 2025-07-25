import { ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import equiptrackImg from '@/assets/equiptrack.png';
import richbondImg from '@/assets/field-force-management-software.webp';
import hotelImg from '@/assets/hotel.jpg';
import tasksImg from '@/assets/tasks.jpg';
import ecomerce from '@/assets/OIP (3).webp'
const projects = [
	{
		name: 'Equiptrack',
		description:
			'Application mobile de gestion de matériel pour techniciens, avec scan de codes-barres et synchronisation en temps réel.',
		technologies: ['React Native', 'Expo', 'SQLite', 'APIs REST'],
		link: 'https://github.com/wnssafaa/equiptrack',
		image: equiptrackImg,
	},
{
  name: 'Field Force Management',
  description:
    'Solution complète web et mobile pour la gestion des utilisateurs, planification des visites et suivi des performances en magasin.',
  features: [
    "Interface admin web (Angular)",
    "Application terrain mobile (React Native)",
    "Synchronisation des données offline/online",
    "Géolocalisation et rapports photos",
    "Analytics temps réel"
  ],
  technologies: ['Angular 16', 'Spring Boot 3', 'MySQL', 'React Native', 'Expo'],
  repo: {
    backend: 'https://github.com/wnssafaa/rechbonf-bakend',
    frontend: 'https://github.com/wnssafaa/rechbonf-frontend', // Ajoute si disponible
    mobile: 'https://github.com/wnssafaa/rechbonf-mobile' // Ajoute si disponible
  },
  demo: 'https://richbond-demo.digitalia.ma', // Optionnel
  image: richbondImg
},
	{
  name: 'Hotel & Restaurant Management API',
  description:
    "Développement d'une API complète pour la gestion de l’hôtellerie et de la restauration, incluant la réservation de chambres, la gestion des menus et des commandes.",
  technologies: ['Python', 'Django', 'GraphQL', 'PostgreSQL', 'Angular'],
  link: 'https://github.com/wnssafaa/hotel-api',
  image: hotelImg
}
,
	{
		name: 'Task Manager',
		description:
			'Application web de gestion de tâches avec authentification, création de tâches, et gestion des statuts.',
		technologies: ['Angular', 'Express', 'SQLite'],
		link: 'https://github.com/wnssafaa/Tasks',
		image: tasksImg,
	},
{
  name: 'E-commerce Backend',
  description: "Backend d'une application e-commerce développé avec Java EE en utilisant Servlets, JSP et Hibernate. Gestion des produits, utilisateurs, commandes et panier.",
  technologies: ['Java EE', 'Servlets', 'JSP', 'Hibernate', 'MySQL'],
  link: 'https://github.com/wnssafaa/ecomerce',
  image: ecomerce,
}


];

const ProjectSection = () => (
	<section id="projects" className="py-20 bg-background">
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div className="text-center mb-16">
				<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
					Projets réalisés
				</h2>
				<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
					Quelques exemples de projets concrets développés avec des technologies
					modernes.
				</p>
			</div>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{projects.map((project) => (
					<Card
						key={project.name}
						className="shadow-card hover:shadow-lg transition-all"
					>
						<CardContent className="p-0 flex flex-col h-full">
							<img
								src={project.image}
								alt={project.name}
								className="w-full h-40 object-cover rounded-t-lg mb-4"
							/>
							<div className="p-6 flex flex-col flex-1">
								<div className="flex items-center justify-between mb-2">
									<h3 className="text-xl font-semibold text-primary">
										{project.name}
									</h3>
									<a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
									>
										<ExternalLink className="h-5 w-5 text-accent hover:text-primary" />
									</a>
								</div>
								<p className="text-muted-foreground mb-4 flex-1">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-2 mt-auto">
									{project.technologies.map((tech) => (
										<Badge key={tech} variant="secondary" className="text-xs">
											{tech}
										</Badge>
									))}
								</div>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	</section>
);

export default ProjectSection;
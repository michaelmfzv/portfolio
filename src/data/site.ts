import type { Language } from '../i18n/ui';

export const site = {
  name: 'Michael Fernando Zapata Vargas',
  email: 'michaelmfzv@gmail.com',
  linkedin: 'https://www.linkedin.com/in/michael-zv',
  // Añade la URL real de GitHub cuando quieras mostrar ese enlace.
  github: '',
};

export const technologies = [
  'Kubernetes', 'Docker', 'Proxmox VE', 'VMware', 'GitLab CI/CD',
  'Linux', 'Bash', 'Python', 'Go', 'Podman', 'Ansible', 'Networking',
];

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
}

export const experience: Record<Language, ExperienceEntry[]> = {
  es: [
    {
      role: 'Administrador de Sistemas',
      company: 'PuntoCom SRL',
      period: 'Octubre 2018 — Presente',
      location: 'Santa Cruz, Bolivia',
      summary: 'Administración de infraestructura física, virtual y cloud, con virtualización, contenedores, bases de datos, observabilidad y CI/CD.',
      highlights: [
        'Administración y mantenimiento de la infraestructura tecnológica de la empresa, incluyendo servidores físicos, virtuales y en la nube, hipervisores VMware y Proxmox, y recursos de almacenamiento.',
        'Gestión y mantenimiento de bases de datos SQL y NoSQL.',
        'Operación de servicios de monitoreo para la detección, diagnóstico y prevención de incidentes.',
        'Administración de contenedores y orquestación con Docker, Podman y Kubernetes.',
        'Administración y mantenimiento de repositorios GitLab de los proyectos gestionados por la empresa.',
        'Diseño, implementación y mantenimiento de pipelines de CI/CD.',
      ],
    },
    {
      role: 'Supervisor de Proyecto',
      company: 'Xerobol S.A.',
      period: 'Julio 2018 — Octubre 2018',
      location: 'Santa Cruz, Bolivia',
      summary: 'Supervisión nacional de un proyecto de videovigilancia con cámaras, servidores, fibra óptica y cableado UTP.',
      highlights: [
        'Supervisión de los trabajos realizados para el proyecto de videovigilancia de la Aduana Nacional de Bolivia, incluyendo la instalación y el cableado de cámaras y servidores a nivel nacional.',
        'Supervisión del tendido de fibra óptica y cableado UTP, además del montaje de 137 cámaras, 11 servidores y 13 switches en La Paz, Oruro, Cochabamba y Santa Cruz.',
        'Configuración de cámaras y servidores de acuerdo con las necesidades del cliente.',
      ],
    },
    {
      role: 'Ingeniero de Soporte y Preventa',
      company: 'Telcat Innovations',
      period: 'Diciembre 2016 — Febrero 2018',
      location: 'La Paz, Bolivia',
      summary: 'Soporte postventa y preventa para redes, videovigilancia, telefonía, servidores y virtualización.',
      highlights: [
        'Soporte postventa en redes, sistemas de videovigilancia, telefonía, servidores y plataformas de virtualización.',
        'Participación en labores comerciales de preventa, incluyendo el diseño y la planificación del alcance de proyectos solicitados por clientes.',
        'Capacitación a técnicos en sistemas de telefonía y colaboración en la elaboración de documentos base para licitaciones departamentales y nacionales.',
      ],
    },
  ],
  en: [
    {
      role: 'Systems Administrator',
      company: 'PuntoCom SRL',
      period: 'October 2018 — Present',
      location: 'Santa Cruz, Bolivia',
      summary: 'Administration of physical, virtual, and cloud infrastructure across virtualization, containers, databases, observability, and CI/CD.',
      highlights: [
        'Administer and maintain the company’s technology infrastructure, including physical, virtual, and cloud servers, VMware and Proxmox hypervisors, and storage resources.',
        'Manage and maintain SQL and NoSQL databases.',
        'Operate monitoring services for incident detection, diagnosis, and prevention.',
        'Administer containers and orchestration with Docker, Podman, and Kubernetes.',
        'Administer and maintain GitLab repositories for the projects managed by the company.',
        'Design, implement, and maintain CI/CD pipelines.',
      ],
    },
    {
      role: 'Project Supervisor',
      company: 'Xerobol S.A.',
      period: 'July 2018 — October 2018',
      location: 'Santa Cruz, Bolivia',
      summary: 'Supervised a nationwide video surveillance project involving cameras, servers, fiber optics, and UTP cabling.',
      highlights: [
        'Supervised work for Bolivia’s National Customs surveillance project, including the nationwide installation and cabling of cameras and servers.',
        'Supervised fiber-optic and UTP cabling, as well as the installation of 137 cameras, 11 servers, and 13 switches in La Paz, Oruro, Cochabamba, and Santa Cruz.',
        'Configured cameras and servers according to the client’s requirements.',
      ],
    },
    {
      role: 'Support and Pre-Sales Engineer',
      company: 'Telcat Innovations',
      period: 'December 2016 — February 2018',
      location: 'La Paz, Bolivia',
      summary: 'Post-sales and pre-sales support for networks, video surveillance, telephony, servers, and virtualization.',
      highlights: [
        'Provided post-sales support for networks, video surveillance systems, telephony, servers, and virtualization platforms.',
        'Participated in pre-sales activities, including the design and planning of project scope requested by clients.',
        'Trained technicians in telephony systems and helped prepare bid documents for departmental and national tenders.',
      ],
    },
  ],
  fr: [
    {
      role: 'Administrateur systèmes',
      company: 'PuntoCom SRL',
      period: 'Octobre 2018 — Aujourd’hui',
      location: 'Santa Cruz, Bolivie',
      summary: 'Administration d’infrastructures physiques, virtuelles et cloud, avec virtualisation, conteneurs, bases de données, observabilité et CI/CD.',
      highlights: [
        'Administration et maintenance de l’infrastructure technologique de l’entreprise : serveurs physiques, virtuels et cloud, hyperviseurs VMware et Proxmox, ainsi que ressources de stockage.',
        'Gestion et maintenance de bases de données SQL et NoSQL.',
        'Exploitation de services de supervision pour la détection, le diagnostic et la prévention des incidents.',
        'Administration des conteneurs et de l’orchestration avec Docker, Podman et Kubernetes.',
        'Administration et maintenance des dépôts GitLab des projets gérés par l’entreprise.',
        'Conception, mise en œuvre et maintenance de pipelines CI/CD.',
      ],
    },
    {
      role: 'Superviseur de projet',
      company: 'Xerobol S.A.',
      period: 'Juillet 2018 — Octobre 2018',
      location: 'Santa Cruz, Bolivie',
      summary: 'Supervision nationale d’un projet de vidéosurveillance avec caméras, serveurs, fibre optique et câblage UTP.',
      highlights: [
        'Supervision des travaux du projet de vidéosurveillance de la Douane nationale de Bolivie, notamment l’installation et le câblage de caméras et de serveurs à l’échelle nationale.',
        'Supervision du déploiement de la fibre optique et du câblage UTP, ainsi que de l’installation de 137 caméras, 11 serveurs et 13 switches à La Paz, Oruro, Cochabamba et Santa Cruz.',
        'Configuration des caméras et des serveurs selon les besoins du client.',
      ],
    },
    {
      role: 'Ingénieur support et avant-vente',
      company: 'Telcat Innovations',
      period: 'Décembre 2016 — Février 2018',
      location: 'La Paz, Bolivie',
      summary: 'Support après-vente et avant-vente pour les réseaux, la vidéosurveillance, la téléphonie, les serveurs et la virtualisation.',
      highlights: [
        'Support après-vente pour les réseaux, les systèmes de vidéosurveillance, la téléphonie, les serveurs et les plateformes de virtualisation.',
        'Participation aux activités d’avant-vente, notamment à la conception et à la planification du périmètre des projets demandés par les clients.',
        'Formation de techniciens aux systèmes de téléphonie et contribution à la préparation de documents pour des appels d’offres départementaux et nationaux.',
      ],
    },
  ],
};

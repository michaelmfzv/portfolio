export const languages = ['es', 'en', 'fr'] as const;
export type Language = (typeof languages)[number];

export const roleTitles: Record<Language, string[]> = {
  es: ['Administrador de sistemas', 'Ingeniero DevOps', 'Ingeniero de redes'],
  en: ['Systems Administrator', 'DevOps Engineer', 'Network Engineer'],
  fr: ['Administrateur systèmes', 'Ingénieur DevOps', 'Ingénieur réseaux'],
};

export const ui = {
  es: {
    language: 'Idioma', navHome: 'Inicio', navCases: 'Casos de estudio', emailLabel: 'Correo', viewCv: 'Ver CV', downloadCv: 'Descargar CV', cvPreviewTitle: 'Vista previa del CV', cvClose: 'Cerrar', cvOpenNewTab: 'Abrir en otra pestaña', theme: 'Cambiar tema',
    greeting: 'Hola, soy Michael', role: 'Administrador de sistemas',
    intro: 'Cuento con amplia experiencia administrando y automatizando infraestructura física, virtual y en la nube para mantener servicios fiables y disponibles.',
    intro2: 'Combino administración de sistemas y prácticas DevOps con Linux, VMware, Proxmox, contenedores, Kubernetes y pipelines GitLab CI/CD.',
    technologies: 'Tecnologías', technologiesNote: 'Herramientas que forman parte de mi trabajo diario.',
    experience: 'Experiencia', experienceNote: 'Trayectoria administrando infraestructura, automatización y operaciones técnicas.', viewExperience: 'Ver experiencia completa',
    work: 'Casos de estudio', workNote: 'Análisis técnicos que documentan decisiones, procedimientos y aprendizajes de infraestructura.',
    about: 'Enfoque', aboutText: 'Mi formación en Matemáticas y mi investigación en Teoría de Códigos, incluidos los códigos Reed–Solomon, se conectan con mi interés por la criptografía y la seguridad informática. Esa base alimenta una forma rigurosa de pensar la infraestructura: modelar fallos, reducir supuestos y diseñar sistemas verificables. En mi trabajo administro entornos físicos, virtuales y en la nube, y automatizo operaciones con contenedores y CI/CD.',
    contact: 'Contacto', contactNote: '¿Tienes un reto de infraestructura o automatización? Conversemos.',
    readGuide: 'Leer caso de estudio', draftLabel: 'Ejemplo editorial', footer: 'Infraestructura entendible. Operaciones reproducibles.',
    empty: 'Próximamente publicaré casos de estudio.',
  },
  en: {
    language: 'Language', navHome: 'Home', navCases: 'Case Studies', emailLabel: 'Email', viewCv: 'View CV', downloadCv: 'Download CV', cvPreviewTitle: 'CV preview', cvClose: 'Close', cvOpenNewTab: 'Open in new tab', theme: 'Toggle theme',
    greeting: "Hi, I'm Michael", role: 'Systems Administrator',
    intro: 'I bring extensive experience administering and automating physical, virtual, and cloud infrastructure to keep services reliable and available.',
    intro2: 'I combine systems administration and DevOps practices across Linux, VMware, Proxmox, containers, Kubernetes, and GitLab CI/CD pipelines.',
    technologies: 'Technologies', technologiesNote: 'Tools that are part of my day-to-day work.',
    experience: 'Experience', experienceNote: 'A track record in infrastructure administration, automation, and technical operations.', viewExperience: 'View full experience',
    work: 'Case Studies', workNote: 'Technical analyses documenting infrastructure decisions, procedures, and lessons learned.',
    about: 'Approach', aboutText: 'My mathematics background and research in coding theory, including Reed–Solomon codes, connect with my interest in cryptography and information security. This informs a rigorous approach to infrastructure: model failure, reduce assumptions, and design verifiable systems. I administer physical, virtual, and cloud environments, and automate operations with containers and CI/CD.',
    contact: 'Contact', contactNote: 'Working through an infrastructure or automation challenge? Let’s talk.',
    readGuide: 'Read case study', draftLabel: 'Editorial example', footer: 'Understandable infrastructure. Reproducible operations.',
    empty: 'Technical case studies will be published here soon.',
  },
  fr: {
    language: 'Langue', navHome: 'Accueil', navCases: 'Études de cas', emailLabel: 'E-mail', viewCv: 'Voir le CV', downloadCv: 'Télécharger le CV', cvPreviewTitle: 'Aperçu du CV', cvClose: 'Fermer', cvOpenNewTab: 'Ouvrir dans un nouvel onglet', theme: 'Changer de thème',
    greeting: 'Bonjour, je suis Michael', role: 'Administrateur systèmes',
    intro: 'Je dispose d’une solide expérience dans l’administration et l’automatisation d’infrastructures physiques, virtuelles et cloud afin d’assurer la fiabilité et la disponibilité des services.',
    intro2: 'J’associe l’administration systèmes et les pratiques DevOps autour de Linux, VMware, Proxmox, des conteneurs, Kubernetes et des pipelines GitLab CI/CD.',
    technologies: 'Technologies', technologiesNote: 'Les outils de mon travail quotidien.',
    experience: 'Expérience', experienceNote: 'Parcours dans l’administration d’infrastructures, l’automatisation et les opérations techniques.', viewExperience: 'Voir l’expérience complète',
    work: 'Études de cas', workNote: 'Analyses techniques documentant les décisions, les procédures et les enseignements en infrastructure.',
    about: 'Approche', aboutText: 'Ma formation en mathématiques et mes recherches en théorie des codes, notamment sur les codes de Reed–Solomon, rejoignent mon intérêt pour la cryptographie et la sécurité informatique. Cette base nourrit une approche rigoureuse de l’infrastructure : modéliser les défaillances, réduire les hypothèses et concevoir des systèmes vérifiables. J’administre des environnements physiques, virtuels et cloud, et automatise les opérations avec des conteneurs et le CI/CD.',
    contact: 'Contact', contactNote: 'Un défi d’infrastructure ou d’automatisation ? Parlons-en.',
    readGuide: 'Lire l’étude de cas', draftLabel: 'Exemple éditorial', footer: 'Une infrastructure compréhensible. Des opérations reproductibles.',
    empty: 'Des études de cas techniques seront bientôt publiées ici.',
  },
} satisfies Record<Language, Record<string, string>>;

export function getLangFromUrl(url: URL): Language {
  const segment = url.pathname.split('/')[1];
  return languages.includes(segment as Language) ? segment as Language : 'es';
}

export function localizedPath(lang: Language, path = ''): string {
  const clean = path.replace(/^\//, '');
  return lang === 'es' ? `/${clean}` : `/${lang}/${clean}`;
}

export const languages = ['es', 'en', 'fr'] as const;
export type Language = (typeof languages)[number];

export const ui = {
  es: {
    language: 'Idioma', navHome: 'Inicio', navGuides: 'Guías', theme: 'Cambiar tema',
    greeting: 'Hola, soy Michael', role: 'Administrador de Sistemas · DevOps Engineer',
    intro: 'Diseño y opero infraestructura tecnológica con una mirada analítica, formada en matemáticas.',
    intro2: 'Convierto sistemas complejos en plataformas observables, automatizadas y preparadas para alta disponibilidad.',
    stack: 'Tecnologías', stackNote: 'Herramientas que forman parte de mi trabajo diario.',
    work: 'Notas de arquitectura', workNote: 'Guías y casos técnicos para documentar decisiones, procedimientos y aprendizajes.',
    about: 'Enfoque', aboutText: 'Mi formación en Matemáticas y mi investigación en Teoría de Códigos, incluidos los códigos Reed–Solomon, se conectan con mi interés por la criptografía y la seguridad informática. Esa base alimenta una forma rigurosa de pensar la infraestructura: modelar fallos, reducir supuestos y diseñar sistemas verificables. En mi trabajo administro entornos físicos, virtuales y en la nube, y automatizo operaciones con contenedores y CI/CD.',
    contact: 'Contacto', contactNote: '¿Tienes un reto de infraestructura o automatización? Conversemos.',
    readGuide: 'Leer guía', draftLabel: 'Ejemplo editorial', footer: 'Infraestructura entendible. Operaciones reproducibles.',
    empty: 'Próximamente publicaré guías técnicas.',
  },
  en: {
    language: 'Language', navHome: 'Home', navGuides: 'Guides', theme: 'Toggle theme',
    greeting: "Hi, I'm Michael", role: 'Systems Administrator · DevOps Engineer',
    intro: 'I design and operate technology infrastructure with an analytical perspective grounded in mathematics.',
    intro2: 'I turn complex systems into observable, automated platforms built for high availability.',
    stack: 'Technology', stackNote: 'Tools that are part of my day-to-day work.',
    work: 'Architecture notes', workNote: 'Guides and technical case studies documenting decisions, procedures, and lessons learned.',
    about: 'Approach', aboutText: 'My mathematics background and research in coding theory, including Reed–Solomon codes, connect with my interest in cryptography and information security. This informs a rigorous approach to infrastructure: model failure, reduce assumptions, and design verifiable systems. I administer physical, virtual, and cloud environments, and automate operations with containers and CI/CD.',
    contact: 'Contact', contactNote: 'Working through an infrastructure or automation challenge? Let’s talk.',
    readGuide: 'Read guide', draftLabel: 'Editorial example', footer: 'Understandable infrastructure. Reproducible operations.',
    empty: 'Technical guides will be published here soon.',
  },
  fr: {
    language: 'Langue', navHome: 'Accueil', navGuides: 'Guides', theme: 'Changer de thème',
    greeting: 'Bonjour, je suis Michael', role: 'Administrateur systèmes · Ingénieur DevOps',
    intro: 'Je conçois et exploite des infrastructures technologiques avec une approche analytique issue des mathématiques.',
    intro2: 'Je transforme des systèmes complexes en plateformes observables, automatisées et conçues pour la haute disponibilité.',
    stack: 'Technologies', stackNote: 'Les outils de mon travail quotidien.',
    work: 'Notes d’architecture', workNote: 'Guides et études techniques documentant décisions, procédures et enseignements.',
    about: 'Approche', aboutText: 'Ma formation en mathématiques et mes recherches en théorie des codes, notamment sur les codes de Reed–Solomon, rejoignent mon intérêt pour la cryptographie et la sécurité informatique. Cette base nourrit une approche rigoureuse de l’infrastructure : modéliser les défaillances, réduire les hypothèses et concevoir des systèmes vérifiables. J’administre des environnements physiques, virtuels et cloud, et automatise les opérations avec des conteneurs et le CI/CD.',
    contact: 'Contact', contactNote: 'Un défi d’infrastructure ou d’automatisation ? Parlons-en.',
    readGuide: 'Lire le guide', draftLabel: 'Exemple éditorial', footer: 'Une infrastructure compréhensible. Des opérations reproductibles.',
    empty: 'Des guides techniques seront bientôt publiés ici.',
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

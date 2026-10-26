// Edit this file: both pages read from it.

export const person = {
  name: 'Heiko Mattern',
  role: 'Senior Developer',
  location: 'Berlin',
  email: 'matternheiko@gmail.com',
  photo: '/heiko.jpg',
  links: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/heiko-mattern-1b153372/' }],
  intro:
    'Frontend-Entwickler mit über 13 Jahren Erfahrung in React, Next.js und Angular. Ich baue E-Commerce-Plattformen und Web-Anwendungen, die schnell, getestet und gut zu bedienen sind.',
  nutshell: [
    '13+ Jahre Berufserfahrung',
    'Fokus auf Frontend-Web-Entwicklung mit modernen Frameworks (React, Next.js, Angular)',
    'Agil (Scrum, Kanban)',
    'Design und UI/UX affin',
    'Kommunikativ, verantwortungsbewusst, vorausschauend',
  ],
};

export const technologies = [
  'React', 'Next.js', 'Vercel', 'GitLab', 'HTML5', 'CSS3', 'TypeScript', 'PHP', 'Java',
  'Spring Boot', 'JavaScript', 'Docker', 'Git', 'Tailwind', 'Vitest', 'Cypress', 'Symfony',
  'Storybook', 'Spryker', 'GraphQL',
];

export const tools = ['Jira', 'JetBrains'];

export const languages = [
  { name: 'Deutsch', level: 'Muttersprache' },
  { name: 'Englisch', level: 'Fließend' },
  { name: 'Spanisch, Französisch', level: 'Grundkenntnisse' },
];

export const experience = [
  {
    dates: '08/2021 – 06/2024',
    title: 'Senior Developer',
    org: 'Turbine Kreuzberg',
    href: 'https://turbinekreuzberg.com',
    place: 'Berlin',
    about: 'Digitalagentur für eCommerce',
    tech: 'React, Next.js, GraphQL, GitLab, Cypress, PHP, Spryker, Docker',
    points: [
      'B2B/B2C-Projekte mit Frontend-Fokus',
      'CI/CD-Pipelines mit GitLab/Jenkins',
      'E2E-Tests für Customer Flows',
      'Betreuung/Anleitung von Junior-Developer:innen',
    ],
  },
  {
    dates: '01/2020 – 08/2020',
    title: 'Lead Frontend Developer',
    org: 'simpleshow GmbH',
    href: 'https://simpleshow.com',
    place: 'Berlin',
    about: 'Digitalagentur für Explainer-Video',
    tech: 'AngularJS, Angular, Redux, Jenkins, Docker',
    points: [
      'Leitung eines Teams von 5 Entwickler:innen',
      'Weiterentwicklung und Launch V2 des Video-Editors',
      'Betreuung des Release-Zyklus',
    ],
  },
  {
    dates: '01/2018 – 12/2019',
    title: 'Professional Developer',
    org: 'Deutsche Post DHL IT Services GmbH',
    href: 'https://group.dhl.com/en/about-us/corporate-divisions/it-services.html',
    place: 'Berlin',
    about: 'IT-Dienstleister der Deutsche Post DHL Group',
    tech: 'Java, Spring Boot, Angular, TeamCity',
    points: [
      'Entwicklung einer neuen Registrierung für das E-Post-Produkt',
      'Optimierung des Upgradeprozesses für bestehende User:innen',
      'Pflege, Monitoring, Bugfixing und Testing von 6 Microservices',
      'Weiterentwicklung des hauseigenen Fleet-Managements',
    ],
  },
  {
    dates: '06/2014 – 12/2017',
    title: 'Professional Developer',
    org: 'Amboss GmbH',
    href: 'https://www.amboss.com/',
    place: 'Köln',
    about: 'Lernsoftware für Medizin-Studenten und Ärzte',
    tech: 'PHP, Symfony, MySQL, JavaScript, Composer, Doctrine, jQuery',
    points: [
      'Entwicklung und Launch der Kliniksuche STEIGBÜGEL',
      'Internationalisierung und Implementierung der Mandantenfähigkeit von AMBOSS',
      'Import von Klinikdaten, Weiterbildungsberechtigungen, Stellenanzeigen',
      'Betreuung des Newsletters (Styling/Versand)',
    ],
  },
  {
    dates: '03/2012 – 12/2013',
    title: 'Junior Developer',
    org: 'oarcIT GmbH',
    href: 'https://www.parcit.de',
    place: 'Köln',
    about: 'Software für Risikomanagement und Controlling',
    tech: 'Java, Swing, Ant',
    points: ['Import, Anzeige und Bearbeitung von Marktdaten'],
  },
  {
    dates: '06/2011 – 02/2012',
    title: 'Praktikant / Junior Developer',
    org: 'wergehthin',
    place: 'Köln',
    about: 'Eventsite für Köln und Berlin',
    tech: 'PHP, Drupal, jQuery',
    points: ['Migration einer Custom-Event-Seite nach Drupal'],
  },
];

export const education = [
  {
    dates: '09/2007 – 05/2011',
    title: 'Bachelor of Science, Mathematik',
    org: 'Ruhr-Universität Bochum',
    detail: 'Abschlussnote 2,2. Nebenfach Informatik. Bachelorarbeit: The probabilistic method with applications in additive combinatorics.',
  },
  {
    dates: '09/2006 – 06/2007',
    title: 'Leaving Certificate',
    org: 'Colaiste Stiofain Naofa, Cork (Irland)',
    detail: 'Äquivalent zum deutschen Abitur.',
  },
];

export default {
  metadata: {
    title: 'A propos',
    description: 'Lorem ipsum dolor sit amet',
  },
  header: {
    title: 'A propos de pedaki',
    description: 'Page qui regroupe nos assets et informations sur pedaki.',
  },
  aboutUs: {
    title: 'A propos',
    paragraphs: {
      projectStartedFor: {
        1: 'Ce projet a été initialisé par 3 étudiants de',
        2: "en 2023 en tant que projet de fin d'études.",
      },
      learnMore:
        'Pour en savoir plus sur le projet, vous pouvez consulter les articles sur notre documentation',
    },
    viewArticles: 'Voir les articles',
    students: {
      vahor: { description: "Expert en système d'information" },
      avan0x: { description: "Expert en système d'information" },
      alexpiquard: { description: "Expert en système d'information" },
    },
  },
  assets: {
    title: 'Assets',
    paragraphs: {
      assetsAvailable:
        'Tous nos assets sont à votre disposiion, la seule chose que nous vous demandons est de nous citer si vous les utilisez, et de ne pas les modifier.',
    },
    images: {
      logoDark: { title: 'Logo', alt: 'Le logo de pedaki' },
      logoLight: { title: 'Logo', alt: 'Le logo de pedaki' },
      logo: { title: 'Logo', alt: 'Icon' },
    },
  },
  brandColors: {
    title: 'Couleurs de la marque',
    paragraphs: {
      description: {
        1: 'Les couleurs de notre marque sont les suivantes, vous pouvez les voir en action sur notre site web.',
        2: 'Chaque couleur à plusieurs nuances, mais celles-ci sont les principales.',
      },
    },
    colors: {
      orange: { title: 'Orange', tooltip: "Couleur d'accentuation" },
      brownOrange: {
        title: 'Orange-brun',
        tooltip: 'Utilisé pour les ombres et effets où le orange est déjà présent',
      },
      darkGreen: { title: 'Vert foncé', tooltip: 'Vert utilisé dans le logo' },
      lightGray: {
        title: 'Gris clair',
        tooltip: 'Gris utilisé pour mettre en avant les éléments comme celui-ci',
      },
      darkGray: { title: 'Gris foncé', tooltip: 'Couleur de texte principale' },
    },
  },
  fonts: {
    title: 'Polices',
    paragraphs: {
      description: 'Les polices utilisées sur notre site web sont les suivantes.',
    },
    fonts: {
      openSans: {
        description: 'Police utilisée sur la majorité du site',
        content:
          "Somebody once told me\nThe world is gonna roll me\nI ain't the sharpest tool in the shed",
      },
      firaCode: {
        description: 'Police utilisée pour les éléments de code',
        content:
          "She was looking kind of dumb\nWith her finger and her thumb\nIn the shape of an 'L' on her forehead",
      },
    },
  },
  naming: {
    title: 'Le nom',
    paragraphs: {
      description:
        "Là on explique ce qu'est le nom, comment il se dit, comment il s'écrit (en minuscule “pedaki“ et pas “Pedaki“ par exemple). Faudrait le respecter aussi, pas comme sur cette page.",
    },
  },
} as const;

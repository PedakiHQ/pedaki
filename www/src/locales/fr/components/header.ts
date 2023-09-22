export default {
  auth: {
    login: 'Connexion',
    logout: 'Déconnexion',
  },
  toast: {
    logoutSuccess: 'Déconnexion réussie',
  },
  user: {
    profile: 'Profil',
    dashboard: 'Dashboard',
  },
  navigation: {
    modules: {
      label: 'Modules',
      children: {
        management: {
          label: 'Gestion de classes 1',
          description: 'About the project',
        },
      },
    },
    resources: {
      label: 'Modules',
      children: {
        pricing: {
          label: 'Pricing',
          description: 'Here comes the money',
        },
        about: {
          label: 'About',
          description: 'About the project',
        },
      },
    },
    docs: {
      label: 'Documentation',
      children: {
        changelog: {
          label: 'Changelog',
          description: 'Voir les notes de version',
        },
        roadmap: {
          label: 'Roadmap',
          description: 'Voir la feuille de route',
        },
        faq: {
          label: 'FAQ',
          description: 'Voir les questions fréquentes',
        },
        post: {
          label: 'Posts',
          description: 'Voir les articles',
        },
      },
    },
  },
} as const;

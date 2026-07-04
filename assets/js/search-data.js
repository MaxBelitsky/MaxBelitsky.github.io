// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "projects-cross-lingual-subnetworks",
          title: 'Cross-Lingual Subnetworks',
          description: "Investigating cross-lingual subnetworks in multilingual models",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cross_lingual_subnetworks/";
            },},{id: "projects-exploring-monotonicity-in-early-exiting-language-models",
          title: 'Exploring Monotonicity in Early-Exiting Language Models',
          description: "Investigating the monotonicity assumption in early-exiting methods.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/early_exiting/";
            },},{id: "projects-ibm-consulting-advantage",
          title: 'IBM Consulting Advantage',
          description: "AI-powered delivery platform to accelerate value creation at scale.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ica/";
            },},{id: "projects-learning-sentence-representations-with-nli",
          title: 'Learning Sentence Representations with NLI',
          description: "Reproduction of the results from &quot;Supervised Learning of Universal Sentence Representations from Natural Language Inference Data&quot; paper by Conneau et al. (2018).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/learning_representations/";
            },},{id: "projects-philyra-ai-augmented-perfumery",
          title: 'Philyra: AI-augmented Perfumery',
          description: "AI tool for fragrance generation and enhancement.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/philyra/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/MaxBelitsky", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/max-belitsky", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/mbelitsky1", "_blank");
        },
      },{
        id: 'social-hugging_face',
        title: 'Hugging_face',
        section: 'Socials',
        handler: () => {
          window.open("https://huggingface.co/mbelitsky", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

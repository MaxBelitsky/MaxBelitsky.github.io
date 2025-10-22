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
        },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "projects-cross-lingual-subnetworks",
          title: 'Cross-Lingual Subnetworks',
          description: "Investigating cross-lingual subnetworks in multilingual models",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cross_lingual_subnetworks/";
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
            },},{id: "projects-philyra-ai-agumented-perfumery",
          title: 'Philyra: AI-agumented Perfumery',
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

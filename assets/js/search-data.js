// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-",
    title: "",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-conferences-and-talks",
          title: "Conferences and Talks",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Teaching/";
          },
        },{id: "conferences-biracks-and-biquandles-theory-applications-and-new-perspectives-algebra-and-representation-theory-in-the-north-leeds-uk",
          title: 'Biracks and Biquandles: Theory, applications, and new perspectives - Algebra and Representation Theory...',
          description: "",
          section: "Conferences",},{id: "conferences-introduction-to-modern-advances-in-algebra-2025-manchester-uk",
          title: 'Introduction to Modern Advances in Algebra 2025, Manchester, UK',
          description: "",
          section: "Conferences",},{id: "conferencesorganised-university-of-leeds-som-pgr-conference-leeds-uk",
          title: 'University of Leeds SoM PGR Conference, Leeds, UK',
          description: "",
          section: "Conferencesorganised",},{id: "news-pure-pgr-seminar-university-of-leeds-uk",
          title: 'Pure PGR Seminar, University of Leeds, UK',
          description: "",
          section: "News",},{id: "news-the-interplay-between-skew-braces-and-hopf-galois-theory-university-of-leeds-uk",
          title: 'The Interplay Between Skew Braces and Hopf-Galois Theory, University of Leeds, UK.',
          description: "",
          section: "News",},{id: "news-the-yang-baxter-equation-and-all-that-bedlewo-poland",
          title: 'The Yang Baxter Equation and all that, Bedlewo, Poland.',
          description: "",
          section: "News",},{
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

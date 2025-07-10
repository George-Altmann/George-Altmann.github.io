// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
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
        },{id: "conferences-artin-algebra-and-representation-theory-in-the-north-biracks-and-biquandles-theory-applications-and-new-perspectives-leeds-uk",
          title: 'ARTIN (Algebra and Representation Theory in the North) - Biracks and Biquandles: Theory,...',
          description: "",
          section: "Conferences",},{id: "conferences-itmaia-2025-introduction-to-modern-advances-in-algebra-manchester-uk",
          title: 'ITMAIA 2025 (Introduction to Modern Advances in Algebra), Manchester, UK',
          description: "",
          section: "Conferences",},{id: "news-pure-mathematics-postgraduate-seminar-university-of-leeds-uk",
          title: 'Pure Mathematics Postgraduate Seminar, University of Leeds, UK',
          description: "",
          section: "News",},{id: "news-the-interplay-between-skew-braces-and-hopf-galois-theory-university-of-leeds-uk",
          title: 'The Interplay Between Skew Braces and Hopf-Galois Theory, University of Leeds, UK.',
          description: "",
          section: "News",},{id: "news-the-yang-baxter-equation-and-all-that-będlewo-poland",
          title: 'The Yang Baxter Equation and all that, Będlewo, Poland.',
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

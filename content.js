/*
  ==================================================================
  YOUR WEBSITE CONTENT
  ==================================================================
  This is the first file to edit when personalising the website.
  Change text, links, and items here instead of searching through the
  page structure. Each item inside a list becomes one card automatically.

  Helpful link examples:
  - GitHub:   "https://github.com/your-username/project-name"
  - PDF file: "assets/documents/my-notes.pdf"
  - A page:   "https://example.com"
*/

window.siteContent = {
  // Basic information used in the navigation, footer, and contact section.
  person: {
    name: "Raj Gaurav Tripathi",
    initials: "YN",
    email: "rajgauravmirp@gmail.com",
    heroSummary:
      "I study the universe at its largest scales—from its earliest moments to the structures that emerge across cosmic time.",
    introduction: [
      "I am a master’s student fascinated by the deep connections between fundamental physics, gravitation, and the evolving universe.",
      "This space collects the questions I am pursuing, the work I have done, and the ideas I am still learning to articulate."
    ]
  },

  // Keep this to two or three compact paragraphs for the strongest presentation.
  about: [
    "I am currently completing my master’s degree in physics, with a growing focus on cosmology and theoretical astrophysics. I enjoy approaching broad questions with both mathematical care and a genuine sense of wonder.",
    "My academic interests include the early universe, large-scale structure, dark matter and dark energy, and the ways theory can be tested through astronomical observation. I am preparing for doctoral study and am eager to contribute to a research environment where rigorous thinking and open collaboration meet."
  ],

  // These three facts appear in the About section. Adjust them to your own profile.
  facts: [
    { label: "Current study", value: "M.Sc. Physics · [Your University]" },
    { label: "Academic focus", value: "Cosmology & theoretical astrophysics" },
    { label: "Seeking", value: "PhD opportunities · [Year / intake]" }
  ],

  // Add, remove, or reorder interests freely. Three items look best on desktop.
  research: [
    {
      title: "The early universe",
      description: "Inflation, primordial fluctuations, and the physical conditions that set the stage for cosmic structure."
    },
    {
      title: "Dark sector physics",
      description: "The nature of dark matter and dark energy, and the observational signatures that may help constrain them."
    },
    {
      title: "Cosmic structure",
      description: "How galaxies and matter distributions evolve, and what large-scale patterns reveal about fundamental physics."
    }
  ],

  /*
    Featured work. The first two projects are deliberately a little wider on a
    desktop screen. "link" may point to a GitHub project, PDF, Google Drive file,
    or an external website. Use "#" until the destination is ready.
  */
  projects: [
    {
      type: "Research project",
      title: "[Your dissertation or research project title]",
      description: "A concise two-sentence summary of your question, your approach, and what the project taught you.",
      link: "#",
      linkLabel: "Project details"
    },
    {
      type: "Summer internship",
      title: "[Your internship title]",
      description: "Describe the research group, the problem you worked on, and any computational, analytical, or collaborative skills you developed.",
      link: "#",
      linkLabel: "View internship work"
    },
    {
      type: "Typed notes",
      title: "Cosmology study notes",
      description: "A carefully organised collection of notes on topics such as general relativity, inflation, and observational cosmology.",
      link: "#",
      linkLabel: "Read the notes"
    },
    {
      type: "Computational work",
      title: "[Your coding project]",
      description: "Share a simulation, data analysis notebook, visualisation, or other computational exploration here.",
      link: "#",
      linkLabel: "Explore project"
    },
    {
      type: "Coursework",
      title: "[A project you are proud of]",
      description: "A short overview of another substantial piece of work you would like prospective supervisors to see.",
      link: "#",
      linkLabel: "View project"
    }
  ],

  // Start with drafts or remove this list until you are ready to publish writing.
  blog: [
    {
      date: "Coming soon",
      title: "Reading the universe through its oldest light",
      description: "An accessible reflection on a cosmology concept you have been studying.",
      link: "#"
    },
    {
      date: "Coming soon",
      title: "What I am learning from general relativity",
      description: "A personal set of notes on a difficult idea, written clearly for a fellow student.",
      link: "#"
    },
    {
      date: "Coming soon",
      title: "The patience of research",
      description: "A short essay about the questions, methods, or moments that keep you motivated.",
      link: "#"
    }
  ],

  // Set an empty array [] to hide these links until your profiles are ready.
  social: [
    { label: "GitHub", url: "https://github.com/your-username" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/your-profile" },
    { label: "Google Scholar", url: "https://scholar.google.com/" }
  ]
};

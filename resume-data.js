const profile = {
  name: "Jawad Mustafa",
  role: "Software Architect at Oalta",
  location: "Tallinn, Estonia",
  email: "jawadmustafa571@gmail.com",
  links: {
    GitHub: "https://github.com/jawad571",
    LinkedIn: "https://www.linkedin.com/in/jawad57/",
    ORCID: "https://orcid.org/0009-0002-0979-6458"
  },
  lede: "I build and run distributed backend systems, and I'm interested in how we can trust them: verifying the state, outputs and changes that cloud systems produce.",
  about: "I own DevOps and compliance (SOC 2, GDPR, HIPAA) at Oalta, and have spent four years shipping backends, Kubernetes infrastructure and ML pipelines. Alongside industry work I do research in model-driven reverse engineering, with a focus on validating LLM-generated artifacts against deterministic baselines."
};

const resumeData = {
  publications: [
    {
      title: "Measure What Survives: When Model Vocabulary Outlives Generated Code",
      authors: "Artur Boronat, Jawad Mustafa, Fola-Dami Eyitemi",
      venue: "MODELS 2026, NIER Track",
      year: "2026",
      link: "https://doi.org/10.1145/3822455.3838784"
    },
    {
      title: "MDRE-LLM: A Tool for Analyzing and Applying LLMs in Software Reverse Engineering",
      authors: "Artur Boronat, Jawad Mustafa",
      venue: "SANER 2025, Tool Track",
      year: "2025",
      link: "https://figshare.le.ac.uk/articles/journal_contribution/MDRE-LLM_A_Tool_for_Analyzing_and_Applying_LLMs_in_Software_Reverse_Engineering/28184441"
    }
  ],
  experience: [
    { title: "Software Architect", org: "Oalta Services", place: "Tallinn", dates: "Apr 2026 – present", points: [
      "Own DevOps and ensure SOC 2, GDPR and HIPAA compliance across infrastructure and code for every project.",
      "Set guardrails for using AI in software delivery; lead technical discussions and demos with clients."
    ]},
    { title: "Senior Software Engineer", org: "University of Leicester", place: "Leicester", dates: "May 2025 – Apr 2026", points: [
      "Migrated P-STEP, a healthcare app for people with long-term conditions, from Jetpack Compose to Kotlin Multiplatform.",
      "Integrated wearable devices through the Terra API."
    ]},
    { title: "Senior Software Engineer (contract)", org: "Jeeny", place: "Riyadh, remote", dates: "Sep 2024 – Apr 2026", points: [
      "Built a new B2B portal in React/TypeScript and a NestJS service bridging it to the core API.",
      "Helped sign three clients for the new vertical, worth about $300k in annual revenue."
    ]},
    { title: "Tech Lead", org: "Brandpa", place: "Remote", dates: "Apr – Sep 2024", points: [
      "Led two developers building <a href=\"https://mosaicbeat.com/\">MosaicBeat</a>, a tech news delivery system.",
      "Ran Flask microservices and crawlers on Kubernetes (MicroK8s on EC2), connected through a Redis queue."
    ]},
    { title: "Software Engineer II", org: "10Pearls", place: "Karachi", dates: "Jun 2022 – Sep 2023", points: [
      "Automated model training in the ML pipeline, cutting two hours from each run.",
      "Built a back-testing framework for the recommendation engine and an AWS CodePipeline CI/CD flow for E2E tests."
    ]},
    { title: "Research Assistant", org: "IBA Karachi", place: "Karachi", dates: "Oct 2021 – Jan 2022", points: [
      "Migrated a production chatbot from RASA to core Python, reducing server load."
    ]}
  ],
  projects: [
    { title: "Distributed private cloud", link: "projects/whiteboard/index.html", context: "MSc, University of Leicester",
      text: "An AP-oriented private cloud on Kubernetes over Vagrant-managed VMs, with Redis-backed shared state and an eventually consistent whiteboard app." },
    { title: "ComparIT", link: "https://com-parit.github.io/", context: "MSc thesis",
      text: "An extensible metamodel comparison framework for model-driven reverse engineering research, with hashing-based and raw comparison algorithms and a YAMTL-built evaluation dataset." },
    { title: "Entrymapper business landscape analyzer", link: "", context: "Led a team of three",
      text: "Next.js, NestJS/Postgres and a FastAPI RAG service giving an R&D team access to statistical data. I designed the RAG service and backend architecture." },
    { title: "Leftover food delivery", link: "https://github.com/RHAPakistan", context: "Robinhood Army & IBA Karachi",
      text: "Three client apps and a server with real-time socket updates, automating food redistribution for an NGO." }
  ],
  education: [
    { degree: "MSc Advanced Computer Science, Distinction (84%)", org: "University of Leicester", dates: "2023 – 2024",
      note: "Best Student and Best Technical Project on MSc Computer Science. Thesis on model comparison for model-driven reverse engineering." },
    { degree: "BS Computer Science, CGPA 3.58", org: "IBA Karachi", dates: "2018 – 2022",
      note: "Dean's List, full merit scholarship." }
  ],
  awards: [
    "Best Student, MSc Computer Science, University of Leicester (2024)",
    "Best Technical Project, MSc Computer Science, University of Leicester (2024)",
    "Science and Engineering International Merit Scholarship, University of Leicester (2023)",
    "Dean's List, IBA Karachi (2022)",
    "Full merit scholarships, Sindh Endowment (2020) and Whales College (2018)"
  ],
  volunteering: [
    "Research intern, Youth Center for Research: surveyed sustainability in the curricula of five Pakistani universities (2019)",
    "Teaching volunteer, Robinhood Army: taught science to 15 children (2019)",
    "Volunteer, Sindh Institute of Urology and Transplantation (2015–16)"
  ]
};

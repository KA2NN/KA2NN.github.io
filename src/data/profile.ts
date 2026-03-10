// src/data/profile.ts

import { Links } from "react-router-dom";

export type ContactsItem = {
  email: string,
  github: string,
  telegram: string,
  linkedin: string,
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
};

export type ProjectItem = {
  name: string;
  description: string;
  stack: string[];
  links?: { label: string; href: string }[];
};

export type ProfileItem = {
  name: string;
  title: string;
  about: string[];
  skills: string;
  contacts: ContactsItem;
  experience: ExperienceItem[];
  projects: ProjectItem[];
};

export const profile = {
  // name: "Igor Kondurov",
  name: "Igor",
  title: "Senior QA Engineer / SDET · 5 yrs · Python · TypeScript · API · CI/CD",
  about: [
    "Lead QA Engineer with 5+ years in high-load systems (up to 200K RPS). I build processes that prevent bugs, not just catch them. Experienced in functional, API, and performance testing, team leadership (up to 9 people), and test automation. Open-source enthusiast.",
    "Early in my career, a single wrong terminal command halted an airport for two hours. Nobody was hurt — but I learned a lesson no course can teach. Since then, I treat every release like it matters. Because it does.",
  ],
  skills: [
    "Python",
    "PyTest",
    "Playwright",
    "TypeScript",
    "JavaScript",
    "Postman",
    "REST API",
    "SQL",
    "ClickHouse",
    "Redis",
    "CI/CD",
    "Linux",
    "Bash",
    "Git",
    "Docker",
    "Grafana",
    "Graylog",
    "K6",
    "Charles Proxy",
    "Allure"
  ],
  contacts: {
    email: "mrcosha6@gmail.com",
    github: "KA2NN",
    telegram: "ProQAzhennyi",
    linkedin: "igor-kondurov-022939228",
  },
  experience: [
    {
      company: "ProfIT Family",
      role: "Senior QA Engineer",
      period: "2022 — present",
      bullets: [
        "Led QA for a DSP platform handling up to 200K RPS in real-time bidding",
        "Built and maintained API/UI automation framework (PyTest, Playwright, Allure)",
        "Implemented Shift Left Testing and fully automated regression & smoke for critical products",
        "Set up monitoring scripts and alerting dashboards in Grafana for key business metrics",
        "Designed hiring, onboarding, and training workflows; managed a team of 9",
        "Improved SDLC processes, release stability, and cross-team documentation standards",
      ],
    },
    {
      company: "MedCloud",
      role: "QA Engineer",
      period: "2021 — 2022",
      bullets: [
        "Tested a medical CRM integration platform processing up to 20K RPS",
        "Built test coverage from scratch: test cases, checklists, regression and smoke suites",
        "Conducted functional, e2e, and integration testing across API and web layers",
        "Established the QA process and onboarding flow within the Scrum team",
      ],
    },
  ],
  projects: [
    {
      name: "DSP Platform QA — RTB at 200K RPS",
      description:
        "End-to-end QA ownership of a Demand-Side Platform for real-time ad bidding. Covered integrations with SSP, DMP, and trackers. Built test strategy, automated regression and smoke suites, and set up incident monitoring before users noticed anything.",
      impact: "Regression & smoke fully automated for all critical flows",
      role: "Senior QA Engineer",
      type: "work",
      stack: ["Python", "PyTest", "Playwright", "K6", "Grafana", "Graylog", "ClickHouse", "Docker"],
    },
    {
      name: "LATAM & EU Market Launch",
      description:
        "QA lead for launching two new geographic directions. Coordinated testing across backend, integrations, and client-facing surfaces. Defined release criteria and sign-off process from scratch.",
      impact: "Both directions launched on schedule with no critical post-release incidents",
      role: "Senior QA Engineer",
      type: "work",
      stack: ["Postman", "Jira", "Confluence", "Charles Proxy", "SQL"],
    },
    {
      name: "PUSH, POPUNDER Integrations & Client Dashboard",
      description:
        "Full QA cycle for two product features shipped from zero: a new client cabinet and a PUSH notification integration layer. Wrote test plans, coordinated with dev and product, managed pre-release sign-off.",
      role: "Lead QA",
      type: "work",
      stack: ["REST API", "Postman", "Swagger", "Allure", "PyTest"],
    },
    {
      name: "2nd Line Technical Support",
      description:
        "Designed and launched a second support tier that intercepts and resolves product incidents before they escalate to the dev team. Standardized ticket flow, built a knowledge base, and introduced retrospective reviews of recurring issues.",
      impact: "Measurably reduced dev team interruptions from product-level incidents",
      role: "Lead QA",
      type: "work",
      stack: ["Jira", "Confluence", "JQL", "Jira Automation", "Jira Dashboards"],
    },
    {
      name: "Security & Access Management",
      description:
        "Audited and restructured the product's access control system. Introduced 1Password company-wide, built an account inventory, and closed open vulnerabilities identified during the audit.",
      role: "QA Engineer",
      type: "work",
      stack: ["1Password", "Bash", "SSH", "Linux"],
    },
    {
      name: "Hiring & Onboarding System",
      description:
        "Built the full QA hiring pipeline from scratch: job profiles, interview scorecards, onboarding checklists, and a mentorship track. Grew and managed a team of 9.",
      impact: "Reduced new hire ramp-up time, standardized team knowledge transfer",
      role: "Lead QA",
      type: "work",
      stack: ["Confluence", "Jira", "HuntFlow"],
    },
    {
      name: "Medical CRM Integration Platform",
      description:
        "Built QA process from zero at a healthcare integration platform processing 20K RPS. Connected EMR, HMS, LIS, and PMS systems. Introduced regression/smoke suites, release tracking, and cross-team knowledge sharing.",
      role: "QA Engineer",
      type: "work",
      stack: ["Postman", "SQL", "MariaDB", "Charles Proxy", "Jira", "TestRail"],
    },
  ],
};
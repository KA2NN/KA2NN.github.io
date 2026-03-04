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
  name: "Igor Kondurov",
  title: "Senior QA Engineer • Automation • API • SQL",
  about: [
    "Я QA, который закрывает риски релиза через автоматизацию, мониторинги и нормальную диагностику.",
    "Делаю тестовую инфраструктуру, понимаю API/SQL и люблю, когда баги умирают быстро.",
  ],
  skills: [
    "Python",
    "PyTest",
    "Playwright",
    "Postman",
    "SQL / ClickHouse",
    "CI/CD",
    "Docker",
    "Grafana / Graylog",
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
      period: "2022 — now",
      bullets: [
        "Автоматизация API/UI тестов и мониторингов",
        "Работа с SQL/ClickHouse и диагностика инцидентов",,
        "CI/CD и стабильность релизов",
      ],
    },
    {
      company: "MedCloud",
      role: "QA Engineer",
      period: "2021 — 2022",
      bullets: ["Тестирование web/API", "Регресс/смоук", "Документация багов"],
    },
  ],
  projects: [
    {
      name: "Monitoring & Alerts",
      description: "Набор мониторингов и алертов, которые ловят деградации до пользователей.",
      stack: ["Python", "PyTest", "Grafana", "Slack"],
    },
    {
      name: "API Test Framework",
      description: "Каркас автотестов для API с понятной структурой и отчётами.",
      stack: ["Python", "PyTest", "Allure"],
    },
  ],
};
import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title: "HematoAtlas",
  description:
    "Interactive platform for language learning with lessons, quizzes, and progress tracking.",
  authors: {
    name: "Bruno Batista e Davi Rodrigues",
    url: "/",
  },
} as const;

export const links = {
  sourceCode: "/",
} as const;

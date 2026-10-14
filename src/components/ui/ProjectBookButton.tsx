"use client";

import { useState } from "react";
import { ExperienceItem } from "@/types/portfolio";
import { sectionCopy } from "@/data/portfolioData";
import { CredentialBook } from "./CredentialBook";

export function ProjectBookButton({ project }: { project: ExperienceItem }) {
  const [open, setOpen] = useState(false);
  return <>
    <button type="button" aria-haspopup="dialog" onClick={() => setOpen(true)} className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-amber-800 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-600">{sectionCopy.projectDetails}<span aria-hidden="true">↗</span></button>
    {open && <CredentialBook item={{ type: "project", title: project.company, subtitle: project.role ?? "", imageUrl: project.logoUrl, description: project.description, paragraphs: project.highlights }} onClose={() => setOpen(false)} />}
  </>;
}

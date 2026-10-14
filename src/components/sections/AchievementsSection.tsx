"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { CredentialBook, type CredentialBookItem } from "@/components/ui/CredentialBook";
import { CredentialsSection } from "./CredentialsSection";
import { TrainingShowcase } from "./TrainingShowcase";

export function AchievementsSection() {
  const [activeRecord, setActiveRecord] = useState<CredentialBookItem | null>(null);
  return (
    <section id="achievements" className="relative py-16 sm:py-24">
      <Container>
        <CredentialsSection onOpen={setActiveRecord} />
        <TrainingShowcase />
        {activeRecord && <CredentialBook item={activeRecord} onClose={() => setActiveRecord(null)} />}
      </Container>
    </section>
  );
}
